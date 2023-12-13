import { Box, FormControl, InputLabel, NativeSelect, MenuItem, Alert, Snackbar } from '@mui/material';
import Button from '@mui/material/Button';
import { FC, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface SetupProps {
    num: number;
    setNum: any;
    setTitle: (t: string) => void;
    map: string;
    setMap: (t: string) => void;
};




export const Setup: FC<SetupProps> = ({num, setNum, setTitle, map, setMap}) => {

    const navigate = useNavigate();

    useEffect(
        () => setTitle("Game Setup")
        , []
    );


    const handleChange = (event: SelectChangeEvent) => {
        setMap(event.target.value as string);  
    }

    const [showWarning, setShowWarning] = useState(false);

    return (

        <Box
            sx={{ mt: 2}}
        >
            <Snackbar 
                anchorOrigin={{ 
                    vertical: "top"
                    , horizontal: "center" 
                }}
                open={showWarning} 
                autoHideDuration={2500} 
                onClose={
                    () => setShowWarning(false)
                }
            >
                <Alert 
                    severity="warning" 
                    sx={{ 
                        width: '100%' 
                    }}
                >
                    Please slect a map before starting a game.
                </Alert>
            </Snackbar>
        <br></br>
        <FormControl fullWidth>
            <InputLabel variant="filled">Select Map</InputLabel>
            <Select
                value={map}
                onChange={handleChange}
            >
                <MenuItem value={"Ancient"}>Ancient</MenuItem>
                <MenuItem value={"Anubis"}>Anubis</MenuItem>
                <MenuItem value={"Dust 2"}>Dust 2</MenuItem>
                <MenuItem value={"Inferno"}>Inferno</MenuItem>
                <MenuItem value={"Mirage"}>Mirage</MenuItem>
                <MenuItem value={"Nuke"}>Nuke</MenuItem>
                <MenuItem value={"Overpass"}>Overpass</MenuItem>
                <MenuItem value={"Office"}>Office</MenuItem>
                <MenuItem value={"Vertigo"}>Vertigo</MenuItem>
            </Select>
        </FormControl>
        <br></br>
        <br></br>
        <br></br>
            <Button
                variant="contained"
                size="large"
                onClick={
                    () => {
                        if (map.length == 0) {
                            setShowWarning(true)
                        } else {
                            setNum(num + 1);
                            navigate('/play');
                            setMap(map)
                        }
                        
                    }
                }
            >
                Start Game!</Button>
        </Box>
    );
  };