import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './style.css'

export default function Spinner() {
  return (
    <Box sx={{ display: 'flex', width:'100%',height:'100vh',alignItems:'center',justifyContent:'center'}}>
      <CircularProgress sx={{color:'#fff'}}/>
    </Box>
  );
}