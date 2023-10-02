import Button from '@mui/material/Button';
import { FC, useState } from 'react';
import { useNavigate } from "react-router-dom";

interface SetupProps {
    num: number;
    setNum: any;
};

export const Setup: FC<SetupProps> = ({num, setNum}) => {

    const navigate = useNavigate();

    return (
        <>
            <h3>
                Setup a Game of Counter-Strike ({num})
            </h3>
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
        </>
    );
  };