import React from 'react';
import logo from '../logo.svg';
import { Row, Col, Card} from 'react-bootstrap';
import '../App.css'

function Sets() {
    return (
        <div className="my-3">
            <h3>Подборки</h3>
            <Row xs={1} md={3} className="g-2 my-3">
            {Array.from({ length: 9 }).map((_, idx) => (
                <Col>
                <Card>
                    <div className='card__wrap'>
                        <div className='card__body'>
                            <div className='title'><h5>Название</h5></div>
                            <div className='subtitle'><p >n мероприятий</p></div>
                        </div>
                        <img
                                className='card__img'
                                alt='card-img'
                                src={logo}
                                style={{ padding: '24px', width: '150px'}}
                        />
                    </div>
                </Card>
                </Col>
            ))}
        </Row>
        </div>
    )
}

export default Sets;