import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className='site'>
      <Nav />
      <div className='site__content'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes> 
        </BrowserRouter>       
      </div>
      <Footer />
    </div>
  );
}

export default App;






{/* <Collections />
          <div className='map'>
            <h3>Мероприятия рядом с </h3> <p>Местоположение</p>
            <p>Тут должна быть карта</p>
          </div> */}