import React, { useEffect, useState } from "react";
import logo from "../logo.svg";
import { Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function EventsPage() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  const getEvents = () => {
    const doFetch = async () => {
      const response = await fetch("http://46.48.59.66:2222/events", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
          "Content-Type": "application/json;charset=utf-8",
        },
      });
      const result = await response.json();
      setEvents(result);
      console.log(result);
    };
    doFetch();
  };

  useEffect(getEvents, []);

  return (
    <div>
      <h3>Афиша мероприятий</h3>
      <Row xs={1} md={3} className="g-2 my-3">
        {events.map((e, i) => (
          <Col key={i}>
            <Card className="card_item" style={{ cursor: "pointer" }}>
              <div
                onClick={() => navigate(`/event/${e.id}`)}
                className="card__wrap"
              >
                <img
                  className="card__img"
                  alt="card-img"
                  src={e.icon_id}
                  style={{ padding: "24px", width: "100px" }}
                />
                <div className="card__body">
                  <div>
                    <h5>{e.title}</h5>
                  </div>
                  <div>
                    <b>Дата: </b> {e.date}
                  </div>
                  <div>
                    <b>Время: </b>{" "}
                    {e.start_time.split(":")[0] +
                      ":" +
                      e.start_time.split(":")[1]}
                  </div>
                  <div>
                    <b>Место: </b> {e.address}
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="d-flex justify-content-center">
        <Button className="me-2" disabled variant="secondary">
          ← Следующая страница
        </Button>{" "}
        <Button disabled variant="primary">
          Следующая страница →
        </Button>{" "}
      </div>
    </div>
  );
}
