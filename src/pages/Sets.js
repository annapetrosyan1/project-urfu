import React from 'react';
import logo from '../logo.svg';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Sets() {
    return (
        <div>
            <h3>Подборки</h3>
            <Row xs={1} md={3} className="g-4">
            {Array.from({ length: 3 }).map((_, idx) => (
                <Col>
                <Card>
                    <Card.Img className='card__img'
                            variant="top"
                            src={logo}
                            style={{ padding: '24px', width: '100px'}}
                    />
                    <Card.Body>
                    <Card.Title>Название</Card.Title>
                    <Card.Text>Количество мероприятий</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            ))}
        </Row>
        </div>
    );
}

export default Sets;