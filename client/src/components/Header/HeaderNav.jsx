import React from 'react';
import { List, ListItemText} from "@mui/material";
import {NavLink} from "react-router-dom";
import {headerNavLink} from "../../constants/data";
import PropTypes from 'prop-types'

const styles = {
    link: {
        textDecoration: 'none',
    },
};
const HeaderNav = ({mobile}) => {
    return (
       
        <List sx={mobile ?{display:'flex', flexDirection:'column', my:'10px'}:{display:'flex',justifyContent:'space-evenly', ml:{xs:0, md:'40px'}, width:'100%'}} >
            {headerNavLink.map((item) => {
                return(
                    <NavLink key={item.id} to={item.path} style={styles.link}>
                        <ListItemText primary={item.name} disableTypography={true}  sx={mobile ? {color:'#000', fontFamily:'Montserrat,sans-serif',fontSize:'15px',textTransform:'uppercase', fontWeight: '400','&:hover':{color:'#DFB48B'}, my:'10px'} : { color:'#C7D9E6',fontFamily:'Montserrat,sans-serif',fontSize:{md:'11px',lg:'17px'},textTransform:'uppercase', fontWeight: '600','&:hover':{color:'#DFB48B'}}} />

                    </NavLink>
                )
            })}
        </List>
    );
};
HeaderNav.propTypes = {
    mobile: PropTypes.bool.isRequired,
};
export default HeaderNav;