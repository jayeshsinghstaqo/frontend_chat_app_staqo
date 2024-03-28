'use client'
import { Button, Container, TextField } from '@mui/material'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
const Navbar = () => {
    const [showInput,setShowInput]=useState(false)
     
    const handleClick=()=>{
        setShowInput (true)
    }
    return (
<Container style={{ width: "100%", height: "70px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "solid 3px black" }}> 
        <h3>ChatApp</h3>
     <Button onClick={handleClick} style={{position:"sticky"}}><SearchIcon/></Button>
     {showInput ? <TextField variant="outlined" placeholder='...search' />:null}   
        </Container>
    )
}

export default Navbar