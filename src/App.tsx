import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';

function App() {
  return (
    <div className="App">
      <Button variant="outlined" size="large" startIcon={<SmartDisplayIcon />}> Play Counter Strike</Button>
    </div>
  );
}

export default App;
