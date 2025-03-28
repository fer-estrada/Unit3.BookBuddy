import { Routes, Route } from 'react-router-dom'
import './App.css'
import Account from './components/Account'
import Home from './components/Home'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import SingleBook from './components/SingleBook'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LogIn />}/>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/homeview' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
