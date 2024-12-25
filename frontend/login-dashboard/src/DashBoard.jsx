import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSnackbar } from 'notistack';
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'
const DashBoard = () => {

    const [mail,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [type,setType] = useState("password");
    const [icon,setIcon] = useState(eyeOff);
    const [loading,setLoading] = useState(false);

    const {enqueueSnackbar} = useSnackbar();

    const handleToggle = () => {
        if(type === "password"){
            setType("text")
            setIcon(eye)
        }else{
            setType("password")
            setIcon(eyeOff)
        }
    }
    
    const handleLogin = async() => {    
        const data = {
            email:mail,
            password:password
        }
        setLoading(true)
        try{
            await axios.post("http://localhost:8080/login",data)
            enqueueSnackbar("Login Successful",{variant:"success"})
            setLoading(false)
        }catch(error){
            setLoading(false)
            enqueueSnackbar("Login Failed",{variant:"error"})
        }
        setEmail("")
        setPassword("")
    }
    

    const handleSignUp = async() => {
        const data = {
            email:mail,
            password:password
        }
        setLoading(true)
        await axios.post("http://localhost:8080/register",data)
        enqueueSnackbar("Register Successful",{variant:"success"})

        setEmail("")
        setPassword("")

        setLoading(false)
    }
    
    return (
        <div className="dashboard">
            <div className="email">
                <h3>Email</h3>
                <input value={mail} onChange = {(e) => setEmail(e.target.value)} type="text" placeholder="Enter Email" />
            </div>

            <div className="password">
                <h3>Password</h3>
                <input value={password} onChange = {(e) => setPassword(e.target.value)} type={type} placeholder="Enter Password " id="password " />
                <span className="eye" onClick={handleToggle}><Icon icon={icon} size={20} /></span>
            </div>

            <button className="sign-button" onClick={handleLogin}>Sign In</button>
            <button className="signUp-button" onClick={handleSignUp}>Sign Up</button>
        </div>
    )
}

export default DashBoard;
