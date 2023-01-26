import React from "react";
import { Form } from "react-bootstrap";
import "../App.css";
import Select from "react-select";

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
  return (
    <div>
      <Form>
        <fieldset>
          <legend>Подобрать мероприятие</legend>
          <div className="find-items">
            {/* <p className="find-item">
              <label htmlFor="org">Организатор</label>
              <select id="org">
                <option disabled>Выберите</option>
                <option value="ienim">ИЕНИМ</option>
                <option value="inmit">ИНМиТ</option>
                <option value="rtf">ИРИТ-РТФ</option>
                <option value="isa">ИСА</option>
                <option value="ifk">ИФКСиПМ</option>
                <option value="info">ИНФО</option>
                <option value="iney">ИНЭУ</option>
                <option value="ugi">УГИ</option>
                <option value="enin">УралЭНИН</option>
                <option value="fti">ФТИ</option>
                <option value="hti">ХТИ</option>
              </select>
            </p> */}
            <p className="find-item">
              <label htmlFor="participant">Количество участников</label> <br />
              <input
                type="number"
                id="participant-input"
                name="participant"
                min="50"
                max="500"
              />
            </p>
            <p className="find-item">
              <label htmlFor="date">Дата начала</label>
              <br />
              <input type="date" className="date-input" />{" "}
            </p>
            <p className="find-item">
              <label htmlFor="date">Дата окончания</label>
              <br />
              <input type="date" className="date-input" />{" "}
            </p>
            {/* <p className="find-item">
              <label htmlFor="place">Место проведения</label> <br />
              <select id="place">
                <option disabled>Выберите</option>
                <option value="gogolya-25">Гоголя, 25</option>
                <option value="kominterna-14">Коминтерна, 14</option>
                <option value="kyibisheva-48">Куйбышева, 48</option>
                <option value="lenina-13b">Ленина, 13б</option>
                <option value="lenina-51">Ленина, 51</option>
                <option value="mira-17">Мира, 17</option>
                <option value="mira-19">Мира, 19</option>
                <option value="mira-21">Мира, 21</option>
                <option value="mira-28">Мира, 28</option>
                <option value="mira-32">Мира, 32</option>
                <option value="s-kovalevskoi-5">С. Ковалевской, 5</option>
              </select>
            </p> */}
            <p className="find-item">
              <label htmlFor="place">Тип мероприятия</label>
              <br />
              <Select
                closeMenuOnSelect={false}
                isMulti
                placeholder="Настольные игры, ..."
                options={tags}
                // onChange={(e) => handleEvent("tags", e)}
              />
            </p>
          </div>
        </fieldset>
        <p>
          <button type="button" className="search-button">
            Найти
          </button>
        </p>
      </Form>
    </div>
  );
}

export default Find;
