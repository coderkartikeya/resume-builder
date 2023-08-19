import React, { useState } from "react";
import { Container, Grid } from "@mui/material";
import {TextField} from "@mui/material";
import { Educontext } from "../context/education";
import {Button} from "@mui/material";


const Card_2=()=>{
    const [education,getedu]=useState([]);
    const [data,getData]=useState();

    const{delay,state}=Educontext();

    const getVal=(e)=>{
        getData(
            e.target.value
        )



    }
    
    // 
    return(
        <>
        <Container   sx={{
            fontFamily:"itallic",
            my:{
                xs:2,
                lg:5
            },
            width:'60vw',
            backgroundColor:'lightblue',
            p:{
                xs:3,
                lg:5
            },
            display:'flex',
            flexDirection:'column',
            gap:'10px'

        }}>
            <h2>Enter skill</h2>
            <TextField id="outlined-basic" label="Skill" variant="outlined" onChange={getVal} name="skills" />
            
            <Button variant="contained" onClick={()=>{
                
                getedu([...education,JSON.stringify(data)]);
                // console.log(education);
                delay({
                    type:'add_to_skills',
                    payload:[data],
                })
                
            }}>Confirm</Button>
            
            

        </Container>

        </>
    )
}

export default Card_2;