import React from 'react'
import Navbar from '@/component/navbar/Navbar'
import ChatBox from '@/component/navbar/ChatBox'
import { Box, Button, Container, Input } from '@mui/material'
import { blue, teal,grey } from '@mui/material/colors';
import Navbar2 from '@/component/navbar/Navbar2';
import MainContent from '@/component/navbar/MainContent';

const Home = () => {
  return (
    <div style={{width:"100%",display: 'flex',  height: '100vh'}}>
    
      {/* Sidebar */}
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '40%',paddingLeft:"5px" }}>
      <Box >
        <Navbar/>
        </Box>
        
        <Box sx={{  display: 'flex', flexDirection: 'column', height: '100%', backgroundColor:grey[100]}}>
          
          <MainContent/>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', width: '70%',height:"100%" }}>
        <Box sx={{  display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Navbar2 />
        </Box>
        <Box sx={{  display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
          <ChatBox />
        </Box>
      </Box>
    
    </div>
  )
}

export default Home
