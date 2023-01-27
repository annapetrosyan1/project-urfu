import React, { useEffect, useState } from "react";
import logo from "../logo.svg";
import { Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";

const tags = [
  [
    {
      id: 0,
      name: "Спорт",
    },
    {
      id: 1,
      name: "Музыка",
    },
    {
      id: 2,
      name: "Учеба",
    },
    {
      id: 3,
      name: "Наука",
    },
    {
      id: 4,
      name: "Развлечения",
    },
    {
      id: 5,
      name: "Соревнования",
    },
    {
      id: 6,
      name: "Олимпиада",
    },
    {
      id: 7,
      name: "Программирование",
    },
    {
      id: 8,
      name: "Праздник",
    },
    {
      id: 9,
      name: "Культура и искусство",
    },
    {
      id: 10,
      name: "Творчество",
    },
    {
      id: 11,
      name: "Университетское",
    },
    {
      id: 12,
      name: "Мастеркласс",
    },
    {
      id: 13,
      name: "Cтажировка",
    },
    {
      id: 14,
      name: "Волонтер",
    },
    {
      id: 15,
      name: "Медиа",
    },
    {
      id: 16,
      name: "Туризм",
    },
    {
      id: 17,
      name: "Медицина",
    },
    {
      id: 18,
      name: "Кино",
    },
  ],
];

export default function EventsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const idSet = location.pathname.split("/").pop();
  console.log(idSet);
  console.log(tags[0].filter((e) => e.id == idSet));
  const [events, setEvents] = useState([]);

  const getEvents = () => {
    const doFetch = async () => {
      const response = await fetch(`http://46.48.59.66:2222/find/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ tags: [idSet] }),
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
      <h3>{tags[0].filter((e) => e.id == idSet)[0]?.name}</h3>
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
                  <div className="title">
                    <h5>{e.title}</h5>
                  </div>
                  <div>Дата: {e.date + " " + e.start_time}</div>
                  <div>Место: {e.address}</div>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="d-flex justify-content-center">
        <Button className="me-2" disabled variant="secondary">
          ← Предыдущая страница
        </Button>{" "}
        <Button disabled variant="primary">
          Следующая страница →
        </Button>{" "}
      </div>
    </div>
  );
}
