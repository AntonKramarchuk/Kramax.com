import React from 'react';
import {Box, Link as MaterialUILink, List, ListItemIcon, Typography, useMediaQuery} from "@mui/material";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {format} from 'date-fns'
import {Link as RouterLink} from 'react-router-dom'
import {styled} from '@mui/material/styles';
import PropTypes from 'prop-types'

const StyledTypography = styled(Typography)(({theme}) => ({
    color: '#C7D9E6',
    fontSize: '14px',
    fontWeight: '200',
    paddingBottom: '15px',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
        textAlign: 'left',
    },
}));
const HoverStyledTypography = styled(StyledTypography)(() => ({
    '&:hover': {
        textDecoration: 'underline',
    },
}));

function Contacts({mobile}) {
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));
    return (
        <Box component='div'
             sx={{display: 'flex', flexDirection: 'column', alignItems: {xs: 'center', md: 'flex-start'}}}>
            <Typography variant="body1" component='span' sx={{
                color: '#FFF',
                fontSize: {xs: '25px', md: '20px'},
                fontWeight: '600',
                lineHeight: "24px",
                "&:hover": {textDecoration: 'underline'}
            }}>
                <MaterialUILink href="tel:+38 (066) 000 00 00" underline="none" color={mobile ? 'black' :"inherit" }>+38 (066) 000 00
                    00</MaterialUILink>
            </Typography>
            <Typography variant="body1" component='span' m={1} sx={{
                color: '#DFB48B',
                fontSize: {xs: '18px', md: '14px'},
                fontWeight: '400',
                lineHeight: "17px",
                paddingTop: '5px',
                "&:hover": {textDecoration: 'underline'}
            }}><MaterialUILink href="mailto:someNew@gmail.com" underline="none"
                               color="inherit">someNew@gmail.com</MaterialUILink>
            </Typography>
            <List sx={mobile ? {width: '100%',padding: '20px 0'}:{width: '100%', padding:'40px 0 50px 0'}}>
                <ListItemIcon sx={{color: '#b9a897', display: 'flex', justifyContent: 'space-evenly'}}>
                    <MaterialUILink href='https://facebook.com/' color="inherit" target="_blank"
                                    rel="noopener noreferrer"><FacebookOutlinedIcon/></MaterialUILink>
                    <MaterialUILink href='https://www.twitter.com/' color="inherit" target="_blank"
                                    rel="noopener noreferrer"><TwitterIcon/></MaterialUILink>
                    <MaterialUILink href='https://www.instagram.com/' color="inherit" target="_blank"
                                    rel="noopener noreferrer"><InstagramIcon/></MaterialUILink>
                    <MaterialUILink href='https://www.youtube.com/' color="inherit" target="_blank"
                                    rel="noopener noreferrer"><YouTubeIcon/></MaterialUILink>
                </ListItemIcon>
            </List>
            <Box component='div' sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: {
                    xs: 'center',
                    md: 'flex-start'
                },
                justifyContent: {
                    xs: 'center',
                    md: 'flex-start'
                }
            }}>
                {mobile ? null : <Box>
                    <StyledTypography component='p'>
                        © RemontProfi – будівельно-ремонтна {isDesktop && <br/>}компанія у Києві, 2008
                        - {format(new Date(), 'yyyy')}
                    </StyledTypography>
                    <HoverStyledTypography component='p'>
                        <MaterialUILink href='#' color="inherit" underline="none" target="_blank" rel="noopener noreferrer">Розробка
                            та маркетинг- WE</MaterialUILink>
                    </HoverStyledTypography>
                    <HoverStyledTypography component='p'>
                        <MaterialUILink component={RouterLink} target="_blank" to='privacy' underline="none"
                                        color="inherit">Політика конфіденційності </MaterialUILink>
                    </HoverStyledTypography>
                </Box> }
            </Box>
        </Box>

    );
}
Contacts.propTypes = {
    mobile: PropTypes.bool.isRequired,
};
export default Contacts;