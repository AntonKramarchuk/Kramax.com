import React from 'react';
import {Box} from "@mui/material";
import NavBarElement from "./NavBarElement/NavBarElement";


const list1=['Стандартний ремонт','Ремонт бізнес-класу','Капітальний ремонт','Ремонт у новобудові','Косметичний ремонт','Ремонт окремих кімнат'];
const list2=['Пластикові вікна','Балкон під ключ','Холодне скління', 'Тепле скління','Французьке скління','Оздоблення балконів'];
const list3=['Ремонт комерційних приміщень','Інженерні мережі','Оздоблювальні роботи','Електромонтажні роботи','Благоустрій території','Алюмінієві теплиці']
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