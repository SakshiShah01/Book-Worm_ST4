import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Routes, Route, Link } from "react-router-dom";

import BooksHome from './BooksHome'
import About from "./About";
import Contact from "./Contact";

const NavBar = () => {
  
    return ( 
   
    <>
    <div>
       <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Book Worm</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
              <Nav.Link as={Link} to={"/About"}>About</Nav.Link>
              <Nav.Link as={Link} to={"/Contact"}>Contact us</Nav.Link>
            </Nav>
              <h6 style={{color:"white"}}>Read Books....</h6> 
          </Container>
        </Navbar>
      </div>
      
      <div className="bodyTo">
      <Routes>
        <Route exact path="/" element={<BooksHome/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </div>
     </>
    
  
     
    );
  };
  
  export default NavBar;