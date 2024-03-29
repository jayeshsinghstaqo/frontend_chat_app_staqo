'use client'
import React, { useState } from 'react'
import { Button, TextField, Grid, Container } from '@mui/material';
import toast from "react-hot-toast";
import useLogin from '@/helpers/hooks/useLogin';
import { useAuthContext } from '@/contexts/AuthContext';


const Login = () => {
    const [inputShow, setInputShow] = useState(false)
    const [error, seterror] = useState(false)
    const [data, setData] = useState({
        mobile_number: '',
        otp: '',
        error: ''
    });
    const { authUser } = useAuthContext()
    const { loading, login } = useLogin()
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };

    const loginFun = async (e) => {
        e.preventDefault();
        // setData({
        //     ...data,
        //     error: false
        // })
        if (!data.mobile_number || data.mobile_number.length !== 10) {
            seterror(true)
            toast.error("Please provide valid mobile number")
        }
        if (data.mobile_number.length == 10) {
            setInputShow(true)
            seterror(false)
        }
        await login(data.mobile_number, data.otp);
    }
    return (
        <div style={{ backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcDeizwsqRDsaB6UMmO0d2g2372-mO5T64GQ&usqp=CAU)", backgroundSize: 'cover', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Container style={{
                borderRadius: "200px 0px 0px 0px", marginTop: "40px", backgroundImage: "url(data:image/jpeg;base64,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)", backgroundSize: "cover", width: "500px", height: "500px", display: "flex", justifyContent: "center", alignItems: "center"
            }}>
                <form onSubmit={loginFun}>
                    <h1 style={{ fontSize: "100px" }}>LOGIN</h1>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Enter Your Mobile No."
                            name="mobile_number"
                            value={data.mobile_number}
                            onChange={handleChange}

                        />
                    </Grid>
                    <Grid item xs={12} >
                        {inputShow ? <TextField
                            fullWidth
                            type='text'
                            name="otp"
                            variant="outlined"
                            value={data.otp}
                        /> : true}
                    </Grid>
                    <Grid item xs={12}>
                        {error ? <h1 style={{ textAlign: "center", marginTop: "20px", color: "red", fontWeight: "bold", fontSize: "20px" }}>Please enter the number</h1> : null}
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" type='submit' style={{ width: "100%", backgroundColor: "black", color: "slateblue", fontSize: "30px", fontWeight: "bold", marginTop: "40px", borderRadius: "30px" }}>Login</Button>
                    </Grid>
                    <div>
                        <div className='btn btn-block btn-sm mt-2' disabled={loading}>
                            {loading ? <span className='loading loading-spinner '></span> : ""}
                        </div>
                    </div>
                </form>
            </Container>
        </div>
    )
}


export default Login