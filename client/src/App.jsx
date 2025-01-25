// import React from 'react'
import { Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import ApplyScholarship from './pages/ApplyScholarship'
import Scholarship from './pages/Scholarship'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/apply-scholarship/:id' element={<ApplyScholarship/>}/>
      <Route path='/scholarship' element={<Scholarship/>}/>
    </Routes>
    </>
  )
}

export default App