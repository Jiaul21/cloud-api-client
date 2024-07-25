
import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Button, Card, CardBody, Container, Form, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap'
import {  useNavigate, useParams } from 'react-router-dom'
import { useFormik } from 'formik'

const EditEmployee =() => {
    const navigator=useNavigate()
    const {id}=useParams()
    
    const [firstName, setFirstName]=useState('')
    const [lastName, setLastName]=useState('')
    const [email, setEmail]=useState('')

    useEffect(()=>{
        axios.get(`http://localhost:8080/api/employee/get/${id}`)
        .then((response)=>{
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setEmail(response.data.email);
        })
        .catch(error =>{
            console.log(error)
        })
    },[])

    const handleFirstName=(e)=>{
        setFirstName(e.target.value)
    }
    const handleLastName=(e)=>{
        setLastName(e.target.value)
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        
        axios.patch("http://localhost:8080/api/employee/update",{id,firstName,lastName,email})
        .then((response)=>{
            console.log(response.data)
            navigator('/employees')
        })
        .catch(error =>{
            console.log(error)
        })
    }
     
    
  return (
    <Container >
        <br></br>
      <Row>
        <Card className='col-md-6 offset-md-3'>
            <h2 className='text-center'>Update Employee</h2>
            <CardBody>
                <Form onSubmit={handleSubmit}>
                    <FormGroup className='mb-2'>
                        <FormLabel>First Name:</FormLabel>
                        <FormControl type='text' placeholder='Enter First Name' name='firstName'
                         value={firstName} onChange={handleFirstName}/>
                    </FormGroup>
                    <FormGroup className='mb-2'>
                        <FormLabel>Last Name:</FormLabel>
                        <FormControl type='text' placeholder='Enter Last Name' name='lastName'
                         value={lastName} onChange={handleLastName}/>
                    </FormGroup>
                    <FormGroup className='mb-2'>
                        <FormLabel>Email:</FormLabel>
                        <FormControl type='email' placeholder='Enter Email' name='email'
                         value={email} onChange={handleEmail}/>
                    </FormGroup>
                    <Button type='submit'>Submit</Button>
                </Form>
            </CardBody>
        </Card>
      </Row>
    </Container>
  )
}

export default EditEmployee
