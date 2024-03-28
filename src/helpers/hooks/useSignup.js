import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { base_url } from '../api/api';

const useSignup = () => {
    const [loading,setLoading]=useState()
    const { authUser, setAuthUser } = useAuthContext();
const signup=async(mobile_number,full_name,otp,gender)=>{
  const success=handleInputErrors(mobile_number,otp,full_name,gender)
  if(!success) return
    setLoading(true)
  try{
    const res=await fetch(`${base_url}`,{
    method:"POST",
    headers:{ "Content-Type": "application/json" },
    body: JSON.stringify({ mobile_number, otp,full_name,gender }),
    })
    const data= await res.json();
    if (data.error) {
        throw new Error(data.error);
    }
    localStorage.setItem("user",JSON.stringify(data))
  setAuthUser (data)
  }
  catch (error) {
    toast.error(error.message);
} finally {
    setLoading(false);
}
}
  return {loading,signup}
}

export default useSignup

function handleInputErrors(mobile_number,otp,full_name,gender){
if(!otp || !full_name || !gender || !mobile_number){
    toast.error("Please fill in all fields")
    return false
}
return true
}