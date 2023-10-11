import React, {useState} from 'react';
import {Box, Typography, FormControl, InputLabel, Select, MenuItem, TextField} from "@mui/material";

// import {styled} from '@mui/material/styles';
//
// const MySelect = styled(Select)({
//     borderRadius: 0,
//     border: '1px solid #DDB38B'
//
// })
const repairList = [
    {id: 1, name: 'Косметичний'},
    {id: 2, name: 'Стандартний'},
    {id: 3, name: 'Бізнес клас'},
    {id: 4, name: 'Ексклюзивний'},
]
const typeOfHousingList = [
    {id: 1, name: 'Квартира'},
    {id: 2, name: 'Офіс'},
    {id: 3, name: 'Котедж'},
    {id: 4, name: 'Ванна та туалет'},
]
const categoryOfHousingList = [
    {id: 1, name: 'Нове житло'},
    {id: 2, name: 'Вторинне житло'},
]

const CostCalculation = () => {
    
    const [categoryOfHousing, setCategoryOfHousing] = useState('');
    const [typeOfHousing, setTypeOfHousing] = useState('');
    const [repair, setRepair] = useState('')
    const [area, setArea] = useState(0)
    
    const [openCategory, setOpenCategory] = useState(false);
    const [openType, setOpenType] = useState(false);
    const [openRepair, setOpenRepair] = useState(false)
    
    const handleChangeCategory = (event) => {
        setCategoryOfHousing(event.target.value);
    };
    const handleChangeType = (event) => {
        setTypeOfHousing(event.target.value);
    };
    const handleChangeRepair = (event) => {
        setRepair(event.target.value)
    }
    
    
    
    
    const handleCloseCategory = () => {
        setOpenCategory(false);
    };
    
    const handleOpenCategory = () => {
        setOpenCategory(true);
    };
    const handleCloseType = () => {
        setOpenType(false)
    }
    const handleOpenType = () => {
        setOpenType(true)
    }
    const handleCloseRepair = () => {
        setOpenRepair(false)
    }
    const handleOpenRepair = () => {
        setOpenRepair(true)
    }
    return (
        <Box>
            <Box sx={{background: `url(${"/image/cost-calculation/bg_calc.jpg"})`}}>
                <Box sx={{padding: {xs: '40px 20px', md: '130px 150px'}, textAlign: 'center'}}>
                    <Typography color='#fff' sx={{
                        fontSize: {xs: '26px', sm: '40px', md: '60px'},
                        fontWeight: '200',
                        letterSpacing: '.2rem',
                        mb: 3
                    }}>
                        Розрахунок вартості ремонту
                    </Typography>
                    <Typography color='#fff' sx={{fontSize: '16px', fontWeight: '100', letterSpacing: '.1rem', mb: 5}}>
                        Калькулятор розраховує приблизну вартість ремонту та матеріалів. Для точного розрахунку кошторис
                        викличте інженера для вимірювання.
                    </Typography>
                    <Box sx={{display: 'flex', justifyContent:'center', flexWrap: 'wrap'}}>
                        <FormControl sx={{minWidth: 260, mr: 2,}}>
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
                                sx={{
                                    borderRadius: 0,
                                }}
                            >
                                {categoryOfHousingList.map(item => (
                                    <MenuItem key={item.id} sx={{color: 'black'}} value={item.id}>{item.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl sx={{minWidth: 260, mr: 2,}}>
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
                                sx={{
                                    borderRadius: 0,
                                }}
                            >
                                {typeOfHousingList.map(item => (
                                    <MenuItem key={item.id} sx={{color: 'black'}} value={item.id}>{item.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl sx={{minWidth: 260, mr: 2,}}>
                            <InputLabel id="demo-controlled-open-select-label">Вид ремонту</InputLabel>
                            <Select
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                label="Вид ремонту"
                                value={repair}
                                onChange={handleChangeRepair}
                                open={openRepair}
                                onClose={handleCloseRepair}
                                onOpen={handleOpenRepair}
                                sx={{
                                    borderRadius: 0,
                                }}
                            >
                                {repairList.map(item => (
                                    <MenuItem key={item.id} sx={{color: 'black'}} value={item.id}>{item.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        
                        <TextField sx={{minWidth: 260, mr: 2, borderRadius: 0}} type="number"
                                 helperText="Будь ласка, введіть площу"
                                   id="demo-helper-text-misaligned"
                                   value={area}
                                   onChange={(event) => {
                                       setArea(event.target.value);
                                   }}
                        />
                    
                    </Box>
                
                </Box>
            </Box>
            <Box>
            
            </Box>
        
        </Box>
    );
};

export default CostCalculation;