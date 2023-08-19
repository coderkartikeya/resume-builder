import React from "react";
import Nav from "./Nav";
import Main from "./Main";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "@mui/material";



const Page=()=>{
    const navigate=useNavigate();

    const click=()=>{
        navigate('/resume')

    }
    return (
        <div style={{
            display:'flex',
            flexDirection:'column',
            gap:'20px'
        }}>

        <Nav/>
        <Main/>
        <Container sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }}>
        <Button variant="contained" onClick={click} sx={{
            
            // width:'40px',
            p:'10px'
        }}>Resume</Button>
        </Container>
        
        
        </div>
    )
}
export default Page;