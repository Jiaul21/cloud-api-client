
import { useFormik } from 'formik';
import * as yup from 'yup'
import React, { useContext } from 'react'
import axios from 'axios'

import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AuthProvider } from '../context/AuthProvider';
import Header from './Header';

const Registration = () => {

  const {user,setUser}=useContext(AuthProvider);
  const navigator=useNavigate();

    const formik = useFormik({
        initialValues:{
            userName:'',
            email:'',
            password:''
        },
        validationSchema:yup.object({
            userName:yup.string().min(2,"minimum 2 character").required(),
            email:yup.string().email().required(),
            password:yup.string().min(3,"minimum 3 character").required(),
        }),
         onSubmit(formUser, {resetForm}){
            axios.post("http://localhost:8080/api-user/registration",formUser)
            .then((response)=>{
                console.log(response.data)
                setUser(response.data)
                navigator("/home")
            })
            .catch(error =>{
                console.log(error)
            })
                resetForm({values:""})
            }
    },[])

    const userNameError =formik.touched.userName && formik.errors.userName &&(
        <span style={{color:"red"}}>{formik.errors.userName}</span>)

    const emailError =formik.touched.email && formik.errors.email &&(
        <span style={{color:"red"}}>{formik.errors.email}</span>)

    const passwordError =formik.touched.password && formik.errors.password &&(
        <span style={{color:"red"}}>{formik.errors.password}</span>)


  return (
    <div>
      <Header />
      <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row className="w-100">
        <Col md={6} lg={4} className="mx-auto">
          <Card className="shadow-lg p-4">
            <Card.Body>
              <h2 className="text-center mb-4">Register</h2>

              <Form onSubmit={formik.handleSubmit}>
                <Form.Group controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" value={formik.values.email}
                  onChange={formik.handleChange}/>
                  <br/>{emailError}
                </Form.Group>

                <Form.Group controlId="userName">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="Enter username" value={formik.values.userName}
                  onChange={formik.handleChange}/>
                  <br/>{userNameError}
                </Form.Group>

                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" value={formik.values.password}
                  onChange={formik.handleChange}/>
                  <br/>{passwordError}
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mt-3">
                  Register
                </Button>
                <Button onClick={()=>navigator("/login")} variant="primary" className="w-100 mt-3">
                  Already Have An Account?
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Registration
