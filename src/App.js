import React from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import { Routes,Route } from "react-router-dom";
import Resume from "./components/Resume";
import Page from "./components/Page";

const App=()=>{
  return (
    <>
    <Routes>
            <Route exact path="/resume" Component={Resume}/>
            <Route exact path="/" Component={Page}/>
    </Routes>
      
    </>
  )
}

export default App;