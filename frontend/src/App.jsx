import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import EmployeeDashboard from './pages/EmployeeDashboard.jsx'
import { useState } from 'react'
function App() {
 return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/dashboard" element={<EmployeeDashboard/>}/>
     </Routes>
    </BrowserRouter>
 )
}

export default App
