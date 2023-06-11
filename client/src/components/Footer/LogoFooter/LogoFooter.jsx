import React from 'react';
import {Avatar, Box} from "@mui/material";
import {Link} from 'react-router-dom'
function LogoFooter() {
    return (

           <Box component='div' sx={{height: '100%',}} >
               <Link to='/'>
                   <Avatar
                       alt="Logo"
                       src="image/logo_footer.svg"
                       variant="square"
                       sx={{ width:"256px", height: "145px" }}
                   />
               </Link>
               </Box>
    );
}

export default LogoFooter;