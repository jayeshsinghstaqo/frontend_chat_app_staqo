'use client'
import React, { useState } from 'react';
import { Container, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { teal, grey } from '@mui/material/colors';

const Navbar = () => {
    const [showInput, setShowInput] = useState(false);
     
    const handleClick = () => {
        setShowInput(true);
    }

    return (
        <Container style={{ width: "100%", height: "70px", display: "flex", alignItems: "center", justifyContent: "space-between", backgroundColor: teal[500], borderLeft: "solid 1px grey" }}> 
            <h3 style={{fontSize:"20px",display:"flex",fontStyle:"italic"}}>ChatApp</h3>
            <div style={{ position: 'relative' }}>
                {!showInput && (
                    <SearchIcon 
                        onClick={handleClick} 
                        style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', right: '10px', cursor: 'pointer' }} 
                    />
                )}
                {showInput && (
                    <TextField 
                        autoFocus 
                        variant="outlined" 
                        placeholder="Search..." 
                        InputProps={{ startAdornment: <SearchIcon /> }} 
                        onBlur={() => setShowInput(false)} 
                        style={{ width: '250px',  borderRadius: "20px", borderColor: grey[500] }} 
                    />
                )}
            </div>
        </Container>
    );
}

export default Navbar;
