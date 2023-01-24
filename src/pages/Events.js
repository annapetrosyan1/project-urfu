import React from 'react';
import logo from '../logo.svg';
import { Row, Col, Card } from 'react-bootstrap';

function Events() {
    return (
        <div>
            <h3>Афиша мероприятий</h3>
            <Row xs={1} md={3} className="g-2 my-3">
            {Array.from({ length: 3 }).map((_, idx) => (
                <Col>
                <Card>
                <div className='card__wrap'>
                    <img
                        className='card__img'
                        alt='card-img'
                        src={logo}
                        style={{ padding: '24px', width: '100px'}}
                    />
                    <div className='card__body'>
                        <div className='title'><h5>Название</h5></div>
                            <div className='subtitle'>
                                <span>This is a longer card with supporting text below as a natural</span>
                            </div>
                            <div style={{ float: 'left', marginLeft: '24px'}}>Дата</div>
                            <div style={{ position: 'absolute', right: '0', marginRight: '32px'}}>Место</div>
                    </div>
                </div>
                </Card>
                </Col>
            ))}
        </Row>
        </div>
    );
}

export default Events;