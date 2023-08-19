import React from "react";
import Box from '@mui/material/Box';
import {Container} from "@mui/material";
import { Button } from "@mui/material";
import { red } from "@mui/material/colors";
import Image from '../assests/login_bg2.jpg'


const Nav=()=>{
    return(
        <>
            <Box  sx={{textAlign:'center' ,p:20,backgroundImage:`url(${Image})`,backgroundSize:'cover',color:'white',fontSize:{
                xs:'15px',
                lg:'30px'
            },borderRadius:"0px 0px 2em 2em" }} >
                <h1>Resume Builder</h1>

            </Box>
        </>
    )
}

export default Nav;