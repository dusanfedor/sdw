import React, { useState } from "react";
import "../pages.css";

function SecondPage() {
  const [vysledok, zmenVysledok] = useState(null);

  function otestuj() {
    // PRIESTOR NA TESTOVANIE
    const vstup1 = "World";
    const vstup2 = "Hello";

    /**********************************/

    // Retazec = string!
    // Uloha 1: Chcem, aby si zo vstup1 a vstup2 bez toho, aby si ich priamo zmenil, dostal "[VSTUP2] [VSTUP1]!"

    zmenVysledok();

    /**********************************/
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
