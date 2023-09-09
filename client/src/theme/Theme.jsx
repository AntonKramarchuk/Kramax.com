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

        primary:{
            main:'#DDB38B',
        },
        background: {
            default: '#2D404C',
        },
        text: {
            primary: '#C8DBE7',
            secondary: '#DDB38B',
        },
    }

})