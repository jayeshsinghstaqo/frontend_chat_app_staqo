import React from 'react'
import Navbar from '@/component/navbar/Navbar'
import ChatBox from '@/component/navbar/ChatBox'
import { Box, Button, Container, Input } from '@mui/material'

const Home = () => {
  return (
    <Container sx={{ display: 'flex', gap: '20px', height: '100vh', border: "solid 2px black" }}>
      {/* Sidebar */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '30%', padding: '20px' }}>
        <Navbar />
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
          <div>Main Content 1</div>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '70%', padding: '20px' }}>
        <Box sx={{  display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
          <Navbar />
        </Box>
        <Box sx={{ border: '2px solid ', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
          <ChatBox />
        </Box>
      </Box>
    </Container>
  )
}

export default Home
