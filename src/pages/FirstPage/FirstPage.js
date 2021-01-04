import React, { useState } from "react";

import "../pages.css";

function FirstPage() {
  return (
    <div className="body2">
      <div className="container">
        <table>
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
        </table>
      </div>
    </div>
  );
}

export default FirstPage;
