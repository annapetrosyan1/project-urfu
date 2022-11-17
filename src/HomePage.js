import React from "react";

function HomePage() {
    return (
        <div className='section'>
            <h3>Ближайщие мероприятия</h3>
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
                <div className='card'>
                    <img src='#' alt='event' />
                    <p>текст 3</p> <br />
                    <p className='date'>дата 3</p> <p className='place'>место 3</p>
                </div>
        </div>
    );
}

export default HomePage;