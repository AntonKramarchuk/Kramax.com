import React, {useEffect} from 'react';
import {Box, Container, IconButton, Typography, useMediaQuery} from "@mui/material";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import PropTypes from 'prop-types';
import {ChevronLeft, ChevronRight} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {fetchAsyncPromotions} from "../../store/slices/promotionsSlace";
import Error from '../Error/Error'
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
const ButtonGroup = ({ next, previous, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    return (
        <Box
            component='div'
            sx={{
                position: 'absolute',
                bottom: isMobile ? 0 : 'auto',
                left: isMobile ? '50%' : 0,
                transform: isMobile ? 'translateX(-50%)' : 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: isMobile ? 'space-between' : 'flex-start',
                padding: '0 16px',
                width: isMobile ? '100%' : 'auto',
            }}
        >
            <IconButton
                sx={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    outline: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#000',
                    padding: '8px',
                    margin: '0 8px',
                    transition: 'opacity 0.3s',
                    opacity: currentSlide === 0 ? 0.5 : 1,
                    pointerEvents: currentSlide === 0 ? 'none' : 'auto',
                }}
                onClick={() => previous()}
            >
                <ChevronLeft />
            </IconButton>
            <IconButton
                sx={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    outline: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#000',
                    padding: '8px',
                    margin: '0 8px',
                    transition: 'opacity 0.3s',
                }}
                onClick={() => next()}
            >
                <ChevronRight />
            </IconButton>
        </Box>
    );
};

ButtonGroup.propTypes = {
    next: PropTypes.func,
    previous: PropTypes.func,

};


function PromotionsCarousel() {
    const dispatch = useDispatch();
    const {status, promotions, } = useSelector(state => state.promotions)


    useEffect(()=>{
        dispatch(fetchAsyncPromotions({ carousel: 'true' }))
    },[dispatch])

    switch(status){
        case 'loading':
            return <h2>Loading....</h2>;
        case 'loaded':
            return (
                <>
                    <Container>
                        <Typography variant='h2' color='#5c6366' sx={{fontSize: {xs:'25px',sm:'30px',md:'50px'},fontWeight: '200', lineHeight: "1.2", marginBottom: '45px', letterSpacing:'3px'}}>Акції</Typography>
                        <Carousel
                            responsive={responsive}
                            swipeable={true}
                            keyBoardControl={true}
                            arrows={false}
                            renderButtonGroupOutside={true}
                            customButtonGroup={<ButtonGroup />}
                            containerClass="carousel-container"

                        >
                            {promotions.products && promotions.products.map(item=>{
                                // if(item.carousel === 'true'){
                                    return <Box key={item._id} component='div' >
                                        <img src={item.imageUrl} alt="1"/> </Box>
                                // }

                            })}

                        </Carousel>
                    </Container>
                </>
            );
        default:
            return <Error error={status}/>
    }

}
// PromotionsCarousel.propTypes = {
//     onClick: PropTypes.func,
// };
export default PromotionsCarousel;