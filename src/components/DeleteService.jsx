
import React, { useState,useEffect } from 'react'
import axios from 'axios'
import {  useNavigate, useParams } from 'react-router-dom'
import { Button, Card, Container, Table } from 'react-bootstrap'
import Header from './Header'

const DeleteService = () => {
    const navigator=useNavigate()
    const {id}=useParams()
    
    const [projectName, setProjectName]=useState('')
    const [apiKey, setApiKey]=useState('')

    useEffect(()=>{
        axios.get(`http://localhost:8080/api-key/get/${id}`)
        .then((response)=>{
            setProjectName(response.data.projectName);
            setApiKey(response.data.apiKey);
        })
        .catch(error =>{
            console.log(error)
        })
    },[])

    const deleteEmployee=(id)=>{
        axios.delete(`http://localhost:8080/api-key/delete/${id}`)
        .then((response)=>{
            console.log(response)
            navigator('/api-service')
        })
        .catch(error=>{
            console.log(error)
        })
    }

  return (
    <div>
        <Header />
        <Container style={{minHeight:"500px"}}>
            <Card className='col-md-6 offset-md-3'>
                <h2 className='text-center'>Api Details</h2>
                <Table className='table-striped table-bordered'>
                    
                    <tr> <th>Project Nmae</th> <td>{projectName}</td> </tr>
                    <tr> <th>Api Key</th> <td>{apiKey}</td> </tr>

                </Table>
                <Button onClick={()=>deleteEmployee(id)}>Delete</Button>
            </Card>
    </Container>
    </div>
  )
}

export default DeleteService
