import React from 'react';
import Example from "../../components/Example/Example";
import Advantages from "../../components/Advantages/Advantages";
import PromotionsCarousel from "../../components/PromotionsCarousel/PromotionsCarousel";
import VideoAbout from "../../components/VideoAbout/VideoAbout";


function Home() {
    return (
        <div>
            <Example></Example>
            <Advantages/>
            <VideoAbout/>
            <PromotionsCarousel/>
           </div>
    );
}

export default Home;