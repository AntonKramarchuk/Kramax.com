import React from 'react';
import {Avatar, Box, Typography,Button} from "@mui/material";

const BalconyForm = () => {
    return (
        <Box component="div" sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: {xs: '40px 20px 0', sm:'30px 20px 0', md:'70px 20px 0'}
        }}>
            <Avatar src="/image/balcony/hot-sale.png" alt="sale"
                    sx={{
                        width: {xs: 45,},
                        height: {xs: 48},
                        mb: {xs: 4}
                    }}/>
            <Typography component='p' sx={{
                fontSize:{xs: 24, sm:25},
                lineHeight:1.2,
                textAlign:'center',
                mb:{xs:3}
            }}>
                Дайте відповідь на 5 питань і отримайте підвищену знижку 12%
            </Typography>
            <Avatar src="/image/balcony/engineering.png" alt="eng"
                    sx={{
                        width: {xs: 25},
                        height: {xs: 28},
                        mb: {xs: 2}
                    }}/>
            <Typography component='p' sx={{
                fontSize:{xs: 16},
                lineHeight:1.2,
                textAlign:'center',
                mb:{xs:3},
                width:{sx:'100%',md:'50%'},
            }}>
                Безкоштовний виїзд замірника
            </Typography>
            <Button variant="contained" sx={{p:'19px 0',width:{xs:'100%', backgroundColor:'rgb(45, 64, 76)',borderRadius:0, '&:hover':{backgroundColor:'rgb(95,97,99)'}}}}>Розпочати тест</Button>
        </Box>
    );
};

export default BalconyForm;