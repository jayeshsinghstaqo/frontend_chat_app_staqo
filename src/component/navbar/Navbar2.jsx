'use client'
import React, { useState } from 'react';
import { Container, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { teal, grey, lightBlue, orange } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';



const Navbar2 = () => {
    const [showInput, setShowInput] = useState(false);
    
     
    const handleClick = () => {
        setShowInput(true);
    }


    return (
        <Container style={{ width: "100%", height: "70px", display: "flex", alignItems: "center", justifyContent: "space-between", backgroundColor: grey[500], borderLeft: "solid 1px grey" }}> 
            <div style={{display:"flex",gap:"20px"}}><div ><AccountCircleTwoToneIcon style={{width:"40px",height:"40px"}}/></div>
            <h3 style={{fontSize:"20px",display:"flex",fontStyle:"italic"}}>Name</h3></div>
            <div style={{display:"flex"}}>
            <div style={{ position: 'relative' }}>
                {!showInput && (
                    <SearchIcon 
                        onClick={handleClick} 
                        style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', right: '10px', cursor: 'pointer',width:"50px",height:"30px" }} 
                    />
                )}
                {showInput && (
                    <TextField 
                        autoFocus 
                        variant="outlined" 
                        placeholder="Search..." 
                        InputProps={{ startAdornment: <SearchIcon /> }} 
                        onBlur={() => setShowInput(false)} 
                        style={{ width: '250px',  borderRadius: "20px"}} 
                    />
                )}
                

            </div>
            <div><MoreVertIcon style={{width:"50px",height:"30px"}}/></div></div>
        </Container>
    );
}

export default Navbar2;
