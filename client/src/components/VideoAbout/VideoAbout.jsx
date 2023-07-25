import React from 'react';
import {Box, Container, Typography} from "@mui/material";

function VideoAbout() {
    return (
        <Container maxWidth="lg">
            <Box component="div" sx={{display: 'flex',flexDirection:{xs:"column-reverse", lg:'row'}, marginBottom:{xs:'21px',md:'24px',lg:'27px'}}}>
                <Box component="div" sx={{width:{xs:'100%', lg:'50%'}}}>
                    <Typography variant='h3' color='#172127' sx={{fontSize:{xs:'30px',md:'50px',lg:'65px'}, letterSpacing:".2rem", fontWeight: '200', marginBottom:{xs:'20px',md:'40px',lg:'60px'} }}>
                        RemontProfi
                    </Typography>
                    <Typography component='p' color='#1C272E'>RemontProfi – ми дбаємо про ваш комфорт. З нами ви зможете втілити в інтер`єрі ваші будь-які дизайнерські ідеї, створити затишну і стильну обстановку - і все це в стислі терміни і за розумними цінами.</Typography>
                    <Typography component='p' color='#1C272E'>Про нашу надійність та високий професіоналізм свідчать вдячні відгуки наших клієнтів. Досвідчені кваліфіковані будівельники якісно та швидко проведуть капітальний чи косметичний ремонт квартири чи офісу. Ми ведемо постійний контроль якості на всіх етапах робіт. При проведенні ремонту використовуються тільки перевірені та безпечні матеріали, тому ми можемо гарантувати: відмінний результат збережеться надовго.</Typography>
                </Box>
                <Box component="div">Video</Box>
            </Box>
        </Container>
    
    );
}

export default VideoAbout;