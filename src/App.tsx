import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import { Home } from "./Home";
import { Setup } from "./Setup";
import { Play } from "./Play";
import { GameResult, getWinningPercentageDisplay, getGeneralGameTimeFacts } from './counter-strike-game-results';
import { AppBar, Box, Toolbar } from '@mui/material';
import ComputerIcon from '@mui/icons-material/Computer';
import Typography from '@mui/material/Typography';
import TableBarOutlined from '@mui/icons-material/TableBarOutlined'

const counterStrikeResults: GameResult[] = [];

const App = () => {

  const [num, setNum] = useState(1);
  const [gameResults, setGameResults] = useState<GameResult[]>(counterStrikeResults);

  const addNewGameResult = (newGameResult: GameResult) => setGameResults(
    [
      ...gameResults
      , newGameResult
    ]
  );

  const router = createHashRouter([
    {
      path: "/",
      element: <Home
        winningPercentageDisplay={getWinningPercentageDisplay(gameResults)}
        generalGameTimeFacts={getGeneralGameTimeFacts(gameResults, Date.now())}
      />,
    },
    {
      path: "/setup",
      element: <Setup
        num={num}
        setNum={setNum}
      />,
    },
    {
      path: "/play",
      element: <Play
        addNewGameResult={addNewGameResult}
      />,
    },
  ]);

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ overflow: 'hidden', bgcolor: 'MediumSeaGreen' }}>
          <Toolbar>
            <ComputerIcon sx={{ mr: 3, fontSize: '2em' }}></ComputerIcon>
            <Typography variant='h6'>
              Counter-Strike 2 Companion App
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ pl: 4, pr: 4, textAlign: 'left' }}>
        <RouterProvider router={router} />
      </Box>

    </div>




  );
};

export default App;
