import React, { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

export default function EventsManagement() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      <h3>Управление мероприятиями</h3>
      <CreateEvent show={modalShow} onHide={() => setModalShow(false)} />
      <p>
        <button
          onClick={() => setModalShow(true)}
          type="button"
          className="create-button"
        >
          Создать мероприятие
        </button>
      </p>
      {/* <Card className="event-card-wrap">
        <div className="card-body">
          <div className="card-title">
            <h5>Название</h5>
          </div>
          <div className="event-date">Дата</div>
          <div className="card-subtitle">
            <span>
              This is a longer card with supporting text below as a natural
            </span>
          </div>
          <div className="org">Организация</div>
        </div>
        <div id="event-types">
          <span className="event-type">Тег 1</span>
          <span className="event-type">Тег 2 - длина</span>
        </div>
        <p>
          <button type="button" className="will-go-button">
            Я пойду
          </button>
        </p>
      </Card> */}
    </div>
  );
}

function CreateEvent(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Создание мероприятия
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Введите название мероприятия</Form.Label>
                <Form.Control placeholder="Вечер настольных игр" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>
                  О чем будет мероприятие? До 140 символов
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Посмотрим фильм, поиграем в настолки. Приходи и зови друзей!"
                />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Выберите дату</Form.Label>
                <Form.Control type="date" placeholder="Вечер настольных игр" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Начало мероприятия</Form.Label>
                <Form.Control type="time" placeholder="Время" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Место проведения мероприятия</Form.Label>
                <Form.Control placeholder="Мира 32, Р-325" />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Введите количество участников</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Количество участников"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Загрузите обложку мероприятияя</Form.Label>
                <Form.Control type="file" placeholder="Загрузить фото" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Выберите теги</Form.Label>
                <Form.Control placeholder="Настольные игры, ..." />
              </Form.Group>
            </Col>
          </Row>

          <div className="d-flex justify-content-center">
            <Button variant="warning">Создать</Button>{" "}
            <Button
              onClick={props.onHide}
              variant="outline-secondar"
              type="submit"
            >
              Отменить
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
