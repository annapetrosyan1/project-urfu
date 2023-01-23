import React from 'react';
import logo from '../logo.svg';
import { Form, Nav} from 'react-bootstrap';
import '../App.css';

function Find() {
    return (
        <div>
        <Nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/">Главная</a></li>
            <li className="breadcrumb-item active" aria-current="page">Подобрать мероприятие</li>
        </ol>
        </Nav>
        <Form>
            <fieldset>
            <legend>Подобрать мероприятие</legend>
            <div className='find-item'>
                <p><label htmlFor="org">Организатор</label><br/>
                        <select id="org">
                            <option disabled>Выберите</option>
                            <option value="ienim">ИЕНИМ</option>
                            <option value="inmit">ИНМиТ</option>
                            <option value="rtf">ИРИТ-РТФ</option>
                            <option value="isa">ИСА</option>
                            <option value="ifk">ИФКСиПМ</option>
                            <option value="info">ИНФО</option>
                            <option value="iney">ИНЭУ</option>
                            <option value="ugi">УГИ</option>
                            <option value="enin">УралЭНИН</option>
                            <option value="fti">ФТИ</option>
                            <option value="hti">ХТИ</option>
                        </select></p>
                <p><label htmlFor="participant">Количество участников</label> <br/>
                <input type="number" id="participant-input" name="participant"
                min="50" max="500" /></p>
                <p><label htmlFor="date">Дата начала</label><br/>
                    <input type="date" className='date-input' /> </p>
                <p><label htmlFor="date">Дата окончания</label><br/>
                    <input type="date" className='date-input' /> </p>
                <p><label htmlFor="place">Место проведения</label> <br/>
                        <select id='place'>
                            <option disabled>Выберите</option>
                            <option value='gogolya-25'>Гоголя, 25</option>
                            <option value='kominterna-14'>Коминтерна, 14</option>
                            <option value='kyibisheva-48'>Куйбышева, 48</option>
                            <option value='lenina-13b'>Ленина, 13б</option>
                            <option value='lenina-51'>Ленина, 51</option>
                            <option value='mira-17'>Мира, 17</option>
                            <option value='mira-19'>Мира, 19</option>
                            <option value='mira-21'>Мира, 21</option>
                            <option value='mira-28'>Мира, 28</option>
                            <option value='mira-32'>Мира, 32</option>
                            <option value='s-kovalevskoi-5'>С. Ковалевской, 5</option>
                        </select></p>
                <p><label htmlFor="place">Тип мероприятия</label><br/>
                        <select name='type' id='type' multiple="multiple" size="3">
                            <option disabled>Выберите</option>
                            <option value='sport'>Спорт</option>
                            <option value='music'>Музыка</option>
                            <option value='study'>Учеба</option>
                            <option value='science'>Наука</option>
                            <option value='fun'>Развлечения</option>
                            <option value='competition'>Соревнования</option>
                            <option value='olimpic'>Олимпиада</option>
                            <option value='it'>Программирование</option>
                            <option value='party'>Праздник</option>
                            <option value='culture'>Культура и искусство</option>
                            <option value=''>Творчество</option>
                            <option value='local'>Локальное</option>
                            <option value='university'>Университетское</option>
                            <option value='master-class'>Мастер класс</option>
                            <option value='inter'>Стажировка</option>
                            <option value='volunteer'>Волонтер</option>
                            <option value='media'>Медиа</option>
                            <option value='tourism'>Туризм</option>
                            <option value='medicine'>Медицина</option>
                            <option value='movie'>Кино</option>
                        </select></p>
            </div>
            </fieldset>
            <p><button type="button" className='search-button'>Найти</button></p>
        </Form>
        </div>
    );
}

export default Find;