import React from 'react';
import {Box, Typography} from "@mui/material";

const CostCalculation = () => {
    return (
        <Box>
            <Box sx={{background:`url(${"/image/cost-calculation/bg_calc.jpg"})`}}>
               <Box sx={{padding:{xs:'40px 20px', md:'130px 150px'}, textAlign:'center'}}>
                   <Typography color='#fff' sx={{fontSize:{xs:'26px',sm:'40px', md:'60px'}, fontWeight: '200',letterSpacing:'.2rem', mb:3}}>
                       Розрахунок вартості ремонту
                   </Typography>
                   <Typography color='#fff' sx={{fontSize:'16px', fontWeight: '100', letterSpacing:'.1rem', mb: 5}}>
                       Калькулятор розраховує приблизну вартість ремонту та матеріалів. Для точного розрахунку кошторис викличте інженера для вимірювання.
                   </Typography>
                   <Box>
                       ffff
                   </Box>
                   
               </Box>
            </Box>
            <Box>
            
            </Box>
            
        </Box>
    );
};

export default CostCalculation;