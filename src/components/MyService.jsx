
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom';
import { Button, Container, Table } from 'react-bootstrap';
import CreateServices from './CreateServices';


const MyService = () => {

    const [keys,setKeys]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8080/api-key/getAll")
        .then((response)=>{
            setKeys(response.data);
        })
        .catch(error =>{
            console.log(error)
        })
    },[])

    const deleteApiKey=(id)=>{
        navigator(`/delete-service/${id}`)
    }
    let newService='';
    const handleNew=()=>{
        navigator("/create-service")
    }

  return (
    <div>
      <Container style={{minHeight:"500px"}}>
        <h2 className='text-center'>All API Services</h2>
        <Button onClick={handleNew}> Create New API Service</Button>
        {newService}
        <Table className='table-striped table-bordered min-height-50vh mb-4'>
            <thead>
                <tr>
                    <th>SL</th>
                    <th>Project Nmae</th>
                    <th>API Key</th>
                    <th>Total Files</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    
                    keys.map((key, index)=>
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{key.projectName}</td>
                            <td>{key.apiKey}</td>
                            <td>{key.titalFiles}</td>
                            <td>
                                <Button onClick={()=>deleteApiKey(key.id)}>Delete</Button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </Table>
    </Container>
    </div>
  )
}

export default MyService
