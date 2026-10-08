// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Send from './Components/Send/Send.jsx'
// import Recieve from './Components/Recieve/Recieve.jsx'
import Nav from './Components/Nav/Nav.jsx'
import Home from './Components/Home/Home.jsx'
import NotFound from './Components/NotFound/NotFound.jsx'
import Dash from './Components/Dash/Dash.jsx'
import Profile from './Components/Profile/Profile.jsx'

function App() {

  return (
    <>
    <Nav/>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/Dash' element={<Dash/>}>
        <Route path='Profile' element={<Profile/>}/>
     </Route>
     <Route path='/Send' element={<Send/>}/>
     
     <Route path='*' element={<NotFound/>}/>


     </Routes>
      
    </>
  )
}

export default App
