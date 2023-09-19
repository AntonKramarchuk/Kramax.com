import React,{useState} from 'react';
import {AppBar, IconButton, Toolbar, Box, Button, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from "@mui/material/Drawer";
import {styled} from '@mui/material/styles';
import HeaderNav from "./HeaderNav";
import LogoLink from "../LogoLink/LogoLink";
import Contacts from "../Contacts/Contacts";

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
    '&:hover': {
        backgroundColor: '#c8dbe7',
        boxShadow: 'none',
    },

})
const Header = () => {
    
    const [mobileFilterOpen, setMobileFilterOpen] = useState(false)
    const mobileFilterToggle = () => {
        setMobileFilterOpen(current => !current)
    }
    return (
        <>
            <HeaderBar position='sticky'>
             
                    <Toolbar disableGutters sx={{
                        display:'flex',
                        justifyContent:{xs:'space-between'}
                    }}>
                        <Box sx={{ display: { xs: 'none', md: 'flex' },width:{md:'70%', lg:'80%'}}}>
                          <HeaderNav/>
                        </Box>
                        <Box sx={{  display: { xs: 'flex', md: 'none' }}}>
                            <IconButton  size="large" color="secondary">
                                <MenuIcon onClick={mobileFilterToggle}/>
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
                            <IconButton  size="large" color="primary" sx={{ display: 'flex'}}>
                                <SearchIcon/>
                            </IconButton>
                            <HeaderButton>Замовити послугу</HeaderButton>
                        </Box>
                    </Toolbar>
                <Drawer
                    anchor="left"
                    component="div"
                    variant="temporary"
                    open={mobileFilterOpen}
                    onClose={mobileFilterToggle}
                    ModalProps={{ keepMounted: true }}
                    SlideProps={{ timeout: 400 }}
                    sx={{
                        display:{md: 'none'},
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: { xs: '100%', sm: '50%', md: 'none' },
                            color: "#1A1A1A",
                            display:{md: 'none'}
                        }
                    }}>
                    <Box
                        sx={{
                            p: 2,
                            height: 1,
                            backgroundColor: "white",
                            
                        }}>
                        <Box  sx={{width:{xs:'95%', sm:'100%'}, display:'flex', justifyContent:'flex-end',}}>
                            <CloseIcon onClick={mobileFilterToggle} sx={{cursor:'pointer'}}  />
                        </Box>
                        <LogoLink mobile/>
                        <HeaderNav mobile/>
                        <Box sx={{margin: '10px 0', display:'flex',justifyContent:'center',width:'100%' }}>
                            <HeaderButton>Замовити послугу</HeaderButton>
                        </Box>
                       
                        <Contacts mobile/>
                    </Box>
                </Drawer>
                
            </HeaderBar>
        </>
       
       
    );
};

export default Header;