import Button from '@mui/material/Button';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import { useNavigate } from "react-router-dom";
import { WinningPercentageDisplay } from './counter-strike-game-results';
import { FC } from 'react';

interface HomeProps {
    winningPercentageDisplay: WinningPercentageDisplay;

};


export const Home: FC<HomeProps> = ({winningPercentageDisplay}) => {
    
    const navigate = useNavigate();

    return (
        <>
        <h3>Home</h3>
        <Button 
            variant="outlined"
            size="large"
            startIcon={<SmartDisplayIcon />}
            onClick={() => navigate('/setup')}
        >
            Play Counter-Strike
        </Button>
        <h4>
            {`Total Games Played: ${winningPercentageDisplay.totalGames}`}
        </h4>
        <h4>
            {`Wins: `}
        </h4>
        <h4>
            {`Losses: `}
        </h4>
        <h4>
            {`W/L Ratio: ${winningPercentageDisplay.winningPercentage}`}
        </h4>
        </>

    );
  };