import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { GameResult, getWinningPercentageDisplay } from './counter-strike-game-results';
import { FC, useEffect, useState } from 'react';
import { Box } from '@mui/material';

interface PlayProps {
    addNewGameResult: (r: GameResult) => void;
    setTitle: (t: string) => void;
    map: string;
};

export const Play : FC<PlayProps> = ({addNewGameResult, setTitle, map}) => {

    useEffect(
        () => setTitle(`Playing on ${map}`)
        , []
    );

    const navigate = useNavigate();

    const [startTimestamp, _] = useState(new Date().toISOString());

    const endGame = (won: boolean) => {
        addNewGameResult({
            won: won
            , start: startTimestamp
            , end: new Date().toISOString()
            , map: map
        });
        navigate(-2);
    };

    return (
        
        <Box
            sx={{ mt: 4}}
        >
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