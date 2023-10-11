import React from 'react';
import {Box, Typography, TextField, Button, Stack} from "@mui/material";
import EastIcon from '@mui/icons-material/East';
import {styled} from '@mui/material/styles';

const NextButton = styled(Button)({
    boxShadow: 'none',
    padding: '10px 40px',
    borderRadius: 0,
    lineHeight: 1.5,
    backgroundColor: '#DFB48B',
    // borderColor: '#DFB48B',
    fontSize: '15px',
    color: 'black',
    '&:hover': {
        backgroundColor: '#c8dbe7',
        boxShadow: 'none',
    },
    
})
const BalconyTest = () => {
    return (
        <Box component="div" sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            p: {xs: '40px 20px 0', sm: '30px 20px 0', md: '70px 20px 0'},
            background: '#fff',
            
        }}>
            <Typography component='p' sx={{
                fontSize: {xs: '20px', sm: '25px', md: '30px'},
                pb: {xs: '15px', sm: '10px', md: '20px'},
            }}>
                Яка площа вашого балкону?
            </Typography>
            <Typography component='p' sx={{
                fontSize: {xs: '14px', sm: '16px'},
                pb: {xs: '15px', md: '25px'},
                fontWeight: 300
            }}>
                Всередині балкона потрібно виміряти довжину та ширину та помножити значення між собою. Ви отримаєте
                площу балкона у квадратних метрах
            </Typography>
            <Box component="form" sx={{display: 'flex', alignItems: 'center', '& > :not(style)': {mt: 2, mb: 3},}}>
                <TextField type="number"  size="medium" focused/>
                <Typography component='p' sx={{ml: '20px', fontSize: {xs: '20px', sm: '24px'}}}>м&sup2;</Typography>
            </Box>
            <Stack direction="row" spacing={2} sx={{pt: 6, mx: 'auto'}}>
                <Button variant="text" startIcon={<EastIcon sx={{
                    transform: 'rotate(180deg)',
                }}/>} sx={{
                    fontSize: {xs: '15px', sm: '20px'},
                    
                }}>
                    Назад
                </Button>
                <NextButton>Далі</NextButton>
            </Stack>
        
        </Box>
    );
};

export default BalconyTest;