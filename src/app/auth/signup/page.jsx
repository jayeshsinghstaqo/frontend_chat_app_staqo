'use client'
import React, { useState } from 'react';
import { Button, TextField, Grid, Container, FormControlLabel, Checkbox } from '@mui/material';

const Signup = () => {
  const[error,seterror]=useState()
  
  const [formData, setFormData] = useState({
    full_name: "",
    mobile_number: "",
    gender: {
      male: false,
      female: false,
      transe_gender:false
    }
  });


  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

const updateGender={
  male:false,
  female:false,
  transe_gender:false
}
updateGender[name]=checked
if(checked){
  for(let gender in updateGender){
    if(!gender==name && formData.gender[gender] ){
      updateGender[gender=false]
    }
  }
}
setFormData({
      ...formData,
      gender:updateGender
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const signupFun=(e)=>{
    e.preventDefault();
    if(!formData.full_name){
      seterror(true)
    }

    else{
      console.log('hdgwjskdhdjklewd')
    }
  }
  
  return (
    <div style={{backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKpeDlxqFzpoiZLCx17cIEU-SptAuJP8ziRw&usqp=CAU)",backgroundSize:"cover",height:"650px"}}>
      <Container style={{ width: "400px", height: "500px", display: "flex",justifyContent:"center", alignItems: "center" }}>
        <div >
          <form style={{boxShadow:"5px 10px 10px 10px skyblue", borderRadius:"10px" ,width:"500px",height:"400px" }} onSubmit={signupFun}>
            <h1 style={{fontSize:"100px",fontWeight:"bold",textAlign:"center"}}>SIGNUP</h1>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="name"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
              {error ? <h1 style={{fontWeight:"bold",color:"red",textAlign:"center",fontSize:"20px"}}>Please enter your fullName👆 </h1>:null}
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label=" mobile number"
                  name="mobile_number"
                  value={formData.mobile_number}
                  onChange={handleChange}
                  style={{ borderRadius: "20px", marginBottom: "10px" }}
                />
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel
                  control={<Checkbox checked={formData.gender.male} onChange={handleCheckboxChange} name="male" />}
                  label="Male"
                />
              </Grid>
              <Grid item xs={5}>
                <FormControlLabel
                  control={<Checkbox checked={formData.gender.transe_gender} onChange={handleCheckboxChange} name="transe_gender" />}
                  label="transe_gender"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={<Checkbox checked={formData.gender.female} onChange={handleCheckboxChange} name="female" />}
                  label="Female"
                />
              </Grid>
              
            
              
              <Grid item xs={12}>
                <Button style={{ backgroundColor: "black", width: "100%", borderRadius: "40px", fontSize: "18px", fontWeight: "bold", padding: "3px", color: "white" }} type='submit'>Signup</Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
      </div>
  )
}

export default Signup