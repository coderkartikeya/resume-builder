import React, { useState } from "react";
import { Button, Container, Grid } from "@mui/material";
import {TextField} from "@mui/material";
import  makeStyles  from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import QueueIcon from '@mui/icons-material/Queue';
import Card_1 from "./Card_1";

const Education=()=>{
    const[edu,getEdu]=useState([]);

    const add=()=>{
        getEdu([...edu,'education']);
        // console.log(edu);

    }
    return(
        <>
            <Container  sx={{
            boxShadow:"3px 4px 4px gray",
            width:'80vw',
            p:{
                xs:3,
                lg:6
            },
            fontSize:{
                xs:'15px',
                lg:'25px'
            },
            background:' #d53369' ,
            background:' -webkit-linear-gradient(to right, #cbad6d, #d53369) ', 
            background: 'linear-gradient(to right, #cbad6d, #d53369)',
            borderRadius:{
                xs:'1.5em',
                lg:"2em"
            },
            color:'white'


        }}>
        <Grid container spacing={2} sx={{
            m:{
                xs:5,
            },
            alignItems:'center'

        }}>
        <Grid item xs={6} sm={8} lg={8}>
        <h2>Education</h2>

        </Grid>
        <Grid item xs={4} sm={4}>
        <Button variant="outlined" startIcon={<QueueIcon />} sx={{
            
            fontSize:{
                xs:'15px',
                lg:'25px'
            },
            border:'2px solid white',
            borderRadius:{
                xs:'1.5em',
                lg:'2em'
            },
            color:'white'


        }} onClick={add}>
  add
</Button>
        


        </Grid>

        </Grid>



        </Container>
        {edu.map((events)=>{
            return(
                <Card_1/>
            )
            
        })}
        </>
    )
}

export default Education;