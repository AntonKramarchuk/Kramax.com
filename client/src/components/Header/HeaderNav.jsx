import React from 'react';
import { List, ListItemText} from "@mui/material";
import {NavLink} from "react-router-dom";
import {headerNavLink} from "../../constants/data";
const styles = {
    link: {
        textDecoration: 'none',
    },
};
const HeaderNav = () => {
    return (
       
        <List sx={{display:'flex',justifyContent:'space-evenly', ml:{xs:0, md:'40px'}, width:'100%'}} >
            {headerNavLink.map((item) => {
                return(
                    <NavLink key={item.id} to={item.path} style={styles.link}>
                        <ListItemText primary={item.name} disableTypography={true}  sx={{ color:'#C7D9E6',fontFamily:'Montserrat,sans-serif',fontSize:{md:'11px',lg:'17px'},textTransform:'uppercase', fontWeight: '600','&:hover':{color:'#DFB48B'}}} />

                    </NavLink>
                )
            })}
        </List>
    );
};

export default HeaderNav;