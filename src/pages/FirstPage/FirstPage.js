import React, { useCallback, useEffect, useState } from "react";

import "../pages.css";

function FirstPage() {
  const [dogs, setDogs] = useState(null);
  const [dad, setDad] = useState(null);
  const [age, setAge] = useState(null);
  const [live, setLive] = useState(null);
  const [timer, setTimer] = useState(null);
  const [day, setDay] = useState(null);

  function den() {
    if (!day) {
      const date = new Date().toLocaleDateString();
      setDay(date);
    } else setDay("");
  }

  function cas() {
    if (!timer) {
      const time = new Date().toLocaleTimeString();
      const newtime = time;
      setTimer(newtime);
    } else setTimer("");
  }

  function zivotopis() {
    if (!live) {
      const opis =
        " VZDĚLÁNÍ: SOU Stavebné, Košice ; automechanik / 1992 - 1995 ; KURZY A ŠKOLENÍ: Faurecia Slovakia GAP liderska akademia / 2012 - 2012 ; PRŮBĚH ZAMĚSTNÁNÍ: Na volné nozre -01.12.2020 - dosud, Programováni:  Vytvářim projekty na seskupení e-shopu kvůli znížení výdaju za reklamy. Vytvářim e-shopy, weby, blogy. Programuji v  Java script, CSS, PHP, v programu React app . Doprava a oprava s.r.o od 01.11.2019 - 30.11.2020, pozice Manažér , náplň -Zajišťování zakázak a zastupováni firmy na jednánich, vedení - evidense práce, docházky, hodnotení zaměstnanců, príprava podkladů pro mzdy, daňová evidece - podklady na účetníctvi, archivace výdaju a zisků, eliminace výdajů . Ideal automotiv Tachov od 2017 - 2019, Mistr ve výrobě = zajištění plynulé výroby, práce v excelu, zaznamenávání docházky, dohled nad dodržováním BOZP, podávání zpráv o produkci, rozvoj tím lídrou, zdokonalovaní pracovního procesu ve spolupráci s procesní inženýři . Faurecia Slovakia od 2011 - 2017, pozice: Production Manager náplň práce,  Zajištění plynulé výroby na svěřených projektech, přesuny informací vedení firmy, rozdělení objednávek na svěřené projekty práce v excelu, tvorba kontingenčných tabulek, grafu produkce, grafu scrapu grafu PPM, zaznamenávání docházkyteem tídrom, dohled nad dodržováním BOZP, podávání zpráv o produkci vedení firmy na bázi denních mítingu a návrhy na zlepšení nedustatku, vývoj team lídrou, zdokonalovaní výrobního procesu ve spolupráci s procesními inženýři. Faurecia Slovakia od 2010 - 2011, pozice= Gap líder";
      setLive(opis);
    } else setLive("");
  }

  function zacinam() {
    if (!dogs) {
      const syn = " syn:Ing.Juraj Bacovcin";
      const dcera = "dcéra:Viki Fedorova;";
      const máma = " máma:Najka Fedorova; ";
      const family = máma + "" + "" + dcera + "" + "" + syn;

      setDogs(family);
    } else setDogs("");
  }

  function object() {
    if (!dad) {
      const firstName = "Dusan Fedor";
      const fullName = firstName;

      setDad(fullName);
    } else setDad("");
  }

  function years() {
    if (!age) {
      const mojvek = "43";

      setAge(mojvek);
    } else setAge("");
  }

  return (
    <div className="body">
      <div className="sobota">{day}</div>
      <div className="nedela">
        <button onClick={den}>
          <b>Dátum:</b>
        </button>
      </div>
      <div className="quartz">{timer}</div>
      <div className="oomega">
        <button onClick={cas}>
          <b>Čas:</b>
        </button>
      </div>
      <div className="fullName">{dad}</div>
      <div className="lastName">
        <button onClick={object}>
          <b>Meno</b>
        </button>
      </div>

      <div className="numero">{age}</div>
      <div className="rumero">
        <button onClick={years}>
          <b>Můj věk</b>
        </button>
      </div>
      <div className="zivot">{live}</div>
      <div className="zivotopis">
        <button onClick={zivotopis}>
          <b>Zivotopis</b>
        </button>
      </div>
      <div className="result">{dogs}</div>
      <div className="testing">
        <button onClick={zacinam}>
          <b>Moje rodina</b>
        </button>
      </div>
    </div>
  );
}

export default FirstPage;
