import React from 'react';

import Advantages from "../../components/Advantages/Advantages";
import PromotionsCarousel from "../../components/PromotionsCarousel/PromotionsCarousel";
import VideoAbout from "../../components/VideoAbout/VideoAbout";
import BalconyPrice from "../../components/BalconyPrice/BalconyPrice";
import CostCalculation from "../../components/CostCalculation/CostCalculation";


function Home() {
    return (
        <>
            <BalconyPrice/>
            <Advantages/>
            <CostCalculation/>
            <VideoAbout/>
            <PromotionsCarousel/>
        </>
    );
}

export default Home;