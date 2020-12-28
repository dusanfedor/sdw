import React, { useState } from "react";

import facebook from "../../img/facebook_img.jpg";
import tic from "../../img/tic_img.jpg";
import game from "../../img/game_img.jpg";
import avakin from "../../img/avakin_img.jpg";
import roblox from "../../img/roblox_img.jpg";
import youtube from "../../img/youtube_img.jpg";

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
          <button onClick={() => writeLang("Roblox")}>
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

        <div className="result" hidden={jurko ? false : true}>
          {jurko}
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
