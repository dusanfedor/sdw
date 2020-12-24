import React from "react";
import slovakia from "../../img/slovakia_img.jpg";
import czechia from "../../img/czechia_img.jpg";
import polsko from "../../img/polsko_img.jpg";
import madarsko from "../../img/madarsko_img.jpg";
import rakusko from "../../img/rakusko_img.jpg";
import "../pages.css";

function FirstPage() {
  return (
    <div className="body">
      <div className="flags">
        <div className="flag">
          <a href="https://www.mapotic.com/aktualni-stav-hranicnich-prechodu/408353-lysa-pod-makytou-strelna-hranicni-prechod?fcat=13306">
            <img alt="SVK" src={slovakia} />
          </a>
        </div>
        <div className="flag">
          <a href="https://koronavirus.mzcr.cz/">
            <img alt="CZECH" src={czechia} />
          </a>
        </div>
        <div className="flag">
          <a href="https://news.google.com/covid19/map?hl=cs&mid=%2Fm%2F05qhw&gl=CZ&ceid=CZ%3Acs">
            <img alt="polsko" src={polsko} />
          </a>
        </div>
        <div className="flag">
          <a href="https://news.google.com/covid19/map?hl=cs&mid=%2Fm%2F03gj2&gl=CZ&ceid=CZ%3Acs">
            <img alt="madarsko" src={madarsko} />
          </a>
        </div>
        <div className="flag">
          <a href="https://www.kurzy.cz/koronavirus/rakousko/">
            <img alt="rakusko" src={rakusko} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
