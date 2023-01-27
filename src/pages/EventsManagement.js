import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

const tags = [
  {
    value: 0,
    label: "Спорт",
  },
  {
    value: 1,
    label: "Музыка",
  },
  {
    value: 2,
    label: "Учеба",
  },
  {
    value: 3,
    label: "Наука",
  },
  {
    value: 4,
    label: "Развлечения",
  },
  {
    value: 5,
    label: "Соревнования",
  },
  {
    value: 6,
    label: "Олимпиада",
  },
  {
    value: 7,
    label: "Программирование",
  },
  {
    value: 8,
    label: "Праздник",
  },
  {
    value: 9,
    label: "Культура и искусство",
  },
  {
    value: 10,
    label: "Творчество",
  },
  {
    value: 11,
    label: "Университетское",
  },
  {
    value: 12,
    label: "Мастеркласс",
  },
  {
    value: 13,
    label: "Cтажировка",
  },
  {
    value: 14,
    label: "Волонтер",
  },
  {
    value: 15,
    label: "Медиа",
  },
  {
    value: 16,
    label: "Туризм",
  },
  {
    value: 17,
    label: "Медицина",
  },
  {
    value: 18,
    label: "Кино",
  },
];

export default function EventsManagement() {

  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);
  const [myEvents, setMyEvents] = useState([]);

  const deleteEvent = async (i) => {
    const response = await fetch("http://46.48.59.66:2222/events/delete", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ id: i }),
    });
    const result = await response.json();
    getMyEvents();
  };

  const getMyEvents = () => {
    const doFetch = async () => {
      const response = await fetch("http://46.48.59.66:2222/events/my", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
          "Content-Type": "application/json;charset=utf-8",
        },
      });
      const result = await response.json();
      setMyEvents(result);
      console.log(result);
    };
    doFetch();
  };

  useEffect(getMyEvents, []);
  if (!sessionStorage.getItem("token")) {
    return;
  }

  return (
    <Row>
      <h3>Управление мероприятиями</h3>
      <CreateEvent
        show={modalShow}
        onHide={() => {
          setModalShow(false);
          getMyEvents();
        }}
      />
      <p>
        <button
          onClick={() => setModalShow(true)}
          type="button"
          className="create-button"
        >
          Создать мероприятие
        </button>
      </p>
      <Col md={8}>
        <h4>Вы - организатор</h4>
        {myEvents?.owner?.future_event?.map((e, i) => (
          <Card key={i} className="px-3 py-5">
            <div>
              <h5>Название: {e.title}</h5>
              <div>Дата и время: {e.date + " " + e.start_time}</div>
              <div>
                <span>Описание: {e.description}</span>
              </div>
            </div>
            <div className="my-5">
              {e.tags?.map((e, i) => (
                <span key={i} className="event-type">
                  {tags.filter((tag) => tag.value == e)[0]?.label}
                </span>
              ))}
            </div>
            <div className="d-flex justify-content-between">
              <div>
                <Button
                  onClick={() => deleteEvent(e.id)}
                  variant="outline-danger"
                  size="sm"
                >
                  Удалить
                </Button>{" "}
              </div>
              <button
                onClick={() => navigate(`/event/${e.id}`)}
                type="button"
                className="will-go-button"
              >
                Перейти
              </button>
            </div>
          </Card>
        ))}
        <h4>Архив</h4>
        {myEvents?.owner?.past_event?.map((e, i) => (
          <Card key={i} className="px-3 py-5">
            <div>
              <h5>Название: {e.title}</h5>
              <div>Дата и время: {e.date + " " + e.start_time}</div>
              <div>
                <span>Описание: {e.description}</span>
              </div>
            </div>
            <div className="my-5">
              {e.tags?.map((e, i) => (
                <span key={i} className="event-type">
                  {tags.filter((tag) => tag.value == e)[0]?.label}
                </span>
              ))}
            </div>
            <div className="d-flex justify-content-between">
              <div>
                <Button
                  onClick={() => deleteEvent(e.id)}
                  variant="outline-danger"
                  size="sm"
                >
                  Удалить
                </Button>{" "}
              </div>
              <button
                onClick={() => navigate(`/event/${e.id}`)}
                type="button"
                className="will-go-button"
              >
                Перейти
              </button>
            </div>
          </Card>
        ))}
      </Col>
      <Col md={4}>
        <h4>Вы записаны</h4>
        {myEvents?.member?.future_event?.map((e, i) => (
          <Card key={i} className="px-3 py-5">
            <div>
              <h5>Название: {e.title}</h5>
              <div>Дата и время: {e.date + " " + e.start_time}</div>
              <div>
                <span>Описание: {e.description}</span>
              </div>
            </div>
            <div className="my-5">
              {e.tags?.map((e, i) => (
                <span key={i} className="event-type">
                  {tags.filter((tag) => tag.value == e)[0]?.label}
                </span>
              ))}
            </div>
            <div className="d-flex justify-content-end">
              <button
                onClick={() => navigate(`/event/${e.id}`)}
                type="button"
                className="will-go-button"
              >
                Перейти
              </button>
            </div>
          </Card>
        ))}
        <h4>Архив</h4>
        {myEvents?.member?.past_event?.map((e, i) => (
          <Card key={i} className="px-3 py-5">
            <div>
              <h5>Название: {e.title}</h5>
              <div>Дата и время: {e.date + " " + e.start_time}</div>
              <div>
                <span>Описание: {e.description}</span>
              </div>
            </div>
            <div className="my-5">
              {e.tags?.map((e, i) => (
                <span key={i} className="event-type">
                  {tags.filter((tag) => tag.value == e)[0]?.label}
                </span>
              ))}
            </div>
            <div className="d-flex justify-content-end">
              <button
                onClick={() => navigate(`/event/${e.id}`)}
                type="button"
                className="will-go-button"
              >
                Перейти
              </button>
            </div>
          </Card>
        ))}
      </Col>
    </Row>
  );
}

