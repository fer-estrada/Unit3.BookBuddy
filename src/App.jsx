import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Account from './components/Account'
import Home from './components/Home'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import SingleBook from './components/SingleBook'


function App() {
  const [token, setToken] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    setToken(token)
  }, [])
  
  return (
    <>
      <Routes>
        <Route path='/' element={<LogIn token={token} setToken={setToken} />}/>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/homeview' element={<Home />} />
        <Route path='/accountview' element={<Account />} />
        <Route path='/books/:id' element={<SingleBook />} />
      </Routes>
    </>
  )
}

export default App
