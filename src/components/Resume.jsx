import { Container, Grid } from "@mui/material";
import React, { useRef } from "react";
import { Educontext } from "../context/education";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import './css/resume.css';
import {Button} from "@mui/material";
// import { Print } from "@mui/icons-material";
// import ListItem from "@mui/material";



const Resume=()=>{

    const{state}=Educontext();
    const pdfRef=useRef();

    const downloadPdf=()=>{
        const input=pdfRef.current;
        html2canvas(input).then((canvas)=>{
            const imgData=canvas.toDataURL('image/png');
            const pdf =new jsPDF('p','mm','a4',true);
            const pdfWidth=pdf.internal.pageSize.getWidth();
            const pdfHeight=pdf.internal.pageSize.getHeight();
            const imgWidth=canvas.width;
            const imgHeight=canvas.height;
            const ratio=Math.min(pdfWidth/imgWidth,pdfHeight/imgHeight);
            const imgX=(pdfWidth-imgWidth*ratio)/2;
            const imgY=30;
            pdf.addImage(imgData,'PNG',imgX,imgY,imgWidth*ratio,imgHeight*ratio);
            pdf.save('resume.pdf');
        })
    }

    

    let eduData=localStorage.getItem('Edu');
    const actual_edu=JSON.parse(eduData);

    let inData=localStorage.getItem('info');
    const actual_in=JSON.parse(inData);

    let expData=localStorage.getItem('exp');
    const actual_exp=JSON.parse(expData);

    let prData=localStorage.getItem('project');
    const actual_pr=JSON.parse(prData);

    let skData=localStorage.getItem('skills');
    const actual_sk=JSON.parse(skData);

    let crData=localStorage.getItem('certificates');
    const actual_cr=JSON.parse(crData);



    // console.log(actual)
    // console.log(actual.info)
    return(
        <>
        <div ref={pdfRef}>
            <Container sx={{
                width:'100vw',
                backgroundColor:'white',
                display:'flex',
                
                
            }} >
            <div className="first">
            
            {actual_in?(<h1 className="name">{actual_in.name}</h1>):(<h1></h1>)}
            
            {/*{actual.info[0].name}*/}
            <div className="experience">
            <h3 className="heading">Experience</h3>
            {(actual_exp)?(actual_exp.map((events)=>{
                return(<>
                    
                
                <h2>{events.job_role}</h2>
                <p>{events.period}</p>
                <p>{events.learning}</p>

                </>)
            })):<div></div>} </div>

            <div className="experience">
            <h3 className="heading">Education</h3>
            {(actual_edu)?(actual_edu.map((events)=>{
                return(<>
                    
                
                <h2>{events.institiute_name}</h2>
                <p>{events.course_name}</p>
                <p>{events.serving_period}</p>

                </>)
            })):<div></div>} </div>


            <div className="experience">
            <h3 className="heading">Projects</h3>
            {(actual_pr)?(actual_pr.map((events)=>{
                return(<>

                <h2>{events.project_name}</h2>
                <p>{events.project_about}</p>
                <p>{events.link}</p>

                </>)
            })):<div></div>} </div>

            

            </div>
            <div className="second">
            <div>
            {actual_in?(<><p>{actual_in.mobile}</p><p>{actual_in.email_id}</p></>):(<></>)}
            
            </div>

            <div className="experience">
            <h3 className="heading">Skills</h3>
            <ul>
            {(actual_sk)?(actual_sk.map((events)=>{
                return(<>
                <li>{events}</li>
                

                
                </>)
            })):<div></div>}</ul> </div>

            {/* certificate */}

            <div className="experience">
            <h3 className="heading">Certificates</h3>
            {(actual_cr)?(actual_cr.map((events)=>{
                return(<>

                <h2>{events.certificate_name}</h2>
                <p>{events.link}</p>

                </>)
            })):<div></div>} </div>

            
            

            </div>
            

            </Container>
            
            
        </div>
        <Button variant="outlined" onClick={downloadPdf} >Outlined</Button>
        
        </>
    )
}

export default Resume;