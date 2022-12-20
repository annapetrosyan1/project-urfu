import React from 'react';
import logo from '../logo.svg';
import { Form, Nav} from 'react-bootstrap';

function Find() {
    return (
        <div>
        <Nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">Главная</a></li>
            <li class="breadcrumb-item active" aria-current="page">Подобрать мероприятие</li>
        </ol>
        </Nav>
        <Form>
            <fieldset>
            <legend>Подобрать мероприятие</legend>
            <p><label for="org">Организатор</label><br/>
                    <select id="org">
                    <option value="rtf">ИРИТ-РТФ</option>
                    <option value="ygi">УГИ</option>
                    <option value="fti">ФТИ</option>
                    </select>
            <label for="participant">Количество участников</label><br/>
            <input type="number" id="participant" name="participant"
            min="50" max="500" /></p>
            <p><label for="date">Дата начала</label><br/><input type="date" id="date" />
                <label for="date">Дата окончания</label><br/><input type="date" id="date" /> </p>
            <p><label for="place">Место проведения</label><br/><input type="text" id="place" /></p>
            <p><label for="place">Тип мероприятия</label><br/><input type="text" id="place" /></p>
            <p><label for="place">Рейтинг мероприятия</label><br/><input type="number" id="rating" name="rating"
            min="0" max="5" /></p>
            <p><label for="place">Дополнительно</label><br/><input type="text" id="place" /></p>
            </fieldset>
            <p><input type="submit" value="Показать списком" />
                <input type="submit" value="Найти" /></p>
        </Form>
        </div>
    );
}

export default Find;