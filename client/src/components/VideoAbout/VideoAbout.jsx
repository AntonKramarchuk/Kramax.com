import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import EastIcon from '@mui/icons-material/East';
function VideoAbout() {
    return (
        <Container maxWidth="lg">
            <Box component="div" sx={{
                display: 'flex',
                flexDirection: {xs: "column-reverse", lg: 'row'},
                marginBottom: {xs: '21px', md: '24px', lg: '27px'}
            }}>
                <Box component="div" sx={{width: {xs: '100%', lg: '50%'}, padding:{xs:'0',lg:'70px 70px 70px 0'}}}>
                    <Typography variant='h3' color='#172127' sx={{
                        fontSize: {xs: '30px', md: '50px', lg: '65px'},
                        letterSpacing: {xs: '0', md: '.2rem'},
                        fontWeight: '200',
                        marginBottom: {xs: '15px', md: '40px', lg: '60px'}
                    }}>
                        RemontProfi
                    </Typography>
                    <Typography component='p' color='#1C272E' sx={{
                        fontSize: {xs: '16px', md: "20px"},
                        marginBottom: {xs: '20px', lg: '40px'},
                        lineHeight: '1.2'
                    }}>
                        RemontProfi - ми дбаємо про ваш комфорт. З нами ви зможете втілити в інтер&apos;єрі ваші
                        будь-які дизайнерські ідеї, створити затишну і стильну обстановку - і все це в стислі терміни і
                        за розумними цінами.
                    </Typography>
                    <Typography component='p' color='#1C272E' sx={{
                        fontSize: {xs: '14px', md: "16px"}, fontWeight: '200',
                        lineHeight: '1.2'}}>
                        Про нашу надійність та високий професіоналізм свідчать
                        вдячні відгуки наших клієнтів. Досвідчені кваліфіковані будівельники якісно та швидко проведуть
                        капітальний чи косметичний ремонт квартири чи офісу. Ми ведемо постійний контроль якості на всіх
                        етапах робіт. При проведенні ремонту використовуються тільки перевірені та безпечні матеріали,
                        тому ми можемо гарантувати: відмінний результат збережеться надовго.
                    </Typography>
                    <Link to='/privacy'>
                        <Box component='div' sx={{
                            
                            margin:{xs:'40px auto', sm:'40px 0'},
                            height:'66px',
                            width: '192px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'relative',
                            border:'2px solid #dfb48b',
                        }}><Typography component='span' color='#dfb48b' sx={{fontSize:'15px',fontWeight: '700', textTransform: 'uppercase'}}>Детальніше</Typography>
                            <EastIcon sx={{
                                fontSize: '45px',
                                position: 'absolute',
                                top: '15%',
                                right: '85%',
                                fill: '#dfb48b',
                                background:'#fff',
                            }}/>
                        </Box>
                    </Link>
                </Box>
                <Box component="div">Video</Box>
            </Box>
        </Container>
    
    );
}

export default VideoAbout;