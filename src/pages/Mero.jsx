import React, { useEffect, useState } from "react";
import logo from "../logo.svg";
import { Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

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
        <Button variant="success">Пойду</Button>
      </Card.Body>
    </Card>
  );
}
