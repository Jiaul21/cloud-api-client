
import React, { useContext, useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios'
import { UserContext } from '../context/UserContext';



const Login = () => {

  const {user,setUser}=useContext(UserContext);
  const navigator=useNavigate();

    const formik = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validationSchema:yup.object({
            email:yup.string().email().required(),
            password:yup.string().min(3,"minimum 3 character").required(),
        }),
         onSubmit(formUser, {resetForm}){
            console.log("form data",formUser)
            axios.post("http://localhost:8080/api-user/login",formUser)
            .then((response)=>{
                console.log(response)
                setUser({
                  id:response.data.id,
                  userName:response.data.userName,
                  email:response.data.email,
                  token:response.data.token
                })
                navigator("/home")
            })
            .catch(error =>{
                console.log(error)
            })
                resetForm({values:""})
            }
    },[])

    const emailError =formik.touched.email && formik.errors.email &&(
        <span style={{color:"red"}}>{formik.errors.email}</span>)

    const passwordError =formik.touched.password && formik.errors.password &&(
        <span style={{color:"red"}}>{formik.errors.password}</span>)


  return (
    <div>
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row className="w-100">
        <Col md={6} lg={4} className="mx-auto">
          <Card className="shadow-lg p-4">
            <Card.Body>
              <h2 className="text-center mb-4">Login</h2>
              <Form onSubmit={formik.handleSubmit}>
                <Form.Group controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" value={formik.values.email}
                  onChange={formik.handleChange}/>
                  <br/>{emailError}
                </Form.Group>

                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" value={formik.values.password}
                  onChange={formik.handleChange}/>
                  <br/>{passwordError}
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mt-3">
                  Login
                </Button>
                <Button onClick={()=>navigator("/registration")} variant="primary" className="w-100 mt-3">
                  Create New Account
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

export default Login
