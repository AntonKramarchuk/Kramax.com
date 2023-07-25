import React, {useEffect} from 'react';
import {Box, Container, Typography, useMediaQuery} from "@mui/material";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import PropTypes from 'prop-types';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import {useDispatch, useSelector} from "react-redux";
import {fetchAsyncPromotions} from "../../store/slices/promotionsSlace";
import Error from '../Error/Error'
import PromotionsCard from "../PromotionsCard/PromotionsCard";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: {max: 4000, min: 1200},
        items: 3
    },
    desktop: {
        breakpoint: {max: 1200, min: 901},
        items: 3
    },
    tablet: {
        breakpoint: {max: 900, min: 601},
        items: 2
    },
    mobile: {
        breakpoint: {max: 600, min: 0},
        items: 1
    }
};
const ButtonGroup = ({next, previous, ...rest}) => {
    const {carouselState: {currentSlide}} = rest;
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.down('lg'));
    return (
        <Box
            component='div'
            sx={{
                position: isDesktop ? 'none' : 'absolute',
                bottom: isDesktop ?  0: '40%',
                left: isDesktop ?  '5%': 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: isDesktop ? 'space-evenly' :'space-between' ,
                padding: '10px 16px',
                width: '95%',
                margin: 0
            }}
        >
            <Box component='div' sx={{
                height: '70px',
                width: '105px',
                display: 'flex',
                cursor: 'pointer',
                position: 'relative',
                opacity: currentSlide === 0 ? 0.5 : 1,
                pointerEvents: currentSlide === 0 ? 'none' : 'auto'
            }} onClick={() => previous()}>
                <Box component='div'
                     sx={{background: currentSlide === 0 ? '#92C2ED' : '#DFB48B', width: '70%', height: '100%'}}></Box>
                <WestOutlinedIcon sx={{
                    fontSize: '55px', position: 'absolute',
                    top: '10%',
                    left: '40%',
                    fill: '#000'
                }}/>
            
            </Box>
            <Box component='div' sx={{
                height: '70px',
                width: '105px',
                display: 'flex',
                justifyContent: 'flex-end',
                cursor: 'pointer',
                position: 'relative',
                transition: 'opacity 0.3s',
            }} onClick={() => next()}>
                <Box component='div'
                     sx={{background: currentSlide === 0 ? '#DFB48B' : '#92C2ED', width: '70%', height: '100%'}}>
                </Box>
                <WestOutlinedIcon sx={{
                    fontSize: '55px', position: 'absolute',
                    top: '10%',
                    right: '40%',
                    fill: '#000',
                    transform: 'rotate(180deg)'
                }}/>
            </Box>
        </Box>
    );
};

ButtonGroup.propTypes = {
    next: PropTypes.func,
    previous: PropTypes.func,
    
};


function PromotionsCarousel() {
    const dispatch = useDispatch();
    const {status, promotions,} = useSelector(state => state.promotions)
    
    
    useEffect(() => {
        dispatch(fetchAsyncPromotions({carousel: 'true'}))
    }, [dispatch])
    
    switch (status) {
        case 'loading':
            return <h2>Loading....</h2>;
        case 'loaded':
            return (
                <Box sx={{paddingBottom: '15px',position:'relative'}}>
                    <Container maxWidth="lg">
                        <Typography variant='h2' color='#172127' sx={{
                            fontSize: {xs: '25px', sm: '30px', md: '50px'},
                            fontWeight: '200',
                            lineHeight: "1.2",
                            marginBottom: '45px',
                            letterSpacing: '3px',
                            
                        }}>Акції</Typography>
                        <Carousel
                            responsive={responsive}
                            swipeable={true}
                            keyBoardControl={true}
                            arrows={false}
                            renderButtonGroupOutside={true}
                            customButtonGroup={<ButtonGroup/>}
                            containerClass="carousel-container"
                        >
                            {promotions.products && promotions.products.map(item => {
                                return <PromotionsCard key={item._id}  {...item}/>
                            })}
                        </Carousel>
                    </Container>
                </Box>
            );
        default:
            return <Error error={status}/>
    }
    
}

// PromotionsCarousel.propTypes = {
//     onClick: PropTypes.func,
// };
export default PromotionsCarousel;