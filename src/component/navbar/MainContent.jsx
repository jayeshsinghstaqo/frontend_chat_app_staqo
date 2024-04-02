'use client'
import React, { useState } from 'react';
import { InputAdornment, Input } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const MainContent = () => {
    const [State,setState]=useState()
    const handleChange=(e)=>{
        setState(e.target.value)
    }
  return (
    <div>
      <Input
        placeholder='search here....'
        onChange={handleChange}
        style={{ width: "100%" }}
        value={State}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon/>
          </InputAdornment>
        }
      />
     
    </div>
  );
};

export default MainContent;
