import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import Button from "../Components/Button"
import Heading from "../Components/Heading"
import InputBox from "../Components/InputBox"
import SubHeading from "../Components/SubHeading"

export default function Login(){
    const BASE_URL = import.meta.env.VITE_BASE_URL
    const LOGIN_URL = "/api/login"
    
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")

    const navigate=useNavigate()
    
    const onClick= async ()=>{
        try{
            const res=await axios.post(BASE_URL+LOGIN_URL,{
                email,
                password
            })
            console.log(res.data)
            localStorage.setItem("token", res.data.token)
            setEmail("")
            setPassword("")
            navigate("/")
        }
        catch(e){
            console.log(e)
        }
    }
    
    return (
        <div className=" h-screen w-screen bg-neutral-500 flex justify-center items-center">
            <div className=" bg-white h-96 w-80 rounded-lg flex justify-center items-center">
                <div className="h-[90%] w-5/6 flex flex-col justify-evenly">
                    <Heading label="Login"/>
                    <SubHeading label="Enter your credentials to access your account"/>
                    <InputBox label="Email" placeholder="johndoe@example.com" value={email} 
                        onChange={e=>setEmail(e.target.value)}/>
                    <InputBox label="Password" placeholder="" type="password" value={password}  
                        onChange={e=>setPassword(e.target.value)}/>
                    <Button placeholder="Enter" onClick={onClick} />
                </div>
            </div>
        </div>
    )
}