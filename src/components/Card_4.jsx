
import React, { useState } from "react";
import { Container, Grid } from "@mui/material";
import {TextField} from "@mui/material";
import { Educontext } from "../context/education";
import {Button} from "@mui/material";

const Card_4=()=>{
    const [education,getedu]=useState([]);
    const [data,getData]=useState({});

    const{delay,state}=Educontext();

    const getVal=(e)=>{
        getData({
            ...data,[e.target.name]:e.target.value
        })

    }

    

    
    return(
        <>
        <Container   sx={{
            fontFamily:"itallic",
            my:{
                xs:2,
                lg:5
            },
            width:{
                xs:'68vw',
                lg:'60vw'
            },
            backgroundColor:'lightblue',
            p:{
                xs:3,
                lg:5
            },
            display:'flex',
            flexDirection:'column',
            gap:'10px',
            borderRadius:'2em'

        }}>
            <h2>Projects</h2>
            <TextField id="outlined-basic" label="Project Name" variant="outlined" onChange={getVal} name="project_name" />
            <TextField id="outlined-basic" label="About" variant="outlined" onChange={getVal} name="project_about"/>
            <TextField id="outlined-basic" label="link" variant="outlined" onChange={getVal} name="link"/>
            <Button variant="contained" onClick={()=>{
                getedu([{...education,data}]);
                delay({
                    type:'add_to_projects',
                    payload:data,
                })
                
            }}>Confirm</Button>
            
            

        </Container>

        </>
    )
}

export default Card_4;