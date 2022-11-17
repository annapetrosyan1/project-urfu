import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Collection from './Collection';
import Events from './Events';
import CollectionSelection from './CollectionSelection';
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
            <Route path='/events' element={<Events />} />
            <Route path='/sets' element={<Collection />} />
            <Route path='/find' element={<CollectionSelection />} />
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
