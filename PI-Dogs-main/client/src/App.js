import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage/landingPage';
import Home from './pages/HomePage/homePage';
import DetailDog from './pages/DetailPage/detailPage';
import Formulario from './pages/CreatDog/creatDog';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/dogs/:id' element={<DetailDog/>} />
        <Route path='/dogs/create' element={<Formulario/>} />
      </Routes>
    </div>
  );
}

export default App;
