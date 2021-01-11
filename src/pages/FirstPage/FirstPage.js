import React, { useState } from "react";

import "../pages.css";

function FirstPage() {
  const [display, setDisplay] = useState("0");

  function displayInput(input) {
    // TODO 1: ak pises viac znamienok po sebe, tak sa zobrazi vzdy len to posledne, na ktore kliknes
    // TODO 2: nula nemoze byt na zaciatku cisla (ak to nie je len 0 alebo v ramci desatinneho cisla)
    // https://www.itnetwork.cz/javascript/zaklady/javascript-js-tutorial-datove-typy-retezce-cisla-funkce
    // https://www.itnetwork.cz/javascript/zaklady/javascript-tutorial-podminky
    // https://www.itnetwork.cz/javascript/zaklady/javascript-tutorial-cykly-for-while
    // https://www.itnetwork.cz/javascript/zaklady/javascript-tutorial-zaciname-s-javascriptem-podminky-cykly-pole-svatky
    let result = display + input;

    if (result == "00") {
      result = "0";
    }

    setDisplay(result);
  }

  function clear() {
    setDisplay("0");
  }

  function evaluate() {
    setDisplay("0"); // TODO: prerobit na vypocet prikladu
  }

  function add(a, b) {
    const result = a + b;
  }

  function subtract(a, b) {
    const result = a - b;
    alert(result);
  }

  function multiply(a, b) {
    const result = a * b;
    alert(result);
  }

  function divide(a, b) {
    const result = a / b;
    alert(result);
  }

  function square(a) {
    const result = a * a;
    alert(result);
  }

  function root(a) {
    const result = Math.sqrt(a);
    alert(result);
  }

  function negate(a) {
    const result = 0 - a;
    alert(result);
  }

  function getFraction(a) {
    const result = 1 / a;
    setDisplay(result);
  }

  return (
    <div className="body2">
      <div className="container">
        <div className="row">
          <div className="col-10">{display}</div>
        </div>

        <div className="row">
          <div className="col-2">
            <button className="calcBtn">←</button>
          </div>
          <div className="col-2">
            <button className="calcBtn">CE</button>
          </div>
          <div className="col-2">
            <button className="calcBtn" onClick={clear}>
              C
            </button>
          </div>
          <div className="col-2">
            <button className="calcBtn">±</button>
          </div>
          <div className="col-2">
            <button className="calcBtn">√</button>
          </div>
        </div>

        <div className="row">
          <div className="col-2">
            <button className="calcBtn" onClick={() => displayInput("7")}>
              7
            </button>
          </div>
          <div className="col-2">
            <button className="calcBtn" onClick={() => displayInput("8")}>
              8
            </button>
          </div>
          <div className="col-2">
            <button className="calcBtn" onClick={() => displayInput("9")}>
              9
            </button>
          </div>
          <div className="col-2">
            <button className="calcBtn" onClick={() => displayInput(" / ")}>
              /
            </button>
          </div>
          <div className="col-2">
            <button className="calcBtn">x²</button>
          </div>
        </div>

        <div className="row">
          <div className="col-2">
            <button className="calcBtn" onClick={() => displayInput("4")}>
              4
            </button>
          </div>
          <div className="col-2">
            <button className="calcBtn" onClick={() => displayInput("5")}>
              5
            </button>
          </div>
          <div className="col-2">
            <button className="calcBtn" onClick={() => displayInput("6")}>
              6
            </button>
          </div>
          <div className="col-2">
            <button className="calcBtn" onClick={() => displayInput(" * ")}>
              *
            </button>
          </div>
          <div className="col-2">
            <button className="calcBtn">1/x</button>
          </div>
        </div>

        <div className="row">
          <div className="col-2">
            <button className="calcBtn" onClick={() => displayInput("1")}>
              1
            </button>
          </div>
          <div className="col-2">
            <button className="calcBtn" onClick={() => displayInput("2")}>
              2
            </button>
          </div>
          <div className="col-2">
            <button className="calcBtn" onClick={() => displayInput("3")}>
              3
            </button>
          </div>
          <div className="col-2">
            <button className="calcBtn" onClick={() => displayInput(" + ")}>
              +
            </button>
          </div>
          <div className="col-2">
            <button className="calcBtn" onClick={() => displayInput(" - ")}>
              -
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <button className="calcBtn" onClick={() => displayInput("0")}>
              0
            </button>
          </div>
          <div className="col-2">
            <button className="calcBtn" onClick={() => displayInput(".")}>
              .
            </button>
          </div>
          <div className="col-4">
            <button className="calcBtn" onClick={evaluate}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
