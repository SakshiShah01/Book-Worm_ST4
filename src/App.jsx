import React from "react";
import NavBar from './NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";

function App() {
    return (<>
    <BrowserRouter>
        <NavBar />
    </BrowserRouter>  
   </> 
    );
};

export default App;