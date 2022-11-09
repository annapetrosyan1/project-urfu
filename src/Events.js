import React from 'react';

function Events() {
    return (
        <div>
            <h3>Меро</h3>
            <div className='card'>
                    <img src='#' alt='event' />
                    <p>текст</p> <br />
                    <p className='date'>дата</p> <p className='place'>место</p>
                </div>
                <div className='card'>
                    <img src='#' alt='event' />
                    <p>текст 2</p> <br />
                    <p className='date'>дата 2</p> <p className='place'>место 2</p>
                </div>
        </div>
    );
}

export default Events;