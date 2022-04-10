import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Page/Home';
import ValidationPdf from './Page/ValidationPdf';

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/validation' element={<ValidationPdf />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;