import React from "react";
import Events from "./Events";
import Collection from "./Collection";

function HomePage() {
    return (
        <div>
            <div>
            <Events />
            </div>
            <div>
            <Collection />
            </div>
        <div className='map'>
          <h3>Мероприятия рядом с </h3> <p>Местоположение</p>
            <p>Тут должна быть карта</p>
          </div>
        </div>
    );
}

export default HomePage;