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

export default function EventsPage() {
  const location = useLocation();
  const [event, setEvent] = useState({});

  const getEvents = () => {
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

  useEffect(getEvents, []);

  return (
    <Card>
      <Card.Header>Хорошее событие!</Card.Header>
      <Card.Body>
        <Card.Title>{event.title}</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Card.Text>{event.date}</Card.Text>
        <Card.Text>{event.start_time}</Card.Text>
        <Card.Text>{event.address}</Card.Text>
        <Card.Text>На {event.count_people} человек </Card.Text>
        <div className="mb-5" id="event-types">
          {event.tags?.map((e, i) => (
            <span key={i} className="event-type">
              {tags.filter((tag) => tag.value == e)[0]?.label}
            </span>
          ))}
        </div>
        <Button variant="success">Пойду</Button>
      </Card.Body>
    </Card>
  );
}
