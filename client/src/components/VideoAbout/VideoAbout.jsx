import React, {useState} from 'react';
import {Avatar, Box, Container, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import EastIcon from '@mui/icons-material/East';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import VideoModal from "./VideoModal";
function VideoAbout() {
    const [open, setOpen] = useState(false);
    const handleModal = () => setOpen(!open);
    return (
        <>
            <Container maxWidth="lg">
                <Box component="div" sx={{
                    display: 'flex',
                    flexDirection: {xs: "column-reverse", lg: 'row'},
                    marginBottom: {xs: '21px', md: '24px', lg: '27px'}
                }}>
                    <Box component="div"
                         sx={{width: {xs: '100%', lg: '50%'}, padding: {xs: '50px 0 40px', lg: '70px 70px 70px 0'}}}>
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
                            lineHeight: '1.2'
                        }}>
                            Про нашу надійність та високий професіоналізм свідчать
                            вдячні відгуки наших клієнтів. Досвідчені кваліфіковані будівельники якісно та швидко проведуть
                            капітальний чи косметичний ремонт квартири чи офісу. Ми ведемо постійний контроль якості на всіх
                            етапах робіт. При проведенні ремонту використовуються тільки перевірені та безпечні матеріали,
                            тому ми можемо гарантувати: відмінний результат збережеться надовго.
                        </Typography>
                        <Link to='/privacy'>
                            <Box component='div' sx={{
                                
                                margin: {xs: '40px auto', lg: '40px 0'},
                                height: '66px',
                                width: '192px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'relative',
                                border: '2px solid #dfb48b',
                            }}><Typography component='span' color='#dfb48b' sx={{
                                fontSize: '15px',
                                fontWeight: '700',
                                textTransform: 'uppercase'
                            }}>Детальніше</Typography>
                                <EastIcon sx={{
                                    fontSize: '45px',
                                    position: 'absolute',
                                    top: '15%',
                                    right: '85%',
                                    fill: '#dfb48b',
                                    background: '#fff',
                                }}/>
                            </Box>
                        </Link>
                    </Box>
                    <Box component="div" sx={{
                        padding: {xs: '30px 0', md: '70px 0', lg: '140px 70px 70px'},
                        display: 'flex',
                        cursor:'pointer',
                        justifyContent: 'center',
                        width: '100%'
                    }}>
                        
                        <Box component='div' onClick={handleModal} sx={{
                            display: 'flex',
                            height: '100%',
                            width: '75%',
                            position: 'relative',
                            zIndex: 1,
                            ['&::after']: {
                                display: 'block',
                                content: '""',
                                width: '45%',
                                height:{xs:"100%",lg:"50%"},
                                background: '#dfb48b',
                                position: 'absolute',
                                bottom:{xs:'15%',lg:'60%'},
                                left: '70%',
                                zIndex: -1,
                                cursor:'initial'
                            }
                        }}>
                            <Avatar
                                alt="video"
                                src="/image/video_about/video-about.jpg"
                                variant="square"
                                sx={{width:{xs:"100%"}, height:{xs:"100%",lg:"293px"}, filter: ' brightness(50%)'}}
                            ></Avatar>
                            
                            
                            <Box component='span' sx={{
                                display: 'flex',
                                justifyContent:'center',
                                alignItems:'center',
                                width: {xs: '60px',sm:'80px',md:'100px', lg: '140px'},
                                height: {xs: '60px',sm:'80px',md:'100px', lg: '140px'},
                                backgroundColor: '#c8dbe7',
                                '&:hover': {backgroundColor: '#dfb48b'},
                                position: 'absolute',
                                left: 0,
                                bottom:{xs:'-10%',lg:'35%'},
                                zIndex: 10,
                                
                            }}>
                                <PlayArrowIcon sx={{fontSize:{sm:'50px',md:'80px', lg:'100px'},'&:hover': {fill: 'black'},}}/>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
            <VideoModal open={open} handleModal={handleModal} />
        
        </>
       
    );
}

export default VideoAbout;