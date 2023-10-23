import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import { FC, useState } from 'react';
import { useNavigate } from "react-router-dom";

interface SetupProps {
    num: number;
    setNum: any;
    setTitle: (t: string) => void;
};

export const Setup: FC<SetupProps> = ({num, setNum, setTitle}) => {

    const navigate = useNavigate();

    setTitle("Game Setup");

    return (
        <Box
            sx={{ mt: 2}}
        >
            <Button
                variant="outlined"
                size="large"
                onClick={
                    () => {
                        setNum(num + 1);
                        navigate('/play');
                    }
                }
            >
                Start Game!</Button>
        </Box>
    );
  };