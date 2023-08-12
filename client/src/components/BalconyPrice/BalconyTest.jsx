import React from 'react';
import {Box} from "@mui/material";

const BalconyTest = () => {
    return (
        <Box component="div" sx={{
           
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: {xs: '40px 20px 0', sm:'30px 20px 0', md:'70px 20px 0'},
            background: '#fff'
        }} >
            Test
        </Box>
    );
};

export default BalconyTest;