import React, { useState } from "react";
import { Button, Container, Grid } from "@mui/material";
import {TextField} from "@mui/material";
import  makeStyles  from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import QueueIcon from '@mui/icons-material/Queue';
import Card_4 from "./Card_4";

const Projects=()=>{
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
            background:'#360033' ,
            background:'-webkit-linear-gradient(to right, #360033, #0b8793)', 
            background: 'linear-gradient(to right, #360033, #0b8793)',
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
        <h2>Projects</h2>

        </Grid>
        <Grid item xs={4} sm={4}>
        <Button variant="outlined" startIcon={<QueueIcon />} sx={{
            color:'white',
            fontSize:{
                xs:'15px',
                lg:'25px'
            },
            border:'2px solid white',
            borderRadius:{
                xs:'1.5em',
                lg:'2em'
            }

        }} onClick={add}>
  add
</Button>
        


        </Grid>

        </Grid>



        </Container>
        {edu.map((events)=>{
            return(
                <Card_4/>
            )
            
        })}

        </>
    )
}

export default Projects;