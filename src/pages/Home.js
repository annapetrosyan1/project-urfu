import React from "react";
import Events from "../components/Events";
import Sets from "../components/Sets";

function Home() {
  return (
    <div>
      <div>
        <h3>Ближайшие события</h3>
        <Events />
      </div>
      <div>
        <h3>Подборки</h3>
        <Sets />
      </div>
    </div>
  );
}

export default Home;