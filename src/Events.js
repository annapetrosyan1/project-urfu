import React from 'react';
import logo from './logo.svg';

function Events() {
    return (
        <div>
            <h3>Меро</h3>
            <div className='card'>
                <div className='col'>
                    <img src={logo} alt='event' className='card__img' />
                    
                </div>
                <div className="col-2">
                    <h4>Название</h4>
                    <p>текст</p>
                    <p className='date'>дата</p><p className='place'>место</p>
                </div>
            </div>
            
        </div>
    );
}

export default Events;