
import React, { useState,useEffect } from 'react'
import axios from 'axios'
import {  useNavigate, useParams } from 'react-router-dom'
import { Button, Card, Container, Table } from 'react-bootstrap'

const DeleteEmployee = () => {

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

    const deleteEmployee=(id)=>{
        axios.delete(`http://localhost:8080/api/employee/delete/${id}`)
        .then((response)=>{
            console.log(response)
            navigator('/employees')
        })
        .catch(error=>{
            console.log(error)
        })
    }

  return (
    <div>
        <Container>
            <Card className='col-md-6 offset-md-3'>
                <h2 className='text-center'>Employee Details</h2>
                <Table className='table-striped table-bordered'>
                    
                    <tr> <th>EmploYee Id</th> <td>{id}</td> </tr>
                    <tr> <th>First Nmae</th> <td>{firstName}</td> </tr>
                    <tr> <th>Last Name</th> <td>{lastName}</td> </tr>
                    <tr> <th>Email</th> <td>{email}</td> </tr>

                </Table>
                <Button onClick={()=>deleteEmployee(id)}>Delete</Button>
            </Card>
    </Container>
    </div>
  )
}

export default DeleteEmployee

