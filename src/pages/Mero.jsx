import React, { useEffect, useState } from "react";
import logo from "../logo.svg";
import { Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

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

export default function EventsPage(id) {
  const location = useLocation();
  const [event, setEvent] = useState({});

  const joinEvent = async (id) => {
    console.log(id);
    const response = await fetch(`http://46.48.59.66:2222/join?id=${id}`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
        "Content-Type": "application/json;charset=utf-8",
      },
    });
    const result = await response.json();
    console.log(result);
    getEvent();
  };

  const setLike = async (id) => {
    console.log(id);
    const response = await fetch(`http://46.48.59.66:2222/like?id=${id}`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
        "Content-Type": "application/json;charset=utf-8",
      },
    });
    const result = await response.json();
    console.log(result);
    getEvent();
  };

  const setDislike = async (id) => {
    console.log(id);
    const response = await fetch(`http://46.48.59.66:2222/dislike?id=${id}`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
        "Content-Type": "application/json;charset=utf-8",
      },
    });
    const result = await response.json();
    console.log(result);
    getEvent();
  };

  const getEvent = () => {
    const doFetch = async () => {
      const response = await fetch(
        `http://46.48.59.66:2222/events?id=${location.pathname
          .split("/")
          .pop()}`
      );
      const result = await response.json();
      setEvent(result[0]);
      console.log(result[0]);
    };
    doFetch();
  };

  useEffect(getEvent, []);

  return (
    <Card>
      <Card.Header>Хорошее событие!</Card.Header>
      <Card.Body>
        <Card.Title>
          <b>Название: </b>
          {event.title}
        </Card.Title>
        <Card.Text>
          <b>Описание: </b>
          {event.description}
        </Card.Text>
        <Card.Text>
          <b>Дата: </b>
          {event.date}
        </Card.Text>
        <Card.Text>
          <b>Время: </b>
          {event.start_time}
        </Card.Text>
        <Card.Text>
          <b>Место проведения: </b>
          {event.address}
        </Card.Text>
        <Card.Text>
          На <b>{event.count_people} </b> человек{" "}
        </Card.Text>
        <div className="mb-5" id="event-types">
          {event.tags?.map((e, i) => (
            <span key={i} className="event-type">
              {tags.filter((tag) => tag.value == e)[0]?.label}
            </span>
          ))}
        </div>
        <div className="mb-5" id="event-types">
          <button onClick={() => setLike(event.id)}>Лайк</button>
          <button onClick={() => setDislike(event.id)}>Дизлайк</button>
        </div>
        <Button
          disabled={!event.can_join}
          onClick={() => joinEvent(event.id)}
          variant="success"
        >
          Пойду
        </Button>
      </Card.Body>
    </Card>
  );
}
