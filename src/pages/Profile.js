import React from 'react';
import { Form } from 'react-bootstrap';

function Profile() {
    return(
        <div>
        <Form>
            <fieldset>
                <legend>Имя Фамилия</legend>
                <div className='profile-form'>
                    <p><label htmlFor="surname">Фамилия</label><br/>
                        <input type="text" id="surname" required/></p>
                    <p><label htmlFor="name">Имя</label><br/>
                        <input type="text" id="name" required /></p>
                    <p><label htmlFor="mid-name">Отчество</label><br/>
                        <input type="text" id="mid-name" required /></p>

                    <div className='date-string'>
                        <div className='profile-date'>
                            <label htmlFor="date">Дата рождения </label><br/>
                                <input type="date" id="date" required style={{ float: 'left', width: '188px'}}/>
                            <label htmlFor="sex">Пол</label>
                                <select id="sex" required style={{ width: '188px'}}>
                                    <option disabled>Выберите пол</option>
                                    <option value="male">Мужской</option>
                                    <option value="female">Женский</option>
                                </select>
                        </div>
                    </div>
                    <p><label htmlFor="email">E-mail</label><br/>
                        <input type="email" id="email" required /></p>
                    <p><label htmlFor="org">Организация
                        </label><br/>
                        <select id="org" required style={{ width: '407px'}}>
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
                </div>
            </fieldset>
            <p><button type="button" className='search-button save-button'>Сохранить</button></p>
        </Form>
        </div>
    );

}
export default Profile;