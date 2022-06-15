import { Toolbar } from '@mui/material';
import { Box } from '@mui/system'
import React from 'react'
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';

const drawerWidth = 340;

const JournalLayout = ({ children }) => {
    return (

        // <Grid container
        //     spacing={0}
        //     direction='column'
        //     alignItems='center'
        //     justifyContent='center'
        //     sx={{ minHeight: '100vh', backgroundColor: 'yellow', padding: 4 }}
        // >
            <Box sx={{ display: 'flex' }}>
                <NavBar drawerWidth={drawerWidth} />
                <SideBar drawerWidth={drawerWidth} />
                <Box component='main'
                    sx={{ flexGrow: 1, p: 3 }}>

                    <Toolbar />
                    {children}
                </Box>

            </Box>

        // </Grid>


    )
}

export default JournalLayout
