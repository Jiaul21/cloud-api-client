
import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Button, Card, CardBody, Container, Form, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'

const AddEmployee = () => {
    const navigator=useNavigate()
    const {id}=useParams()

    const formik = useFormik({
        initialValues:{
            firstName:'',
            lastName:'',
            email:''
        },
        validationSchema:yup.object({
            firstName:yup.string().min(2,"minimum 2 character").required(),
            lastName:yup.string().min(2,"minimum 2 character").required(),
            email:yup.string().email().required(),
            
        }),
         onSubmit(employee, {resetForm}){
            console.log(employee)
            axios.post("http://localhost:8080/api/employee/create",employee)
            .then((response)=>{
                console.log(response.data)
                navigator('/employees')
            })
            .catch(error =>{
                console.log(error)
            })
                resetForm({values:""})
            }
    },[])
    const pageTitle=()=>{
        if(id){
            useEffect(()=>{
                axios.get(`http://localhost:8080/api/employee/get/${id}`)
                .then((response)=>{
                    formik.setFieldValue(response.data)
                    console.log(response.data)
                    console.log("geted")
                    console.log(formik.values)
                })
                .catch(error =>{
                    console.log(error)
                })
            },[])
            return "Update Employee"
        }
        else{
            return "Add Employee"
        }
    }

    const firstNameError =formik.touched.firstName && formik.errors.firstName &&(
        <span style={{color:"red"}}>{formik.errors.firstName}</span>)

    const lastNameError =formik.touched.lastName && formik.errors.lastName &&(
        <span style={{color:"red"}}>{formik.errors.lastName}</span>)

    const emailError =formik.touched.email && formik.errors.email &&(
        <span style={{color:"red"}}>{formik.errors.email}</span>)

  return (
    <Container >
        <br></br>
      <Row>
        <Card className='col-md-6 offset-md-3'>
            <h2 className='text-center'>{pageTitle()}</h2>
            <CardBody>
                <Form onSubmit={formik.handleSubmit}>
                    <FormGroup className='mb-2'>
                        <FormLabel>First Name:</FormLabel>
                        <FormControl type='text' placeholder='Enter First Name' name='firstName'
                         value={formik.values.firstName} onChange={formik.handleChange}/>
                         <br/> {firstNameError}
                    </FormGroup>
                    <FormGroup className='mb-2'>
                        <FormLabel>Last Name:</FormLabel>
                        <FormControl type='text' placeholder='Enter Last Name' name='lastName'
                         value={formik.values.lastName} onChange={formik.handleChange}/>
                         <br/> {lastNameError}
                    </FormGroup>
                    <FormGroup className='mb-2'>
                        <FormLabel>Email:</FormLabel>
                        <FormControl type='email' placeholder='Enter Email' name='email'
                         value={formik.values.email} onChange={formik.handleChange }/>
                         <br/> {emailError}
                    </FormGroup>
                    <Button type='submit'>Submit</Button>
                </Form>
            </CardBody>
        </Card>
      </Row>
    </Container>
  )
}

export default AddEmployee
