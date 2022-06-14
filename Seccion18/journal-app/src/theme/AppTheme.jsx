import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { purpleTheme } from './purple'


const AppTheme = ({ children }) => {//Children va a tener el valor de la App
    return (
        <ThemeProvider theme={purpleTheme
        }>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )//Estoy devolviendo la App pero con el tema que cree
}

export default AppTheme
