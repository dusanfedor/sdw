import React from "react";
import slovakia from "../../img/slovakia_img.jpg";
import "../pages.css";

function FirstPage() {
  return (
    <div className="body">
      <div className="firstPageTitle">
        <div className="flag">
          <a href="https://doprava-oprava.jednoduse.cz/">
            <img alt="SVK" src={slovakia} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
