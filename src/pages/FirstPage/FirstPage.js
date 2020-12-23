import React from "react";
import slovakia from "../../img/slovakia_img.jpg";
import czechia from "../../img/czechia_img.jpg";
import "../pages.css";

function FirstPage() {
  return (
    <div className="body">
      <div className="flags">
        <div className="flag">
          <a href="https://doprava-oprava.jednoduse.cz/">
            <img alt="SVK" src={slovakia} />
          </a>
        </div>
        <div className="flag">
          <a href="https://doprava-oprava.jednoduse.cz/">
            <img alt="CZECH" src={czechia} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
