
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom';
import { Button, Container, Table } from 'react-bootstrap';
import CreateServices from './CreateServices';


const MyService = () => {

    const [kyes, setKyes]=useState([]);
    const [projectName, setProjectName]=useState('');
    const navigator=useNavigate()

    useEffect(()=>{
        axios.get("http://localhost:8080/api-key/getAll")
        .then((response)=>{
            setKyes(response.data);
        })
        .catch(error =>{
            console.log(error)
        })
    },[])

    // const handleprojectNameChange=(e)={
    //     setProjectName(e.target.value);
    // }

    const deleteApiKey=(id)=>{
        navigator(`/delete-service/${id}`)
    }
    let newService='';
    const handleNew=()=>{
        navigator("/create-service")
    }

  return (
    <div>
      <Header />
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
                    
                    kyes.map(key =>
                        <tr key={key.id}>
                            <td>{key.id}</td>
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
