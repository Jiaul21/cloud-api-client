
import React, { useContext, useEffect, useState } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { useHref, useNavigate } from 'react-router-dom'
import { AuthProvider } from '../context/AuthProvider';

const Header = () => {
  
  const navigator=useNavigate();
  // const {user,setUser}=useContext(UserContext);
  const {user,setUser}=useState('')

  // useEffect(()=>{
  //   user? setUser(JSON.parse(localStorage.getItem('userDetails'))) : setUser('');
  // },[setUser])

  let profile='LogIn';
  if(user!=null){
    profile='LogOut';
  }

  const handleTemplate=()=>{
    user!=null? navigator("/api-template") : navigator("/login");
  }
  const handleService=()=>{
    user!=null? navigator("/api-service") : navigator("/login");
  }
  const handleFiles=()=>{
    user!=null? navigator("/api-file") : navigator("/login");
  }
  const handleProfile=()=>{
    if(user!=null){
      setUser(null);
      navigator("/home");
    }
    else{
      navigator("/login");
    }
  }


  return (
    <div>
      <header>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={()=> navigator("/home")}>Home</Navbar.Brand>
          <Nav className="">
            <Nav.Link onClick={ handleTemplate}>API Templates</Nav.Link>
            <Nav.Link onClick={ handleService}>My Services</Nav.Link>
            <Nav.Link onClick={ handleFiles}>MY Files</Nav.Link>
            <Nav.Link onClick={()=> navigator("/home")}>AboutUs</Nav.Link>
            <Nav.Link onClick={()=> navigator("/home")}>Contacts</Nav.Link>
            <Button onClick={ handleProfile}>{profile}</Button>
          </Nav>
        </Container>
      </Navbar>
      </header>
    </div>
  )
}

export default Header
