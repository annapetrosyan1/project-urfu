import React from 'react';
import Home from './Home';
import Collections from './Collection';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className='site'>
      <Nav />
      <div className='site__content'>
        <Home />
        <Collections />
        <div className='map'>
          <h3>Мероприятия рядом с </h3> <p>Местоположение</p>
          <p>Тут должна быть карта</p>
        </div>
      </div>
        <Footer />
    </div>
  );
}

export default App;
