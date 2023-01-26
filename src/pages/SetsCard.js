import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import logo from '../logo.svg';

const SetsCard = (props) => {
    const { sets } = props;
    if (!sets || sets.length === 0) return <p>No sets, sorry</p>;
    
    return (
        <div>
        {sets.map((item) => {
            return (
                <Card>
                    <div key = {item.id} className='card__wrap'>
                        <div className='card__body'>
                            <div className='sets-title'><h5>{item.name}</h5></div>
                            <div className='sets-subtitle'><p >n мероприятий</p></div>
                        </div>
                        <img
                                className='card__img'
                                alt='card-img'
                                src={logo}
                                style={{ padding: '24px', width: '150px'}}
                        />
                    </div>
                </Card>
            );     
        })}
        </div>         
    );
  };
  export default SetsCard;
