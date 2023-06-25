import React from 'react';
import {Avatar, Box, Container, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";

const data = [
    {
        img: 'image/ben-1.png',
        title: 'Не виходимо за межі кошторису'
    },
    {
        title: 'Гарантія на всі роботи 3 роки'
    },
    {
        title: 'Оплата робот за фактом'
    },
    {
        title: 'Безвідсоткова розстрочка'
    },
    {
        title: 'Офіційний договір'
    },
    {
        title: 'Понад 10 років досвіду'
    }
]

function Advantages() {
    return (
        <Container maxWidth="lg">
            <Box component="div"
                 sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Typography variant='h2'>Переваги роботи з нами</Typography>
                <List sx={{display: 'flex'}}>
                    {data.map((item, index) => {
                        return <ListItem key={index} sx={{display:'flex', flexDirection: 'column', alignItems:'flex-start'}}>
                            <ListItemAvatar>
                                <Avatar  variant="square" alt='tec' src={item.img}  sx={{ width:"54px", height: "70px" }}/>
                            </ListItemAvatar>
                            <ListItemText>
                                {item.title}
                            </ListItemText>
                        </ListItem>
                    })}
                </List>
            </Box>
        </Container>
    );
}

export default Advantages;