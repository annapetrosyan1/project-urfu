import React from 'react';
import logo from '../logo.svg';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Events() {
    return (
        <div>
            <h3>Мероприятия</h3>
            <Row xs={1} md={3} className="g-4">
            {Array.from({ length: 3 }).map((_, idx) => (
                <Col>
                <Card>
                    <Card.Img 
                            variant="top" 
                            src={logo}
                            style={{ padding: '24px', width: '100px'}}
                    />
                    <Card.Body>
                    <Card.Title>Название</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            ))}
        </Row>
        </div>
    );
}

export default Events;