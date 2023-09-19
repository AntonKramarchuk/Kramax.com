import React from 'react';
import {Box} from "@mui/material";
import NavBarElement from "./NavBarElement/NavBarElement";
import {list1, list2, list3} from "../../../constants/data";

function NavBarFooter() {
    return (
        <Box component='div' sx={{display: 'flex'}}>
            <NavBarElement title="РЕМОНТ КВАРТИР" list={list1}/>
            <NavBarElement title="БАЛКОНИ ТА ЛОДЖІЇ" list={list2}/>
            <NavBarElement title="РЕМОНТНІ РОБОТИ" list={list3}/>
        </Box>
    );
}

export default NavBarFooter;