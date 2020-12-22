import React, { useState } from "react";
import "../pages.css";

function SecondPage() {
  const [myColor, setMyColor] = useState("black");

  const setRandomColor = () => {
    const randomColor = "#" + (((1 << 24) * Math.random()) | 0).toString(16);
    setMyColor(randomColor);
  };

  return (
    <div className="body1" style={{ color: myColor }}>
      <h1>"Bezradnost a nespokojenost jsou prvním předpoklady k pokroku"</h1>
      <button1 onClick={setRandomColor}>Change Color</button1>
      <div className="container">
        <div className="row">
          <nav className="col-md-auto navbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://doprava-oprava.jednoduse.cz/"
                >
                  Stehovani
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://angel-wings19.webnode.cz">
                  Whisky
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://doprava-oprava.cz/?preview_id=233&preview_nonce=21ef8c292f&_thumbnail_id=-1&preview=true"
                >
                  Green Planet
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://stehovaci-prace9.webnode.cz"
                >
                  Stehovaci prace
                </a>
              </li>
            </ul>
          </nav>
          <div className="col contentText">
            React spatřil světlo světa v květnu 2013. Opensourcoval ho Facebook,
            který ho už několik let před tím sám interně používal a vylepšoval.
            Prvotní vydání se však dočkalo velkého výsměchu. Odezva byla tak
            špatná, že Facebook chvíli uvažoval i o jeho stáhnutí. Terčem
            kritiky se stalo především míchání "HTML a programování". Podobné
            obavy nedávno vyjádřili i někteří prominentní čeští webaři. Postupně
            se však ukázalo, že došlo k pouze nepochopení základního konceptu a
            nejen FE vývojáři si začli rychle osvojovat a užívat nové
            fundamenty, které React přinesl.
          </div>
        </div>
        <h2>
          <a href="https://angel-wings19.webnode.cz/">Whisky</a>
        </h2>
        <h3>
          <a href="https://doprava-a-oprava-sro.business.site/?utm_source=gmb&utm_medium=referral">
            MY Business
          </a>
        </h3>
        <h4>
          <a href="https://doprava-oprava.cz/?preview_id=233&preview_nonce=21ef8c292f&_thumbnail_id=-1&preview=true">
            GreenPlanet
          </a>
        </h4>
        <h5>
          <a href="https://stehovaci-prace9.webnode.cz/">Stehovaci prace</a>
        </h5>
      </div>
      <h1>COPYRIGHT ©company</h1>
    </div>
  );
}

export default SecondPage;
