import { Box } from '@mui/system'
import React from 'react'
import NavBar from '../components/NavBar';

const drawerWidth=340;

const JournalLayout = ({children}) => {
  return (
<Box sx={{display:'flex'}}>
<NavBar drawerWidth={drawerWidth}/>

<Box component='main' sx={{flexGrow:1,p:3}}>

{children}
</Box>

</Box>

  )}

export default JournalLayout
