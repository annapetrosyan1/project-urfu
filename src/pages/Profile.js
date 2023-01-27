import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Col, Form, Row } from "react-bootstrap";

function Profile() {
  const [user, setUser] = useState({});
  const [url, setUrl] = useState("");

  const onSubmit = async () => {
    const response = await fetch(`http://46.48.59.66:2222/profile/change`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ icon_id: url }),
    });
    const result = await response.json();
    console.log(result);
    getUser();
  };

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
      <Row>
        <Col md={6}>
          {" "}
          <Form>
            <fieldset>
              <legend>Имя Фамилия</legend>
              <div className="profile-form">
                <p>
                  <label htmlFor="name">Имя</label>
                  <br />
                  <input disabled value={user.name} type="text" id="name" />
                </p>
                <p>
                  <label htmlFor="surname">Фамилия</label>
                  <br />
                  <input disabled value={user.surname} id="surname" />
                </p>
                <p>
                  <label htmlFor="surname">Фото профиля</label>
                  <br />
                  <input
                    onChange={(e) => setUrl(e.target.value)}
                    type="text"
                    id="surname"
                    placeholder="url"
                  />
                </p>
              </div>
            </fieldset>
            <Button className="mb-2" onClick={onSubmit} variant="primary">
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
        </Col>
        <Col md={6}>
          <img style={{ width: "100%" }} src={user.icon_id}></img>
        </Col>
      </Row>
    </div>
  );
}
export default Profile;
