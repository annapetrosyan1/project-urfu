import React, { useEffect, useState } from "react";
import logo from "../logo.svg";
import { Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
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

export default function User() {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState({});
  const [myEvents, setMyEvents] = useState([]);

  const getUser = () => {
    const doFetch = async () => {
      const response = await fetch(
        `http://46.48.59.66:2222/user?user=${location.pathname
          .split("/")
          .pop()}`
      );
      const result = await response.json();
      console.log(result);
    };
    doFetch();
  };
  useEffect(() => getUser(), []);

  return (
    <Row>
      <Col md={6}>
        <img style={{ width: "100%" }}></img>
      </Col>
      <Col md={6}>
        <div>
          <b>Имя:</b>
        </div>
        <div>Организовал 20 ивентов!</div>
        <div>Поучаствовал в 20!</div>
      </Col>
      <Col md={8}>
        <h4>Вы - организатор</h4>
        {myEvents?.owner?.future_event?.map((e, i) => (
          <Card key={i} className="px-3 py-5">
            <div>
              <h5>Название: {e.title}</h5>
              <div>Дата и время: {e.date + " " + e.start_time}</div>
              <div>
                <span>Описание</span>
              </div>
              <div>Организация</div>
            </div>
            <div className="my-5">
              {e.tags?.map((e, i) => (
                <span key={i} className="event-type">
                  {tags.filter((tag) => tag.value == e)[0]?.label}
                </span>
              ))}
            </div>
            <div className="d-flex justify-content-between">
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
                <span>Описание</span>
              </div>
              <div>Организация</div>
            </div>
            <div className="my-5">
              {e.tags?.map((e, i) => (
                <span key={i} className="event-type">
                  {tags.filter((tag) => tag.value == e)[0]?.label}
                </span>
              ))}
            </div>
            <div className="d-flex justify-content-between">
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
                <span>Описание</span>
              </div>
              <div>Организация</div>
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
                <span>Описание</span>
              </div>
              <div>Организация</div>
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
