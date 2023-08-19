import React, { useState } from "react";
import { Container, Grid } from "@mui/material";
import {TextField} from "@mui/material";
import { Educontext } from "../context/education";
import {Button} from "@mui/material";
// import {database} from "../Firebase";
// import { collection, addDoc } from "firebase/firestore";
// import { db } from "../Firebase";



const Card_1=()=>{
    const [education,getedu]=useState([]);
    const [data,getData]=useState({});

    const{delay,state}=Educontext();

    const getVal=(e)=>{
        getData({
            ...data,[e.target.name]:e.target.value
        })

    }

    
   
    // const Push = async (e) => {
    //     e.preventDefault();  
       
    //     try {
    //         const docRef = await addDoc(collection(db, "education"), {
    //           edu: data,    
    //         });
    //         console.log("Document written with ID: ", docRef.id);
    //       } catch (e) {
    //         console.error("Error adding document: ", e);
    //       }
    // }

    

    
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
            <h2>Education details</h2>
            <TextField id="outlined-basic" label="Course name" variant="outlined" onChange={getVal} name="course_name" />
            <TextField id="outlined-basic" label="Institute name" variant="outlined" onChange={getVal} name="institiute_name"/>
            <TextField id="outlined-basic" label="serving period" variant="outlined" onChange={getVal} name="serving_period"/>
            <Button variant="contained" onClick={()=>{
                getedu([{...education,data}]);
                delay({
                    type:'add_to_edu',
                    payload:data,
                })
                
            }}>Confirm</Button>
            
            

        </Container>

        </>
    )
}

export default Card_1;