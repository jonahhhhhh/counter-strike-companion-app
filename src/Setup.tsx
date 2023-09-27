import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

export const Setup = () => {

    const navigate = useNavigate();

    return (
        <>
        <h3>Setup a Game of Counter-Strike</h3>
        <Button
            variant="outlined"
            size="large"
            onClick={() => navigate('/play')}
        >
            Start Game!</Button>
        </>
    );
  };