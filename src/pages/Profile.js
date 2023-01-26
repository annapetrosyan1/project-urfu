import React from "react";
import { Form } from "react-bootstrap";

function Profile() {
  return (
    <div>
      <Form>
        <fieldset>
          <legend>Имя Фамилия</legend>
          <div className="profile-form">
            <p>
              <label htmlFor="surname">Фамилия</label>
              <br />
              <input type="text" id="surname" required />
            </p>
            <p>
              <label htmlFor="name">Имя</label>
              <br />
              <input type="text" id="name" required />
            </p>
            <p>
              <label htmlFor="email">E-mail</label>
              <br />
              <input type="email" id="email" required />
            </p>
          </div>
        </fieldset>
        <p>
          <button type="button" className="search-button save-button">
            Сохранить
          </button>
        </p>
      </Form>
    </div>
  );
}
export default Profile;
