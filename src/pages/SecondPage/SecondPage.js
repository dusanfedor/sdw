import React, { useState } from "react";
import "../pages.css";

function SecondPage() {
  const [vysledok, zmenVysledok] = useState(null);

  function otestuj() {
    // PRIESTOR NA TESTOVANIE

    zmenVysledok("test");
  }

  return (
    <div className="body">
      <div className="result">{vysledok}</div>
      <div className="testing">
        <button onClick={otestuj}>
          <b>OTESTUJ</b>
        </button>
      </div>
    </div>
  );
}

export default SecondPage;
