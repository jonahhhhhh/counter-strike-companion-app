import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import { Home } from "./Home";
import { Setup } from "./Setup";
import { Play } from "./Play";
import { GameResult, getWinningPercentageDisplay, getGeneralGameTimeFacts, getWinningPercentageByMap} from './counter-strike-game-results';
import { AppBar, TextField, Box, Dialog, DialogActions, useTheme, DialogContent, DialogContentText, DialogTitle, IconButton, Toolbar, Button, useMediaQuery } from '@mui/material';
import { SettingsOutlined, TextFields } from '@mui/icons-material';
import ComputerIcon from '@mui/icons-material/Computer';
import Typography from '@mui/material/Typography';
import TableBarOutlined from '@mui/icons-material/TableBarOutlined'
import localForage from 'localforage';
import { loadGamesFromCloud, saveGameToCloud } from './tca-cloud-api';

const counterStrikeResults: GameResult[] = [];

const App = () => {

  const [num, setNum] = useState(1);
  const [gameResults, setGameResults] = useState<GameResult[]>(counterStrikeResults);
  const [title, setTitle] = useState<string>("Counter Strike 2 Companion App");
  const [map, setMap] = useState<string>("");

  const [settingsOpen, setSettingsOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [emailAddress, setEmailAddress] = React.useState("")
  const [emailAddressUpdatedCount, setEmailAddressUpdatedCount] = React.useState(0);

  useEffect(
    () => {
      const init = async () => {
        if (!ignore) { 

          const email = await localForage.getItem<string>('email') ?? "";

          if (email.length > 0) {

            setEmailAddress(email);

            const cloudGameResults = await loadGamesFromCloud(
              email
              , 'tca-counter-strike-fall-2023'
            );

            setGameResults(cloudGameResults)
          }
        }
      };
      let ignore = false;
      init();

      return(
        //Returns a cleanup function
        () => {
          ignore = true;
        }
      );
    }
    , [emailAddressUpdatedCount]
  );


  const addNewGameResult = async (newGameResult: GameResult) => {

    // If we have an email address, save the game to the cloud
    if (emailAddress.length > 0) {
      await saveGameToCloud(
        emailAddress
        , 'tca-counter-strike-fall-2023'
        , newGameResult.end
        , newGameResult
      );
    }
    // Optimistically update lifted state
    setGameResults(
      [
        ...gameResults
        , newGameResult
      ]
    );
  }

  const router = createHashRouter([
    {
      path: "/",
      element: <Home
        winningPercentageDisplay={getWinningPercentageDisplay(gameResults)}
        generalGameTimeFacts={getGeneralGameTimeFacts(gameResults, Date.now())}
        setTitle={setTitle}
        getWinningPercentageByMap={getWinningPercentageByMap(gameResults)}
      />,
    },
    {
      path: "/setup",
      element: <Setup
        num={num}
        setNum={setNum}
        setTitle={setTitle}
        map={map}
        setMap={setMap}
      />,
    },
    {
      path: "/play",
      element: <Play
        addNewGameResult={addNewGameResult}
        setTitle={setTitle}
        map={map}
      />,
    },
  ]);

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ overflow: 'hidden', bgcolor: 'MediumSeaGreen' }}>
          <Toolbar>
            { title == "Counter Strike 2 Companion App" && 
              <ComputerIcon 
              sx={{
                mr: 3,
                fontSize: '2em',
                display: title == "Counter Strike 2 Companion App" ? 'inherit' : 'none'
              }}></ComputerIcon>
            }
            <Typography variant='h6' textAlign='left' sx={{flexGrow: 1}}>
              {title}
            </Typography>
            <IconButton
              size='small'
              onClick={() => setSettingsOpen(true)}
              >
              <SettingsOutlined />

            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ pl: 4, pr: 4, textAlign: 'left' }}>
        <RouterProvider router={router} />
      </Box>

      <Dialog
        fullScreen={fullScreen}
        open={settingsOpen}
        onClose={
          () => setSettingsOpen(false)
        }
      >
        <DialogTitle id="responsive-dialog-title">
          Settings
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Your email address will be used to save/load game results. We will
            not send you any spam!
          </DialogContentText>

          <TextField 
            label="Enter your email address"
            variant="outlined"
            fullWidth
            value={emailAddress}
            onChange={
              (e) => setEmailAddress(e.target.value)
            }
            sx={{
              mt: 3
            }}
          />



        </DialogContent>
        <DialogActions>
          <Button 
            variant={emailAddress.length > 0 ? 'contained' : 'outlined'}
            onClick={
            async() => {
              await localForage.setItem('email', emailAddress);
              setEmailAddressUpdatedCount(emailAddressUpdatedCount + 1);
              setSettingsOpen(false);
              }
            }
            autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>



    </div>




  );
};

export default App;
