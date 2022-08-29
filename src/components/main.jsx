import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './navbar';
import Box from '@mui/material/Box'
import Dashboard from './Dashboard';
import FaQuestions from './faQuestions';
const Main = () => {
  return (
    <Router>
        < Box component="div"  className='main'>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='faqs' element={<FaQuestions/>}/>
            </Routes>
        </Box>
    </Router>
  )
}

export default Main