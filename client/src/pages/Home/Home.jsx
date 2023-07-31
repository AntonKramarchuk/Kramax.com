import React from 'react';

import Advantages from "../../components/Advantages/Advantages";
import PromotionsCarousel from "../../components/PromotionsCarousel/PromotionsCarousel";
import VideoAbout from "../../components/VideoAbout/VideoAbout";


function Home() {
    return (
        <div>
            
            <Advantages/>
            <VideoAbout/>
            <PromotionsCarousel/>
           </div>
    );
}

export default Home;