import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import BalconyForm from './BalconyForm'
const BalconyPrice = () => {
    return (
        <Container maxWidth="lg">
            <Box component="div" sx={{
                width: '100%',
                mb: '30px',
                p: {xs: '40px 0', sm: '90px 0'},
                position: 'relative',
                display: 'flex',
                flexDirection: {xs: 'column', sm: 'row'}
            }}>
                <Box component="div" sx={{
                    width: {xs: '100%', sm: '70%'},
                    background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${"/image/balcony/balcony.jpg"})`,
                    backgroundSize: 'cover',
                    p: {xs: '30px 0', sm: '100px 0', md: '150px 0'}
                }}>
                    <Box component="div" sx={{
                        width: {xs: '100%', sm: '60%'},
                        height: '90%',
                        m: {xs: '10% auto', sm: '0'},
                        pl: {sm: '10px', md: '15px'}
                    }}>
                        <Typography component='h3' color='#fff' sx={{
                            fontSize: {xs: '24px', sm: '30px', md: '40px'},
                            lineHeight: '1.2',
                            textAlign: {xs: 'center', sm: 'left'},
                            mb: {xs: '15px', sm: '30px'}
                        }}>Дізнайтесь вартість скління або оздоблення балкона </Typography>
                        <Typography component='p' color='#fff' sx={{
                            fontSize: {xs: '16px'},
                            lineHeight: '1.9',
                            textAlign: {xs: 'center', sm: 'left'}
                        }}>Пройди тест та отримай розрахунок вартості ремонту свого балкона та приємний бонус – знижку
                            12% та безкоштовний виїзд замірника </Typography>
                    </Box>
                </Box>
                <Box component="div" sx={{
                    width: {xs: '100%', sm: '30%'},
                    display: {xs: 'none', sm: 'block'},
                    backgroundColor: '#c8dbe7'
                }}></Box>
                <Box component="div"
                     sx={{
                         position: {xs: 'static', sm: 'absolute'},
                         bottom:{sm:'13%',md:'11%'},
                         right:'10%',
                         backgroundColor: '#DFB48B',
                         width: {xs: '100%', sm: '47%'},
                         height: {xs: '100%', sm: '65%', md:'70%'},
                         
                     }}>
                    <BalconyForm/>
                </Box>
            </Box>
        
        </Container>
    
    );
};

export default BalconyPrice;