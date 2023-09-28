import React,{useState} from 'react';
import {Box, Typography, FormControl, InputLabel,Select, MenuItem} from "@mui/material";

const CostCalculation = () => {
    
    const [categoryOfHousing, setCategoryOfHousing] = useState('');
    const [typeOfHousing, setTypeOfHousing] = useState('');
    const [openCategory, setOpenCategory] = useState(false);
    const [openType, setOpenType]= useState(false)
    
    const handleChangeCategory = (event) => {
        setCategoryOfHousing(event.target.value);
    };
    const handleChangeType = (event) => {
        setTypeOfHousing(event.target.value);
    };
    const handleCloseCategory = () => {
        setOpenCategory(false);
    };
    
    const handleOpenCategory = () => {
        setOpenCategory(true);
    };
    const handleCloseType = () =>{
        setOpenType(false)
    }
    const handleOpenType = () =>{
        setOpenType(true)
    }
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
                       <FormControl sx={{ minWidth: 260 }}>
                           <InputLabel id="demo-controlled-open-select-label">Тип житла</InputLabel>
                           <Select
                               labelId="demo-controlled-open-select-label"
                               id="demo-controlled-open-select"
                               label="Тип житла"
                               onChange={handleChangeCategory}
                               value={categoryOfHousing}
                               open={openCategory}
                               onClose={handleCloseCategory}
                               onOpen={handleOpenCategory}
                           >
                               <MenuItem value="">
                                   <em>None</em>
                               </MenuItem>
                               <MenuItem value={1}>Нове житло</MenuItem>
                               <MenuItem value={2}>Вторинне житло</MenuItem>
                           </Select>
                       </FormControl>
                       <FormControl sx={{ minWidth: 260 }}>
                           <InputLabel id="demo-controlled-open-select-label">Вид житла</InputLabel>
                           <Select
                               labelId="demo-controlled-open-select-label"
                               id="demo-controlled-open-select"
                               label="Вид житла"
                               onChange={handleChangeType}
                               value={typeOfHousing}
                               open={openType}
                               onClose={handleCloseType}
                               onOpen={handleOpenType}
                           >
                               <MenuItem value="">
                                   <em>None</em>
                               </MenuItem>
                               <MenuItem value={1}>Квартира</MenuItem>
                               <MenuItem value={2}>Офіс</MenuItem>
                               <MenuItem value={3}>Котедж</MenuItem>
                               <MenuItem value={4}>Ванна та туалет</MenuItem>
                           </Select>
                       </FormControl>
                   </Box>
                   
               </Box>
            </Box>
            <Box>
            
            </Box>
            
        </Box>
    );
};

export default CostCalculation;