import React, { useState } from "react";

import "../pages.css";

function FirstPage() {
  const [display, setDisplay] = useState("0");
  const unrepeatable = ["+", "-", "*", "/", "."];

  function displayInput(input) {
    // TODO: nula nemoze byt na zaciatku cisla (ak to nie je len 0 alebo v ramci desatinneho cisla)
    // TODO: ak bude v ramci jedneho cisla viac desatinnych ciarok, tak zostane len ta prva

    let result = display;
    const last = display[display.length - 1];

    if (unrepeatable.indexOf(input) == -1 && result == "0") {
      result = "";
    }

    if (unrepeatable.indexOf(last) != -1 && unrepeatable.indexOf(input) != -1) {
      result = result.replace(/.$/, input);
    } else {
      result += input;
    }

    setDisplay(result);
  }

  function clear() {
    setDisplay("0");
  }

  function evaluate() {
    let result = display;
    const last = display[display.length - 1];

    if (unrepeatable.indexOf(last) != -1) {
      result = result.replace(/.$/, "");
    }

    // TODO: dorobit vypocet

    alert(result);
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
            <button className="calcBtn" onClick={() => displayInput("/")}>
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
            <button className="calcBtn" onClick={() => displayInput("*")}>
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
            <button className="calcBtn" onClick={() => displayInput("+")}>
              +
            </button>
          </div>
          <div className="col-2">
            <button className="calcBtn" onClick={() => displayInput("-")}>
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
