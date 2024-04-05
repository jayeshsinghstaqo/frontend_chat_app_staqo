'use client'
import React, { useState } from 'react';
import { Button, TextField, Grid, Container, FormControlLabel, Checkbox } from '@mui/material';
// import { blue } from '@mui/material/colors';
import { useAuthContext } from '@/contexts/AuthContext';
import { base_url } from '@/helpers/api/api';


const Signup = () => {
  const [error, seterror] = useState(false);

  const [formData, setFormData] = useState({
    full_name: "",
    mobile_number: "",
    gender: {
      male: false,
      female: false,
      transe_gender: false
    }
  });
      const { authUser } = useAuthContext();


  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    const updateGender = {
      male: false,
      female: false,
      transe_gender: false
    };
    updateGender[name] = checked;
    if (checked) {
      for (let gender in updateGender) {
        if (gender !== name && formData.gender[gender]) {
          updateGender[gender] = false;
        }
      }
    }
    setFormData({
      ...formData,
      gender: updateGender
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const signupFun = (e) => {
    e.preventDefault();
    if (!formData.full_name) {
      seterror(true);
    } else {
      console.log('hdgwjskdhdjklewd');
    }
  };

  return (
    <div style={{ backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKnk_ze2eoOR5q_-2etZZkl3k41xCrXsvI0KFZ3k0dUUCZMPYvbFqA6HNj9e_o9aNk1l4&usqp=CAU)", backgroundSize: "cover", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Container style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <form style={{ boxShadow: "5px 5px 5px 7px purple", width: "400px", height: "550px",backgroundImage: "url(data:image/jpeg;base64,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)",backgroundSize:"cover" ,display: "flex", flexDirection: "column",borderRadius:"40px", justifyContent: "center", alignItems: "center",   padding: "20px" }} onSubmit={signupFun}>
          <h1 style={{ fontSize: "80px", fontWeight: "bold", textAlign: "center", marginBottom: "20px" }}>SIGNUP</h1>
          <TextField
            fullWidth
            variant="outlined"
            label="Name"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            style={{ marginBottom: "20px" }}
          />
          {error && <h1 style={{ fontWeight: "bold", color: "red", textAlign: "center", fontSize: "20px" }}>Please enter your fullName👆 </h1>}
          <TextField
            fullWidth
            variant="outlined"
            label="Mobile number"
            name="mobile_number"
            value={formData.mobile_number}
            onChange={handleChange}
            style={{ marginBottom: "20px" }}
          />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormControlLabel
                control={<Checkbox checked={formData.gender.male} onChange={handleCheckboxChange} name="male" />}
                label="Male"
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={<Checkbox checked={formData.gender.female} onChange={handleCheckboxChange} name="female" />}
                label="Female"
              />
            </Grid>
          </Grid>
          <Button style={{ backgroundColor: "black", width: "100%", borderRadius: "40px", fontSize: "18px", fontWeight: "bold", padding: "10px 0", color: "white", marginTop: "20px" }} type='submit'>Signup</Button>
        </form>
      </Container>
    </div>
  );
};

export default Signup;
