
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import Login from './components/Login'
import Registration from './components/Registration'
import Template from './components/Template'
import MyService from './components/MyService'
import MyFiles from './components/MyFiles'
import CreateServices from './components/CreateServices'
import DeleteService from './components/DeleteService'
import RouterAll from './RouterAll'
import { useEffect, useState } from 'react'


function App() {
  
  const [user,setUser]=useState('');
  const handleUser=((user)=>{
    setUser(user);
  })

  useEffect(()=>{
    user? setUser(JSON.parse(localStorage.getItem('userDetails'))) : setUser('');
  },[])

  return (
    <>
    <RouterAll user={user} setUser={handleUser}/>

    {/* <h1>hello</h1>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/home' element={<Home />}/>
              {/* <Route path='/login' element={<Login />}/>
              <Route path='/registration' element={<Registration />}/>
              <Route path='/api-template' element={<Template />}/>
              <Route path='/api-service' element={<MyService />}/>
              <Route path='/api-file' element={<MyFiles />}/>
              <Route path='/create-service' element={<CreateServices />}/>
              <Route path='/delete-service/:id' element={<DeleteService />}/> 
          </Routes>
        </BrowserRouter>

      <Footer />         */}

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
