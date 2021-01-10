import React, { useState } from "react";

import "../pages.css";

function FirstPage() {
  function add(a, b) {
    const result = a + b;
    alert(result);
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
    alert(result);
  }

  return (
    <div className="body2">
      <div className="container">
        <div className="row">
          <div className="col-10">display</div>
        </div>

        <div className="row">
          <div className="col-2">
            <button className="calcBtn">←</button>
          </div>
          <div className="col-2">
            <button className="calcBtn">CE</button>
          </div>
          <div className="col-2">
            <button className="calcBtn">C</button>
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
            <button className="calcBtn">7</button>
          </div>
          <div className="col-2">
            <button className="calcBtn">8</button>
          </div>
          <div className="col-2">
            <button className="calcBtn">9</button>
          </div>
          <div className="col-2">
            <button className="calcBtn">/</button>
          </div>
          <div className="col-2">
            <button className="calcBtn">x²</button>
          </div>
        </div>

        <div className="row">
          <div className="col-2">
            <button className="calcBtn">4</button>
          </div>
          <div className="col-2">
            <button className="calcBtn">5</button>
          </div>
          <div className="col-2">
            <button className="calcBtn">6</button>
          </div>
          <div className="col-2">
            <button className="calcBtn">*</button>
          </div>
          <div className="col-2">
            <button className="calcBtn">1/x</button>
          </div>
        </div>

        <div className="row">
          <div className="col-2">
            <button className="calcBtn">1</button>
          </div>
          <div className="col-2">
            <button className="calcBtn">2</button>
          </div>
          <div className="col-2">
            <button className="calcBtn">3</button>
          </div>
          <div className="col-2">
            <button className="calcBtn">+</button>
          </div>
          <div className="col-2">
            <button className="calcBtn">-</button>
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <button className="calcBtn">0</button>
          </div>
          <div className="col-2">
            <button className="calcBtn">.</button>
          </div>
          <div className="col-4">
            <button className="calcBtn">=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
