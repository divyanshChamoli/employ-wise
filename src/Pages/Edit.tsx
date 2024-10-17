import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import Button from "../Components/Button"
import Heading from "../Components/Heading"
import InputBox from "../Components/InputBox"
import SubHeading from "../Components/SubHeading"

function Edit() {
    const {id} = useParams()
    const BASE_URL = import.meta.env.VITE_BASE_URL
    const EDIT_URL = `/api/users/${id}`
    const GET_USER_URL = `/api/users/${id}`
    
    const [email, setEmail]= useState("")
    const [firstname, setFirstname]= useState("")
    const [lastname, setLastname]= useState("")

    const navigate=useNavigate()
    
    useEffect(()=>{
        const getUserData=async ()=>{
            try{
                const res=await axios.get(BASE_URL+GET_USER_URL)
                console.log(res.data)
                setFirstname(res.data.data.first_name)
                setLastname(res.data.data.last_name)
                setEmail(res.data.data.email)
            }
            catch(e){
                console.log(e)
            }
        }
        getUserData()
    },[])
    
    const onClick= async ()=>{
        try{
            const res=await axios.put(BASE_URL+EDIT_URL,{
                email,
                firstname,
                lastname
            })
            console.log(res.data)
            setEmail("")
            setFirstname("")
            setLastname("")
            navigate("/")
        }
        catch(e){
            console.log(e)
        }
    }
    
    return (
        <div className=" h-screen w-screen bg-neutral-500 flex justify-center items-center">
            <div className=" bg-white h-[28rem] w-80 rounded-lg flex justify-center items-center">
                <div className="h-[90%] w-5/6 flex flex-col justify-evenly">
                    <Heading label="Update"/>
                    <SubHeading label="Use the form below to edit your data"/>
                    <InputBox label="First Name" placeholder="" type="" value={firstname}  
                        onChange={e=>setFirstname(e.target.value)}/>
                    <InputBox label="Last Name" placeholder="" type="" value={lastname}  
                        onChange={e=>setLastname(e.target.value)}/>
                    <InputBox label="Email" placeholder="" value={email} 
                        onChange={e=>setEmail(e.target.value)}/>
                    <Button placeholder="Update" onClick={onClick} />
                </div>
            </div>
        </div>
    )
}

export default Edit