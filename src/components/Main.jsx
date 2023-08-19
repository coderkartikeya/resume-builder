import React, { useState } from "react";
import { Button, Container, Grid } from "@mui/material";
import {TextField} from "@mui/material";
import  makeStyles  from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import QueueIcon from '@mui/icons-material/Queue';
import Card_1 from "./Card_1";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Certificates from "./Certificates";
import { Educontext } from "../context/education";




const Main=()=>{
    const[edu,getEdu]=useState([]);
    const [education,getedu]=useState([]);
    const [data,getData]=useState({});

    const{delay,state}=Educontext();

    const getVal=(e)=>{
        getData({
            ...data,[e.target.name]:e.target.value
        })
        

    }

    const add=()=>{
        getEdu([...edu,'education']);
        // console.log(edu);

    }
    
    
    return(
        <>
        
        <div className="education" style={{display:'flex',gap:'10px',flexDirection:'column'}}>
        <Container sx={{
            backgroundColor:'lightblue',
            p:5,
            
            my:{
                xs:3,
                sm:8,
                lg:8
            },
            overflowX:{
                xs:'hidden'
            },
            borderRadius:'2em',
            width:'80vw',
            boxShadow:'3px 4px 4px gray',
            display:'flex',
            flexDirection:'column',
            gap:'20px'
            


            }}>
            <h2>Enter Your Name</h2>
            <TextField id="filled-basic" label="Name" variant="filled" name="name" onChange={getVal} required/>
            <h2>Enter Email id</h2>
            <TextField id="filled-basic" label="email id" variant="filled" name="email_id" onChange={getVal}/>
            <h2>Enter mobile no</h2>
            <TextField id="filled-basic" label="mobile no." variant="filled" name="mobile" onChange={getVal}/>
            <Button variant="contained" onClick={()=>{
                delay({
                    type:'add_to_info',
                    payload:data,})

                
            }}>Confirm</Button>
        </Container>
        <Education/>

        <Skills/>
        <Experience/>
        <Projects/>
        <Certificates/>

        
        

        </div></>
    )
}

export default Main;