import React, { useState } from "react";
import slovakia from "../../img/slovakia_img.jpg";
import czechia from "../../img/czechia_img.jpg";
import polsko from "../../img/polsko_img.jpg";
import madarsko from "../../img/madarsko_img.jpg";
import rakusko from "../../img/rakusko_img.jpg";
import "../pages.css";

function FirstPage() {
  const [jurko, setJurko] = useState(null);

  const writeLang = (language) => {
    setJurko(language);
  };

  return (
    <div className="body">
      <div className="flags">
        <div className="flag">
          <button onClick={() => writeLang("Slovakia")}>
            <img alt="SVK" src={slovakia} />
          </button>
        </div>
        <div className="flag">
          <button onClick={() => writeLang("Czechia")}>
            <img alt="CZECH" src={czechia} />
          </button>
        </div>
        <div className="flag">
          <button onClick={() => writeLang("Poland")}>
            <img alt="polsko" src={polsko} />
          </button>
        </div>
        <div className="flag">
          <button onClick={() => writeLang("Hungary")}>
            <img alt="madarsko" src={madarsko} />
          </button>
        </div>
        <div className="flag">
          <button onClick={() => writeLang("Austria")}>
            <img alt="rakusko" src={rakusko} />
          </button>
        </div>
      </div>
      <div className="result" hidden={jurko ? false : true}>
        {jurko}
      </div>
    </div>
  );
}

export default FirstPage;
