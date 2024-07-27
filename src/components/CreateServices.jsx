
import React, { useContext, useState } from 'react'
import { Button, Card, Col, Container, Form, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap'
import { AuthProvider } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios'
import Header from './Header';


const CreateServices = () => {
    const {user,setUser}=useContext(AuthProvider);
    const navigator=useNavigate();

    const formik = useFormik({
        initialValues:{
            projectName:'',
            userInfo:user
        },
        onSubmit(formUser, {resetForm}){
        console.log("form data",formUser)
        axios.post("http://localhost:8080/api-key/create",formUser)
        .then((response)=>{
            console.log(response.data)
            navigator("/api-service")
        })
        .catch(error =>{
            console.log(error)
        })
            resetForm({values:""})
        }
    },[])

  return (
    <div>
    <Header />
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row className="w-100">
        <Col md={6} lg={4} className="mx-auto">
          <Card className="shadow-lg p-4">
            <Card.Body>
              <h2 className="text-center mb-4">Create Api Service</h2>

              <Form onSubmit={formik.handleSubmit}>
                <Form.Group controlId="projectName">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="text" placeholder="Project Name" value={formik.values.projectName}
                  onChange={formik.handleChange}/>
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mt-3">
                  Add
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

export default CreateServices
