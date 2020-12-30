import React, { useState, useEffect } from "react";

import facebook from "../../img/facebook_img.jpg";
import tic from "../../img/tic_img.jpg";
import game from "../../img/game_img.jpg";
import avakin from "../../img/avakin_img.jpg";
import roblox from "../../img/roblox_img.jpg";
import youtube from "../../img/youtube_img.jpg";
import zepeto from "../../img/zepeto_img.jpg";
import shazam from "../../img/shazam_img.jpg";
import amongus from "../../img/amongus_img.jpg";

import "../pages.css";

function FirstPage() {
  const [jurko, setJurko] = useState(null);
  const [isDay, setIsDay] = useState(null);

  useEffect(() => {
    let d = new Date();
    if (d.getHours() > 6 && d.getHours() < 18) setIsDay(true);
    else setIsDay(false);
  }, [isDay]);

  const writeLang = (language) => {
    setJurko(language);
  };

  return (
    <div className="body">
      <div className="flags">
        <div className="flag">
          <button onClick={() => writeLang("Facebook")}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/"
            >
              <img alt="facebook" src={facebook} />
            </a>
          </button>
        </div>
        <div className="flag">
          <button onClick={() => writeLang("Tic")}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.tiktok.com/login/"
            >
              <img alt="tic" src={tic} />
            </a>
          </button>
        </div>
        <div className="flag">
          <button onClick={() => writeLang("Game")}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://avakin.com/"
            >
              <img alt="game" src={game} />
            </a>
          </button>
        </div>
        <div className="flag">
          <button onClick={() => writeLang("Avakin")}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.tiktok.com/@avakinlife_official"
            >
              <img alt="avakin" src={avakin} />
            </a>
          </button>
        </div>
        <div className="flag">
          <button onClick={() => writeLang("Avakin")}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.roblox.com/NewLogin"
            >
              <img alt="roblox" src={roblox} />
            </a>
          </button>
        </div>
        <div className="flag">
          <button onClick={() => writeLang("Youtube")}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/"
            >
              <img alt="youtube" src={youtube} />
            </a>
          </button>
        </div>
        <div className="flag">
          <button onClick={() => writeLang("Avakin")}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://studio.zepeto.me/console/auth/signin?redirect=/console"
            >
              <img alt="zepeto" src={zepeto} />
            </a>
          </button>
        </div>
        <div className="flag">
          <button onClick={() => writeLang("Avakin")}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.shazam.com/cs/myshazam"
            >
              <img alt="shazam" src={shazam} />
            </a>
          </button>
        </div>
        <div className="flag">
          <button onClick={() => writeLang("Amongus")}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.innersloth.com/index.php"
            >
              <img alt="amongus" src={amongus} />
            </a>
          </button>
        </div>
        <div className="result" hidden={jurko ? false : true}>
          {jurko}
        </div>
        <div className="result">{isDay ? "Dobrý den" : "Dobrý večer"}</div>
      </div>
    </div>
  );
}

export default FirstPage;
