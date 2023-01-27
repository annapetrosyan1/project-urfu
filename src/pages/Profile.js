import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

function Profile() {
  const [user, setUser] = useState({});
  const [url, setUrl] = useState("");
  const onSubmit = async () => {};

  const getUser = () => {
    const doFetch = async () => {
      const response = await fetch(`http://46.48.59.66:2222/profile`, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
          "Content-Type": "application/json;charset=utf-8",
        },
      });
      const result = await response.json();
      console.log(result);
      setUser(result);
    };
    doFetch();
  };
  useEffect(() => getUser(), []);

  return (
    <div>
      <Form>
        <fieldset>
          <legend>Имя Фамилия</legend>
          <div className="profile-form">
            <p>
              <label htmlFor="name">Имя</label>
              <br />
              <input
                disabled
                value={user.name}
                type="text"
                id="name"
                required
              />
            </p>
            <p>
              <label htmlFor="surname">Фамилия</label>
              <br />
              <input
                disabled
                value={user.surname}
                type="text"
                id="surname"
                required
              />
            </p>
            <p>
              <label htmlFor="surname">Фото профиля</label>
              <br />
              <input
                onChange={(e) => setUrl(e.target.value)}
                type="text"
                id="surname"
                placeholder="url"
                required
              />
            </p>
          </div>
        </fieldset>
        <Button className="mb-2" onClick={onSubmit} variant="warning">
          Сохранить
        </Button>{" "}
        <div>
          <Button
            onClick={() => {
              sessionStorage.clear();
            }}
            variant="outline-danger"
            size="sm"
          >
            Выйти
          </Button>{" "}
        </div>
      </Form>
    </div>
  );
}
export default Profile;
