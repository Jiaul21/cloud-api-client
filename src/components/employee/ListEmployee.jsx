
import React, { useEffect, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const ListEmployee = () => {

    const navigator=useNavigate()

    const [employees, setEmployees]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:8080/api/employee/get")
        .then((response)=>{
            setEmployees(response.data);
        })
        .catch(error =>{
            console.log(error)
        })
    },[])

    const addNewEmployee=()=>{
        navigator('/add-employee')
    }
    const updateEmployee=(id)=>{
        navigator(`/edit-employee/${id}`)
    }
    const deleteEmployee=(id)=>{
        navigator(`/delete-employee/${id}`)
    }

  return (
    <Container>
        <h2 className='text-center'>List Of Employee</h2>
        <Button onClick={addNewEmployee}>Add New Employee</Button>
        <Table className='table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>First Nmae</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>
                                <Button onClick={()=>updateEmployee(employee.id)}>Update</Button>
                                <Button onClick={()=>deleteEmployee(employee.id)}>Delete</Button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </Table>
    </Container>
  )
}

export default ListEmployee
