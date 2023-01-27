import React, { useEffect, useState } from "react";
import logo from "../logo.svg";
import { Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
    <>
      {" "}
      <Card>
        <Card.Header>Хорошее событие!</Card.Header>
        <Card.Body>
          <Row>
            <Col md={8}>
              {" "}
              <Card.Title>
                <b>Название: </b>
                {event.title}
              </Card.Title>
              <Card.Text>
                <b>Описание: </b>
                {event.description}
              </Card.Text>
              <Button onClick={() => navigate(`/user/${event.owner}`)} variant="success">
                Организатор
              </Button>
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
                Количество мест: <b>{event.count_people} </b>
              </Card.Text>
              <div className="mb-5" id="event-types">
                {event.tags?.map((e, i) => (
                  <span key={i} className="event-type">
                    {tags.filter((tag) => tag.value == e)[0]?.label}
                  </span>
                ))}
              </div>
              <div
                style={{ cursor: "pointer" }}
                className="mb-5"
                id="event-types"
              >
                {event.likes || 0}
                <ThumbUpIcon
                  className="ms-2"
                  onClick={() => setLike(event.id)}
                />
                <ThumbDownAltIcon
                  onClick={() => setDislike(event.id)}
                  className="ms-4 me-2"
                />
                {event.dislikes || 0}
              </div>
              <Button
                disabled={!event.can_join}
                onClick={() => joinEvent(event.id)}
                variant="success"
              >
                Пойду
              </Button>
            </Col>
            <Col className="mt-2" md={4}>
              <img style={{ maxWidth: "100%" }} src={event.icon_id} />
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <h4>Комментарии</h4>
      <Comments data={event.comments || []} event_id={event.id} />
    </>
  );
}

function Comments({ event_id, data }) {
  const navigate = useNavigate();
  const [comment, setComment] = useState("");
  const onSubmit = async () => {
    setComment("");
    const response = await fetch(`http://46.48.59.66:2222/comment/`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ event_id, comment }),
    });
    const result = await response.json();
  };
  return (
    <div>
      {data?.map((e, i) => (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{e[0]}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <span
                onClick={() => navigate(`/user/${e[0]}`)}
                style={{ color: "blue", cursor: "pointer" }}
              >
                {" "}
                {" " + e[0]}
              </span><span> </span>
              {e[1]}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Оставить комментарий</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Row>
            <Col>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Control
                    as={"textarea"}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Круто!"
                  />
                </Form.Group>

                <Button onClick={onSubmit} variant="primary">
                  Отправить
                </Button>
              </Form>
            </Col>
          </Row>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
