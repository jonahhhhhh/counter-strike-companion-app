import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { GameResult } from './counter-strike-game-results';
import { FC } from 'react';

interface PlayProps {
    addNewGameResult: (r: GameResult) => void;
};

export const Play : FC<PlayProps> = ({addNewGameResult}) => {

    const navigate = useNavigate();

    const endGame = (won: boolean) => {
        addNewGameResult({
            won: won
            , start: ""
            , end: ""
        });
        navigate(-2);
    };

    return (
        <>
        <h3>Game has started...</h3>
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
        </>
    );
  };