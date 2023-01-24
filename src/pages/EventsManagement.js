import React from "react";
import {Card} from 'react-bootstrap';

function EventsManagement() {
    return(
        <div>
            <h3>Управление мероприятиями</h3>
            <p><button type="button" className='create-button'>Создать мероприятие</button></p>
            <Card className='event-card-wrap'>
                <div className="card-body">
                    <div className='card-title'>
                        <h5>Название</h5>
                    </div>
                    <div className="event-date">Дата</div>
                    <div className="card-subtitle">
                        <span>This is a longer card with supporting text below as a natural</span>
                    </div>
                    <div className="org">Организация</div>
                </div>
                <div id='event-types'>
                    <span className="event-type">Тег 1</span>
                    <span className="event-type">Тег 2 - длина</span>
                </div>
                <p><button type="button" className='will-go-button'>Я пойду</button></p>
            </Card>
        </div>
    );
}
export default EventsManagement;