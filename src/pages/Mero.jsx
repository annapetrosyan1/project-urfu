import React, { useEffect, useState } from "react";
import logo from "../logo.svg";
import { Row, Col, Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";

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
    <div>
      <Row xs={1} md={3} className="g-2 my-3">
        {event.title}
      </Row>
    </div>
  );
}
