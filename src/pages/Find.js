import React, { useState, useEffect } from "react";
import { Col, Form, Row } from "react-bootstrap";
import "../App.css";
import Select from "react-select";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

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

function Find() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [setting, setSettings] = useState({
    date: [],
    count_people: [0, 1000],
    start_time: [],
    owner: [],
    tags: [],
  });

  const handleSettings = (key, value, key2) => {
    const obj = { ...setting };
    if (key2) {
      obj[key][key2] = value;
    } else {
      obj[key] = value;
    }
    setSettings(obj);
    console.log(obj);
  };

  const getEvents = () => {
    const obj = { ...setting };
    obj.tags = obj.tags?.map((e) => e.value);
    const doFetch = async () => {
      const response = await fetch(`http://46.48.59.66:2222/find/`, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(obj),
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
      <Form>
        <Row>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Количество учасников</Form.Label>
              <Form.Control
                onChange={(e) =>
                  handleSettings("count_people", e.target.value, "0")
                }
                type="number"
                placeholder="1"
              />
              <Form.Text className="text-muted">От</Form.Text>
              <Form.Control
                onChange={(e) =>
                  handleSettings("count_people", e.target.value, "1")
                }
                type="number"
                placeholder="1000"
              />
              <Form.Text className="text-muted">До</Form.Text>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Дата начала</Form.Label>
              <Form.Control
                onChange={(e) =>
                  handleSettings("start_time", e.target.value, "0")
                }
                type="date"
              />
              <Form.Text className="text-muted">От</Form.Text>
              <Form.Control
                onChange={(e) =>
                  handleSettings("start_time", e.target.value, "1")
                }
                type="date"
              />
              <Form.Text className="text-muted">До</Form.Text>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Выберите теги</Form.Label>
              <Select
                closeMenuOnSelect={false}
                isMulti
                placeholder="Настольные игры, ..."
                options={tags}
                onChange={(e) => handleSettings("tags", e)}
              />
            </Form.Group>
            <div className="d-flex justify-content-end mt-5 me-2">
              <Button onClick={getEvents} variant="warning">
                Найти
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
      <Table className="mt-5" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Мероприятие</th>
            <th>Место</th>
            <th>Дата и время проведения</th>
          </tr>
        </thead>
        <tbody>
          {events.map((e, i) => (
            <tr
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/event/${e.id}`)}
              key={i}
            >
              <td>{i + 1}</td>
              <td>{e.title}</td>
              <td>{e.address}</td>
              <td>{e.date + "   " + e.start_time}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Find;
