import { Routes, Route } from 'react-router-dom'
import './App.css'
import Account from './components/Account'
import GuestHome from './components/GuestHome'
import Home from './components/Home'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import SingleBook from './components/SingleBook'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LogIn />}/>
        <Route path='/guestview' element={<GuestHome />} />
      </Routes>
    </>
  )
}

export default App
