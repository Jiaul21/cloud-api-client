
import React, { useContext } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext';

const Header = () => {
  
  const navigator=useNavigate();
  const {user,setUser}=useContext(UserContext);

  const handleService=()=>{
    user? navigator("/api-service") : navigator("/login");
  }
  const handleFiles=()=>{
    user? navigator("/api-file") : navigator("/login");
  }
  const handleProfile=()=>{
    if(user){
      setUser('');
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
            <Nav.Link onClick={()=> navigator("/api-template")}>API Templates</Nav.Link>
            <Nav.Link onClick={ handleService}>My Services</Nav.Link>
            <Nav.Link onClick={ handleFiles}>MY Files</Nav.Link>
            <Nav.Link onClick={()=> navigator("/home")}>AboutUs</Nav.Link>
            <Nav.Link onClick={()=> navigator("/home")}>Contacts</Nav.Link>
            <Button onClick={ handleProfile}>{user? 'LogOut':'LogIn'}</Button>
          </Nav>
        </Container>
      </Navbar>
      </header>
    </div>
  )
}

export default Header;
