import React from 'react';
import {Box, Link as MaterialUILink, List, ListItemIcon, Typography} from "@mui/material";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {format} from 'date-fns'
import{Link as RouterLink } from 'react-router-dom'
function ContactsFooter() {
    return (
        <Box component='div' sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
            <Typography variant="body1" component='span' sx={{
                color: '#FFF',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '20px',
                fontWeight: '600',
                lineHeight: "24px",
                "&:hover": {textDecoration: 'underline'}
            }}>
                <MaterialUILink href="tel:+38 (066) 000 00 00" underline="none" color="inherit">+38 (066) 000 00 00</MaterialUILink>
            </Typography>
            <Typography variant="body1" component='span' m={1} sx={{
                color: '#DFB48B',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '14px',
                fontWeight: '400',
                lineHeight: "17px",
                "&:hover": {textDecoration: 'underline'}
            }}><MaterialUILink href="mailto:someNew@gmail.com" underline="none" color="inherit">someNew@gmail.com</MaterialUILink>
            </Typography>
            <List sx={{width: '100%', padding: '40px 0 50px 0'}}>
                <ListItemIcon sx={{color: '#b9a897', display: 'flex', justifyContent: 'space-between'}}>
                   <MaterialUILink href='https://facebook.com/' color="inherit" target="_blank" rel="noopener noreferrer"><FacebookOutlinedIcon sx={{ fontSize: 40, '&:hover': {color: '#DFB48B'}}}/></MaterialUILink>
                    <MaterialUILink href='https://www.twitter.com/' color="inherit" target="_blank" rel="noopener noreferrer"><TwitterIcon sx={{ fontSize: 40, '&:hover': {color: '#DFB48B'}}}/></MaterialUILink>
                    <MaterialUILink href='https://www.instagram.com/' color="inherit"target="_blank" rel="noopener noreferrer" ><InstagramIcon sx={{ fontSize: 40, '&:hover': {color: '#DFB48B'}}}/></MaterialUILink>
                    <MaterialUILink href='https://www.youtube.com/' color="inherit" target="_blank" rel="noopener noreferrer"><YouTubeIcon sx={{ fontSize: 40, '&:hover': {color: '#DFB48B'}}}/></MaterialUILink>
                </ListItemIcon>
            </List>
            <Box>
                <Typography component='p' sx={{
                    color: '#FFF',
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '14px',
                    fontWeight: '200',
                    paddingBottom: '15px',
                }}>
                    © RemontProfi – будівельно-ремонтна <br/>компанія у Києві, 2008 - {format(new Date(), 'yyyy')}
                </Typography>
                <Typography component='p' sx={{
                    color: '#FFF',
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '14px',
                    fontWeight: '200',
                    paddingBottom: '15px',
                    '&:hover':{textDecoration:'underline'}
                }}>
                    <MaterialUILink href='#' color="inherit" underline="none" target="_blank" rel="noopener noreferrer">Розробка та маркетинг- WE</MaterialUILink>
                </Typography>
                <Typography component='p' sx={{
                    color: '#FFF',
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '14px',
                    fontWeight: '200',
                    '&:hover':{textDecoration:'underline'}
                }}>
                   <MaterialUILink component={RouterLink}  target="_blank" to='privacy' underline="none" color="inherit">Політика конфіденційності </MaterialUILink>
                </Typography>

            </Box>


        </Box>

    );
}

export default ContactsFooter;