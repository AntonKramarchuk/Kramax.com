import React from 'react';
import Example from "../../components/Example/Example";
import Advantages from "../../components/Advantages/Advantages";
import PromotionsCarousel from "../../components/PromotionsCarousel/PromotionsCarousel";


function Home() {
    return (
        <div>
            <Example></Example>
            <Advantages/>
            <PromotionsCarousel/>
           </div>
    );
}

export default Home;