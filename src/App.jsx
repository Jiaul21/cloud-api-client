import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListEmployee from './components/employee/ListEmployee'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddEmployee from './components/employee/AddEmployee'
import EditEmployee from './components/employee/EditEmployee'
import DeleteEmployee from './components/employee/DeleteEmployee'
import Home from './components/Home'
import Login from './components/Login'
import Registration from './components/Registration'
import Template from './components/Template'
import { UserContext } from './context/UserContext'
import RouterAll from './RouterAll'
import MyFiles from './components/MyFiles'

function App() {
  


  return (
    <>
      <UserContext.Provider value={{user,setUser}}>
        <BrowserRouter>
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

      <Footer />

      </UserContext.Provider>
        

      {/* <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<ListEmployee />} />
          <Route path='/employees' element={<ListEmployee />} />
          <Route path='/add-employee' element={<AddEmployee />} />
          <Route path='/edit-employee/:id' element={<EditEmployee />} />
          <Route path='/delete-employee/:id' element={<DeleteEmployee />} />
        </Routes>
        <Footer />
      </BrowserRouter> */}
      
    </>
  )
}

export default App
