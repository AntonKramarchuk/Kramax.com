import React from 'react';

import Advantages from "../../components/Advantages/Advantages";
import PromotionsCarousel from "../../components/PromotionsCarousel/PromotionsCarousel";
import VideoAbout from "../../components/VideoAbout/VideoAbout";
import BalconyPrice from "../../components/BalconyPrice/BalconyPrice";


function Home() {
    return (
        <>
            <BalconyPrice/>
            <Advantages/>
            <VideoAbout/>
            <PromotionsCarousel/>
        </>
    );
}

export default Home;