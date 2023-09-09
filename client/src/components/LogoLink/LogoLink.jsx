import React from 'react';
import {Avatar, Box} from "@mui/material";
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
function LogoLink({mobile}) {
    return (

           <Box component='div' sx={{height: '100%',}} >
               <Link to='/'>
                   <Avatar
                       alt="Logo"
                       src={mobile ? "image/remontprofi_logo_01.svg":"image/logo_footer.svg" }
                       variant="square"
                       sx={mobile?{width:"190px", height: "106px" }:{ width:"256px", height: "145px" }}
                   />
               </Link>
               </Box>
    );
}
LogoLink.propTypes = {
    mobile: PropTypes.bool.isRequired,
};
export default LogoLink;