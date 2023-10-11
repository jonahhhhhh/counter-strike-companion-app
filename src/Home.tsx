import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { WinningPercentageDisplay, getWinningPercentageDisplay } from './counter-strike-game-results';
import { FC } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Table, TableBody, TableRow, TableCell, Typography, Paper } from '@mui/material';

interface HomeProps {
    winningPercentageDisplay: WinningPercentageDisplay;

};


export const Home: FC<HomeProps> = ({winningPercentageDisplay}) => {
    
    const navigate = useNavigate();

    return (
        <>
        <h3>Home</h3>
        <Button 
            variant="contained"
            size="large"
            sx={{pt: 3, pb: 3, mt: 3, mb: 3, width: '100%'}}
            onClick={() => navigate('/setup')}
        >
            <Typography fontSize={20}>
                Game Set-Up
            </Typography>
            
        </Button>
        
        <Grid container spacing={3}>
            <Grid xs={12} md={6}>
                <Paper elevation={3} sx={{overflow: 'hidden'}}>
                    <Typography sx={{fontSize: 20, ml: 2, mt: 3, mb: 3}} color='text.disabled' >
                        GENERAL
                    </Typography>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <Typography fontSize={20}>
                                        Games Played
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography  fontSize={20}>
                                        {winningPercentageDisplay.totalGames}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography fontSize={20}>
                                        Wins
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography  fontSize={20}>
                                        {winningPercentageDisplay.wins}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography fontSize={20}>
                                        Losses
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography  fontSize={20}>
                                        {winningPercentageDisplay.losses}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography fontSize={20}>
                                        W/L Ratio
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography  fontSize={20}>
                                        {winningPercentageDisplay.winningPercentage}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>
            </Grid>
        </Grid>
        </>
        

    );
  };