import React, { useState } from "react";
import "../pages.css";

function SecondPage() {
  const [vysledok, zmenVysledok] = useState(null);

  function otestuj() {
    // PRIESTOR NA TESTOVANIE

    const vstup1 = "number #1";
    const vstup2 = "[You] are my";
    const vstup3 = "datum:961005,prveMeno:Juraj,druheMeno:Bacovcin";

    /**********************************/

    // Retazec = string!
    // Uloha 1a: Chcem, aby si zo vstup1 a vstup2 bez toho, aby si ich priamo zmenil, dostal "[VSTUP2] [VSTUP1]!"

    let vystup1 = vstup2 + " " + vstup1 + "!";
    vystup1 = vystup1.toUpperCase();

    // Uloha 1b: Nechcem, aby som tam mal specialne znaky (staci len @, #, $, %, ^, &, *, [, ])

    const znaky = ["@", "#", "$", "%", "^", "&", "*", "[", "]"];
    znaky.forEach(function (polozka) {
      vystup1 = vystup1.replace(polozka, "");
    });

    // Uloha 2: Chcem, aby si zo vstup3 dostal len "[PRVEMENO DRUHEMENO]"

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
