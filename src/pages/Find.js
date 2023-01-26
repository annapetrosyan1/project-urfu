import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import "../App.css";
import Select from "react-select";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

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
  const [events, setEvents] = useState([]);
  return (
    <div>
      <Form>
        <Row>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Количество учасников</Form.Label>
              <Form.Control placeholder="1" />
              <Form.Text className="text-muted">От</Form.Text>
              <Form.Control placeholder="1000" />
              <Form.Text className="text-muted">До</Form.Text>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Дата начала</Form.Label>
              <Form.Control type="date" />
              <Form.Label>Дата окончания</Form.Label>
              <Form.Control type="date" />
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
              />
            </Form.Group>
            <div className="d-flex justify-content-end mt-5 me-2">
              <Button variant="warning">Найти</Button>
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
            <th>Дата проведения</th>
          </tr>
        </thead>
        <tbody>
          {events.map((e, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{e.title}</td>
              <td>{e.address}</td>
              <td>{e.date + " " + "vrem9"}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Find;
