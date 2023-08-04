import React from 'react';

import Advantages from "../../components/Advantages/Advantages";
import PromotionsCarousel from "../../components/PromotionsCarousel/PromotionsCarousel";
import VideoAbout from "../../components/VideoAbout/VideoAbout";
import BalconyPrice from "../../components/BalconyPrice/BalconyPrice";


function Home() {
    return (
        <div>
            <BalconyPrice/>
            <Advantages/>
            <VideoAbout/>
            <PromotionsCarousel/>
           </div>
    );
}

export default Home;