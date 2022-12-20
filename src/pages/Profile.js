import React from 'react';
import { Form } from 'react-bootstrap';

function Profile() {
    return(
        <Form>
            <fieldset>
                <legend>Имя Фамилия</legend>
                <p><input type="file" name="photo" multiple accept="image/*,image/jpeg" /></p>
                <p><label for="surname">Фамилия</label><br/><input type="text" id="surname" required /></p>
                <p><label for="name">Имя</label><br/><input type="text" id="name" required /></p>
                <p><label for="mid-name">Отчество</label><br/><input type="text" id="mid-name" required /></p>
                <p><label for="date">Дата рождения </label><br/><input type="date" id="date" required />
                <label for="sex"> Пол</label><br/>
                    <select id="sex" required>
                    <option value="male">Мужской</option>
                    <option value="female">Женский</option>
                    </select></p>
                <p><label for="email">E-mail</label><br/><input type="email" id="email" required /></p>
                <p><label for="org">Организация</label><br/>
                    <select id="org" required>
                    <option value="rtf">ИРИТ-РТФ</option>
                    <option value="ygi">УГИ</option>
                    <option value="fti">ФТИ</option>
                    </select></p>
            </fieldset>
            <p><input type="submit" value="Сохранить" /></p>
        </Form>
    )

}
export default Profile;