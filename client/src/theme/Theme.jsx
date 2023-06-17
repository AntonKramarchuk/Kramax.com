import {createTheme} from "@mui/material";

export const theme = createTheme({
    typography: {
        fontFamily: 'Montserrat,sans-serif ',
    },
    components: {
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    fontSize: 40,
                    '&:hover': {color: '#DFB48B'}
                },
            },
        },
    },
    palette: {

        // primary:{
        //     50:'#2D404C',
        // },
        background: {
            default: '#2D404C',
        },
        text: {
            primary: '#C8DBE7',
            secondary: '#DDB38B',
        },
    }

})