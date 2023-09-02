import React from 'react';
import {Box, Typography, TextField,Button } from "@mui/material";
import EastIcon from '@mui/icons-material/East';

const BalconyTest = () => {
    return (
        <Box component="div" sx={{
           
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            p: {xs: '40px 20px 0', sm:'30px 20px 0', md:'70px 20px 0'},
            background: '#fff',
            border:'1px solid black'
        }} >
            <Typography component='p' sx={{
                fontSize:{xs: '20px', sm: '25px', md: '30px'},
                pb:{xs:'15px', sm:'10px',md:'20px'},
            }}>
                Яка площа вашого балкону?
            </Typography>
            <Typography component='p' sx={{
                fontSize:{xs: '14px', sm: '16px'},
                pb:{xs:'15px',md:'25px'},
                fontWeight: 300
            }}>
                Всередині балкона потрібно виміряти довжину та ширину та помножити значення між собою. Ви отримаєте площу балкона у квадратних метрах
            </Typography>
            <Box component="form" sx={{display:'flex',alignItems:'center', '& > :not(style)': { mt: 2}, }}>
                <TextField variant="outlined"  size="medium" focused  color='primary' sx={{}}/>
                <Typography  component='p' sx={{ml:'20px', fontSize:{xs:'20px', sm:'24px'}}}>м&sup2;</Typography>
            </Box>
            <Box component='div' sx={{display:'flex', alignItems:'center'}}>
                <Button variant="text" startIcon={<EastIcon sx={{
                    transform: 'rotate(180deg)',
                   
                }}/>} sx={{
                    fontSize:{xs:'15px', sm:'20px'},
                    py:4,
                   
                }}>
                    Назад
                </Button>
                <Button variant="outlined" sx={{
                    fontSize:{xs:'15px', sm:'20px'},
                   px:3
                }}>Далі</Button>
            </Box>
           
        </Box>
    );
};

export default BalconyTest;