import React from 'react';
import {Box, Container, Typography} from "@mui/material";

const BalconyPrice = () => {
    return (
        <Container maxWidth="lg">
           <Box component="div" sx={{width: '100%',height:'250px',padding:{xs:'40px 0',sm:'90px 0'}, position:'relative', display: 'flex', flexDirection:{xs:'column',sm:'row'}}}>
               <Box component="div" sx={{width:{xs:'100%', sm:'70%'}, backgroundImage:`url(${"/image/balcony.jpg"})`, backgroundSize:'cover'}}>
               <Typography></Typography>
               </Box>
               <Box component="div" sx={{width:{xs:'100%', sm:'30%'},display:{xs:'none',sm:'block'}, backgroundColor: '#c8dbe7'}}></Box>
               {/*<Box component="div" sx={{position: 'absolute'}}></Box>*/}
           </Box>
            
        </Container>
        
    );
};

export default BalconyPrice;