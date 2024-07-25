
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Registration from './components/Registration'
import Template from './components/Template'
import Footer from './components/Footer'
import Header from './components/Header'
import MyService from './components/MyService'
import MyFiles from './components/MyFiles'
import CreateServices from './components/CreateServices'
import DeleteService from './components/DeleteService'

const RouterAll = () => {
  return (
    <>

    {/* <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/registration' element={<Registration />}/>
            <Route path='/api-template' element={<Template />}/>
            <Route path='/api-service' element={<MyService />}/>
            <Route path='/api-file' element={<MyFiles />}/>
            <Route path='/create-service' element={<CreateServices />}/>
            <Route path='/delete-service/:id' element={<DeleteService />}/>
        </Routes>
    </BrowserRouter>

    <Footer /> */}
    </>
  )
}

export default RouterAll
