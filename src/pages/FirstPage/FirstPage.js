import React, { useState, useEffect } from "react";

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
    const result = 0 - a;
    alert(result);
  }

  useEffect(() => {
    negate(-10);
  });

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
          <div class="col-2">±</div> {/* negate */}
          <div class="col-2">√</div> {/* root */}
        </div>

        <div class="row">
          <div class="col-2">7</div>
          <div class="col-2">8</div>
          <div class="col-2">9</div>
          <div class="col-2">/</div> {/* divide */}
          <div class="col-2">%</div>
        </div>

        <div class="row">
          <div class="col-2">4</div>
          <div class="col-2">5</div>
          <div class="col-2">6</div>
          <div class="col-2">*</div> {/* multiply */}
          <div class="col-2">1/x</div> {/* getFraction */}
        </div>

        <div class="row">
          <div class="col-2">1</div>
          <div class="col-2">2</div>
          <div class="col-2">3</div>
          <div class="col-2">+</div> {/* add */}
          <div class="col-2">-</div> {/* subtract */}
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
