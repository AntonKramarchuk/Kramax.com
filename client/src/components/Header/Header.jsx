import React from 'react';
import {AppBar, Container, IconButton, Toolbar, Box, Button, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import SearchIcon from '@mui/icons-material/Search';
import {styled} from '@mui/material/styles';

const HeaderBar = styled(AppBar)({
    boxShadow: 'none',
    borderRadius: 0,
    lineHeight: 1.5,
    backgroundColor: '#2D404C',
    height: '62px'
})
const HeaderButton = styled(Button)({
    boxShadow: 'none',
    borderRadius: 0,
    lineHeight: 1.5,
    height:'62px',
    backgroundColor: '#DDB38B',
    color:'#2D404C',
    fontWeight:'600',
})
const Header = () => {
    return (
        <>
            <HeaderBar>
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{
                        display:'flex',
                        justifyContent:'space-between'
                    }}>
                        <Box sx={{  display: { xs: 'flex', md: 'none' }, }}>
                            <IconButton  size="large" color="secondary">
                                <MenuIcon/>
                            </IconButton>
                            <IconButton  size="large" color="secondary"  component="a"  href="tel:+38 (066) 000 00 00" sx={{ display: { xs: 'flex', sm: 'none' }}}>
                                <PhoneIcon/>
                            </IconButton>
                            <Typography variant="h6"
                                        noWrap
                                        component="a"
                                        color="secondary"
                                        href="tel:+38 (066) 000 00 00"
                                        sx={{textDecoration: 'none',  display: { xs: 'none', sm: 'flex', md:'none' }, alignItems:'center'}}>+ 38 (066) 000 00 00</Typography>
                        </Box>
                        <Box sx={{display:'flex'}}>
                            <IconButton  size="large" color="primary" sx={{ display: { xs: 'none', sm: 'flex' }}}>
                                <SearchIcon/>
                            </IconButton>
                            <HeaderButton>Замовити послугу</HeaderButton>
                        </Box>
                      
                    </Toolbar>
                  
                </Container>
          
            </HeaderBar>
        </>
       
       
    );
};

export default Header;