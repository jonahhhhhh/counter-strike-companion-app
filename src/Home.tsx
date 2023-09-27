import Button from '@mui/material/Button';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import { useNavigate } from "react-router-dom";



export const Home = () => {
    
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
            Play Counter-Strike</Button>
        </>
    );
  };