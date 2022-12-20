import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Sets from './pages/Sets';
import Events from './pages/Events';
import Find from './pages/Find';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Container from "react-bootstrap/esm/Container";
import Profile from './pages/Profile';

function App() {
  return (
    <div className='site'>
      <Nav />
      <div className="site__content">
      <Container className="my-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/events' element={<Events />} />
            <Route path='/sets' element={<Sets />} />
            <Route path='/find' element={<Find />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
          </Routes> 
      </Container>
      </div>
      <Footer />
      </div>
  );
}

export default App;
