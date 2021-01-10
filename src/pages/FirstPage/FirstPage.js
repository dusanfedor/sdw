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

  function negate(a) {
    const result = alert(result);
  }

  function root(a) {
    const result = Math.sqrt(a);
    alert(result);
  }

  function divide(a, b) {
    const result = a / b;
    alert(result);
  }

  function multiply(a, b) {
    const result = a * b;
    alert(result);
  }

  function getFraction(a) {
    const result = 1 / a;
    alert(result);
  }

  return (
    <div className="body2">
      <div className="container">
        <div class="row">
          <div class="col-10">display</div>
        </div>

        <div class="row">
          <div class="col-2">←</div>
          <div class="col-2">CE</div>
          <div class="col-2">C</div>
          <div class="col-2">±</div>
          <div class="col-2">√</div>
        </div>

        <div class="row">
          <div class="col-2">7</div>
          <div class="col-2">8</div>
          <div class="col-2">9</div>
          <div class="col-2">/</div>
          <div class="col-2">%</div>
        </div>

        <div class="row">
          <div class="col-2">4</div>
          <div class="col-2">5</div>
          <div class="col-2">6</div>
          <div class="col-2">*</div>
          <div class="col-2">1/x</div>
        </div>

        <div class="row">
          <div class="col-2">1</div>
          <div class="col-2">2</div>
          <div class="col-2">3</div>
          <div class="col-2">+</div>
          <div class="col-2">-</div>
        </div>

        <div class="row">
          <div class="col-4">0</div>
          <div class="col-2">.</div>
          <div class="col-4">=</div>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
