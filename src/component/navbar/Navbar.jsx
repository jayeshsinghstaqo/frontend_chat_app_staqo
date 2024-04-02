'use client'
import React, { useState } from 'react';
import { Button, Container, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { teal, grey } from '@mui/material/colors';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import AddchartIcon from '@mui/icons-material/Addchart';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const Navbar = () => {
    // const [showInput, setShowInput] = useState(false);



    return (
        <Container style={{ width: "100%", height: "70px", display: "flex", alignItems: "center", justifyContent: "space-between", backgroundColor: grey[500], borderLeft: "solid 1px grey", borderRadius: "10px 0px 0px 10px" }}>

            <div><div ><AccountCircleTwoToneIcon style={{ width: "40px", height: "40px",border:'2px solid green',borderRadius:'50px' }} /></div>

            </div>
            <div style={{ display: 'flex', gap: "20px" }}><div><AddchartIcon style={{ width: "40px", height: "30px", color: "white" }} /></div>
                <div><Diversity3Icon style={{ width: "40px", height: "30px", color: "black", color: "white" }} /></div>
                <div><MoreVertIcon style={{ color: "white" }} /></div>
            </div>

        </Container>
    );
}

export default Navbar;
