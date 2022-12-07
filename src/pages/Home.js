import React from "react";
import Events from "./Events";
import Sets from "./Sets";

function Home() {
    return (
        <div>
            <div>
            <Events />
            </div>
            <div>
            <Sets />
            </div>
        <div className='map'>
          <h3>Мероприятия рядом с </h3> <p>Местоположение</p>
            <p>Тут должна быть карта</p>
          </div>
        </div>
    );
}

export default Home;