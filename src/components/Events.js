import React, { useEffect, useState } from "react";
import logo from "../logo.svg";
import { Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Events() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  const getEvents = () => {
    const doFetch = async () => {
      const response = await fetch("http://46.48.59.66:2222/events");
      const result = await response.json();
      result.length = 3;
      setEvents(result);
    };
    doFetch();
  };

  useEffect(getEvents, []);

  return (
    <div>
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
    </div>
  );
}

export default Events;
