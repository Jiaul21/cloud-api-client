
import React, { useContext } from 'react'
import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
const Home = () => {
  const {user,setUser}=useContext(UserContext);
  const navigator=useNavigate();

  const handleStart=()=>{
    if(user!=null){
      navigator("/api-template")
    }
    else{
      navigator("/login")
    }
  }
  return (
    <>
      <div>
        <Header />
        <header className="hero-section text-black">
          <Container className="text-center">
            <Row>
              <Col>
                <h1>Free Video and Image Storage API</h1>
                <p>Store and manage your media files with ease</p>
                <Button className='btn-lg' onClick={handleStart}>GET STARTED</Button>
              </Col>
            </Row>
          </Container>
        </header>

        <section id="features" className="py-5">
          <Container>
            <Row className="text-center">
              <Col>
                <h2>Features</h2>
                <p>Our API provides secure, scalable storage solutions for all your media needs.</p>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col md={4} className="text-center">
                <h4>Fast Uploads</h4>
                <p>Upload your videos and images quickly and efficiently.</p>
              </Col>
              <Col md={4} className="text-center">
                <h4>Secure Storage</h4>
                <p>Your files are stored securely with our state-of-the-art encryption.</p>
              </Col>
              <Col md={4} className="text-center">
                <h4>Easy Access</h4>
                <p>Access your media files from anywhere, at any time.</p>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="examples" className="py-5 bg-light">
          <Container>
            <Row className="text-center">
              <Col>
                <h2>Examples</h2>
                <p>See how easy it is to integrate our API into your projects.</p>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col md={6}>
                <h5>Image Example</h5>
                <img style={{width:"100%"}} src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDR
                YPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc
                3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA7QMBIgACEQEDEQH/
                xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAIHAQj/xABDEAACAQMCAgYFBg0FAQEBAAABAgMABBEFIRIxBhMiQVFhMn
                GBkdEUI5KhorEHJDNCQ1JTVGKCwdLhFSU0cvBEsjX/xAAaAQADAQEBAQAAAAAAAAAAAAACAwQFAQAG/8QAJREAAgICA
                gICAgMBAAAAAAAAAAECAxEhBDESQRMiBTIVM4Fh/9oADAMBAAIRAxEAPwCpW8D/ACI3vEMB+HFNdL1kyJ1N4vWRjYN3
                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" alt="Example" className="img-fluid" />
              </Col>
              <Col md={6}>
                <h5>Video Example</h5>
                <video width="100%" controls>
                  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  )
}

export default Home
