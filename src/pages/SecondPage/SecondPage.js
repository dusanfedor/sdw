import React, { useState } from "react";
import "../pages.css";

function SecondPage() {
  const [vysledok, zmenVysledok] = useState(null);

  function otestuj() {
    // PRIESTOR NA TESTOVANIE

    const vstup1 = "number #1";
    const vstup2 = "[You] are my";
    const vstup3 = "datum:961005,prveMeno:tralalala,druheMeno:tralalala";

    /**********************************/

    // Retazec = string!
    // Uloha 1a: Chcem, aby si zo vstup1 a vstup2 bez toho, aby si ich priamo zmenil, dostal "[VSTUP2] [VSTUP1]!"

    let vystup1 = vstup2 + " " + vstup1 + vstup3 + "!";
    vystup1 = vystup1.toUpperCase();

    // Uloha 1b: Nechcem, aby som tam mal specialne znaky (staci len @, #, $, %, ^, &, *, [, ])

    const znaky = ["@", "#", "$", "%", "^", "&", "*", "[", "]"];
    znaky.forEach(function (polozka) {
      vystup1 = vystup1.replace(polozka, "");
    });

    // Uloha 2: Chcem, aby si zo vstup3 dostal len "[PRVEMENO] [DRUHEMENO]"
    // const vstup3 = "datum:961005,prveMeno:Juraj,druheMeno:Bacovcin";

    let koniec;

    let prve = vstup3.slice(vstup3.indexOf("prveMeno"), vstup3.length);
    if (true) {
      // koniec musi byt indexof ciarka
    } else {
      // koniec musi byt az dlzka daneho retazca
    }
    prve = prve.slice(prve.indexOf(":") + 1, koniec);

    let druhe = vstup3.slice(vstup3.indexOf("druheMeno"), vstup3.length);
    // podmienka musi ist i sem
    druhe = druhe.slice(druhe.indexOf(":") + 1, koniec);

    // let druhePoziciaZaciatok = vstup3.indexOf("druheMeno");
    //let druhePoziciaKoniec = vstup3.length;
    //let druhe = vstup3.slice(druhePoziciaZaciatok, druhePoziciaKoniec);
    //druhe = druhe.replace("druheMeno:", "");

    let meno = prve + " " + druhe;
    meno = meno.toUpperCase();

    zmenVysledok(meno);

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