function CreateEvent(props) {
  const [event, setEvent] = useState({});

  const handleEvent = (key, value) => {
    const obj = { ...event };
    obj[key] = value;
    setEvent(obj);
    console.log(obj);
  };

  const onSubmit = async () => {
    const obj = { ...event };
    obj.tags = obj.tags.map((e) => e.value);
    const response = await fetch("http://46.48.59.66:2222/events/create", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(obj),
    });
    const result = await response.json();
    props.onHide();
    console.log(result);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Создание мероприятия
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Введите название мероприятия</Form.Label>
                <Form.Control
                  onChange={(e) => handleEvent("title", e.target.value)}
                  placeholder="Вечер настольных игр"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>
                  О чем будет мероприятие? До 140 символов
                </Form.Label>
                <Form.Control
                  onChange={(e) => handleEvent("description", e.target.value)}
                  as="textarea"
                  rows={4}
                  placeholder="Посмотрим фильм, поиграем в настолки. Приходи и зови друзей!"
                />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Выберите дату</Form.Label>
                <Form.Control
                  onChange={(e) => handleEvent("date", e.target.value)}
                  type="date"
                  placeholder="Вечер настольных игр"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Начало мероприятия</Form.Label>
                <Form.Control
                  onChange={(e) => handleEvent("start_time", e.target.value)}
                  type="time"
                  placeholder="Время"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Место проведения мероприятия</Form.Label>
                <Form.Control
                  onChange={(e) => handleEvent("address", e.target.value)}
                  placeholder="Мира 32, Р-325"
                />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Введите количество участников</Form.Label>
                <Form.Control
                  onChange={(e) => handleEvent("count_people", e.target.value)}
                  type="number"
                  placeholder="Количество участников"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Обложка мероприятия</Form.Label>
                <Form.Control
                  onChange={(e) => handleEvent("icon_id", e.target.value)}
                  placeholder="url"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Выберите теги</Form.Label>
                <Select
                  closeMenuOnSelect={false}
                  isMulti
                  placeholder="Настольные игры, ..."
                  options={tags}
                  onChange={(e) => handleEvent("tags", e)}
                />
              </Form.Group>
            </Col>
          </Row>

          <div className="d-flex justify-content-center">
            <Button onClick={onSubmit} variant="warning">
              Создать
            </Button>{" "}
            <Button
              onClick={props.onHide}
              variant="outline-secondar"
              type="submit"
            >
              Отменить
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

const obj = {};
