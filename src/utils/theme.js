'use client'
import {createTheme, responsiveFontSizes} from "@mui/material/styles"
import {  red, teal } from '@mui/material/colors'

const base = createTheme({
    palette: {
        primary:{
            main:"#E50914",
        },
        secondary:{
            main: "#FFFFF"
        },
        tertiary:{
            main : '#DEDEDEDE'
        },
        error:{
            main: red[400]
        },
        success: {
            main:teal[400]
        }
    },

})

const theme = responsiveFontSizes(base)

export default theme