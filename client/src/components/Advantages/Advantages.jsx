import React, {useState} from 'react';
import {Box, Container, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import {Link} from 'react-router-dom'
const data = [
    {
        id: 1,
        img: [
            'image/advantageIcon/ben-1.png',
            'image/advantageIcon/ben-1-b.png'
        ],
        title: 'Не виходимо за межі кошторису'
    },
    {
        id: 2,
        img: [
            'image/advantageIcon/ben-2.png',
            'image/advantageIcon/ben-2-b.png'
        ],
        title: 'Гарантія на всі роботи 3 роки'
    },
    {
        id: 3,
        img: [
            'image/advantageIcon/ben-3.png',
            'image/advantageIcon/ben-3-b.png'
        ],
        title: 'Оплата робот за фактом'
    },
    {
        id: 4,
        img: [
            'image/advantageIcon/ben-4.png',
            'image/advantageIcon/ben-4-b.png'
        ],
        title: 'Безвідсоткова розстрочка'
    },
    {
        id: 5,
        img: [
            'image/advantageIcon/ben-5.png',
            'image/advantageIcon/ben-5-b.png'
        ],
        title: 'Офіційний договір'
    },
    {
        id: 6,
        img: [
            'image/advantageIcon/ben-6.png',
            'image/advantageIcon/ben-6-b.png'
        ],
        title: 'Понад 10 років досвіду'
    }
]
const styles = {
    link: {
        textDecoration: 'none',
    },
};
function Advantages() {
    const [hovered, setHovered] = useState(null);
    return (
        <Container maxWidth="lg">
            <Box component="div"
                 sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Typography variant='h3' color='#5c6366'
                            sx={{fontSize: {xs:'25px',sm:'30px',md:'40px'}, fontWeight: '200', lineHeight: "1.2", marginBottom: '20px', letterSpacing:'3px'}}>Переваги
                    роботи з нами</Typography>
                <List sx={{display: 'grid',gridTemplateColumns: {xs:'repeat(2, 1fr)', md:'repeat(6, 1fr)'} }}>
                    {data.map((item) => {
                        return <Link key={item.id} to='/' style={styles.link}>
                            <ListItem
                                      onMouseLeave={() => setHovered(null)}
                                      onMouseEnter={() => setHovered(item.id)}
                                      sx={{
                                          display: 'flex',
                                          flexDirection: 'column',
                                          alignItems: {sx:'center',sm:'flex-start'},
                                          paddingBottom:'20px',
                                          maxWidth:'250px',
                                          '&:hover': {textDecoration: 'underline'}
                                      }}>
                                <ListItemAvatar sx={{padding: '10px'}}>
                                    <img src={hovered === item.id && item.img.length > 1
                                        ? item.img[1]
                                        : item.img[0]} alt="tec"
                                    />
                                </ListItemAvatar>
                                <ListItemText disableTypography={true} primary={item.title}
                                    sx={{fontSize: {xs:'14px',md:'18px'}, fontWeight: '200', lineHeight: "1.2", color: '#5c6366',
                                    }}/>
                            </ListItem>
                        </Link>
                    })}
                </List>
            </Box>
        </Container>
    );
}

export default Advantages;