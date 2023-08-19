import { createContext, useContext, useReducer,useEffect } from "react";
import { Reducer } from "./eduReducer";



const education=createContext();

const Context=({children})=>{

    
    

    const initialState={
        
        skills:[],
        educatin:[],
        experience:[],
        projects:[],
        certificates:[],
        info:[]
    }

    const[state,delay]=useReducer(Reducer,initialState);

    useEffect(()=>{
        localStorage.setItem('Edu',JSON.stringify(state.educatin));
        

    },[state.educatin])

    useEffect(()=>{
        localStorage.setItem('info',JSON.stringify(state.info));
        

    },[state.info])

    useEffect(()=>{
        localStorage.setItem('exp',JSON.stringify(state.experience));
        

    },[state.experience])
    useEffect(()=>{
        localStorage.setItem('project',JSON.stringify(state.projects));
        

    },[state.projects])

    useEffect(()=>{
        localStorage.setItem('skills',JSON.stringify(state.skills));
        

    },[state.skills])

    useEffect(()=>{
        localStorage.setItem('certificates',JSON.stringify(state.certificates));
        

    },[state.certificates])

    
    return(<education.Provider value={{state,delay}}>
        {children}
    </education.Provider>

    )
}

const Educontext=()=>{
    return useContext(education);
}

export {Context};
export {Educontext};