
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';


const Footer = () => {
  return (
      <footer className="bg-dark text-white mt-auto py-3">
        <Container>
          <Row>
            <Col md={4}>
              <h5>About Us</h5>
              <p>
                We are a company dedicated to providing the best online services.
                Our mission is to make your life easier with our products.
              </p>
            </Col>
            <Col md={4}>
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="/" className="text-white">Home</a></li>
                <li><a href="/about" className="text-white">About Us</a></li>
                <li><a href="/services" className="text-white">Services</a></li>
                <li><a href="/contact" className="text-white">Contact Us</a></li>
              </ul>
            </Col>
            <Col md={4}>
              <h5>Contact Us</h5>
              <address>
                1234 Main St,<br />
                Anytown, USA<br />
                Email: <a href="mailto:info@yourcompany.com" className="text-white">info@yourcompany.com</a><br />
                Phone: (123) 456-7890
              </address>
              <h5>Follow Us</h5>
              <div className="social-icons">
                <a href="#" className="text-white mr-3"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-white mr-3"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-white mr-3"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-white"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="text-center py-3">
          © 2024 Your Company. All rights reserved.
        </div>
      </footer>
  )
}

export default Footer
