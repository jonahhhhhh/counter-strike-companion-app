import { Box, FormControl, InputLabel, NativeSelect } from '@mui/material';
import Button from '@mui/material/Button';
import { FC, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Select } from '@mui/material';

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
        <br></br>
        <FormControl fullWidth>
            <InputLabel variant="standard">Select Map</InputLabel>
            <NativeSelect>
                <option value={1}>Ancient</option>
                <option value={2}>Anubis</option>
                <option value={3}>Dust 2</option>
                <option value={4}>Inferno</option>
                <option value={5}>Mirage</option>
                <option value={6}>Nuke</option>
                <option value={7}>Overpass</option>
                <option value={8}>Office</option>
                <option value={9}>Vertigo</option>
            </NativeSelect>
        </FormControl>
        <br></br>
        <br></br>
        <br></br>
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