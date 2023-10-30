import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { GameResult } from './counter-strike-game-results';
import { FC, useState } from 'react';
import { Box } from '@mui/material';

interface PlayProps {
    addNewGameResult: (r: GameResult) => void;
    setTitle: (t: string) => void;
};

export const Play : FC<PlayProps> = ({addNewGameResult, setTitle}) => {

    setTitle("Play Game");

    const navigate = useNavigate();

    const [startTimestamp, _] = useState(new Date().toISOString());

    const endGame = (won: boolean) => {
        addNewGameResult({
            won: won
            , start: startTimestamp
            , end: new Date().toISOString()
            , map: "inferno"
        });
        navigate(-2);
    };

    return (
        <Box
            sx={{ mt: 2}}
        >
            <br></br>
            <Button
                variant="outlined"
                size="large"
                onClick={() => {endGame(true)}
                }
            >
                Win
            </Button>
            <br></br>
            <br></br>
            <Button
                variant="outlined"
                size="large"
                onClick={() => {endGame(false)}
            }
            >
                Loss
            </Button>
        </Box>
    );
  };