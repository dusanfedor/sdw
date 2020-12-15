import React from "react";
import "../pages.css";

function FirstPage() {
  return (
    <div className="body">
      <div className="firstPageTitle">
        <h1>Snílek</h1>
      </div>
      <div className="container">
        <h2>Snílek</h2>
        <div className="blackText">
          <div className="col">
            Snílek je člověk, co pořád sní, třeba o cestách na jiné planety,
            velkých dobrodružných výpravách a tak podobně. Ostatní lidé ho často
            považují za podivína, a když už vidí nějakou opravdu nadpřirozenou
            věc, jako třeba mimozemšťana, ostatní lidé mu beztak nevěří, jelikož
            ho dobře znají.
          </div>
          <div className="col">
            <img
              alt="abc"
              src="https://cdn.pixabay.com/photo/2020/04/05/21/32/galaxy-5007779_960_720.jpg"
              width="1000px"
              height="1000px"
            />
          </div>
          <h3>Důvěra</h3>
        </div>
        <div className="row silverText">
          <div className="col">
            Důvěra je ochota jedné osoby spoléhat se na jinou osobu, takové své
            vlastnosti, které si člověk cení.
          </div>
          <div className="col">
            <img
              alt="abc"
              src="https://citatem.cz/wp-content/uploads/2016/02/duvera-sklo.jpg"
              width="1000px"
              height="1000px"
            />
          </div>
          <h4>AL CAPONE</h4>
        </div>
        <div className="row pinkText">
          <div className="col">
            Neměli bychom si dovolit žádný kategorický nebo ohraničující názor,
            nic takového jako "baroko mě nezajímá" nebo "modernímu umění
            nerozumím". Měli bychom si všude nechat otevřené dveře, kterékoliv
            dílo pustit do duše, o nic se nepřipravovat a neokrádat. Každá
            informace, každý nový pohled na obraz, každá asociace, která přitom
            vznikne, je vláknem, které nás s uměním spojuje. Hezkym slovem
            dosáhnete hodně, no hezkým slovem a s pistoli v ruce dosáhnete o
            hodně víc .
          </div>
          <div className="col">
            <img
              alt="abc"
              src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Al_Capone_in_1929.jpg"
              width="1000px"
              height="1500px"
            />
          </div>
          <h5>Učitel</h5>
        </div>
        <div className="row greenText">
          <div className="col">
            Čím se liší člověk chytrý od hloupého? Učitel zavedl žáka k vysokému
            kopci, na jehož svahu leželo množství kamenů různé velikosti. Učitel
            nařídil žákovi, aby všechny kameny vynesl na vrchol kopce. Kamenů
            bylo opravdu hodně a žák se s nimi dřel celý den. Žák byl velmi
            unaven, ale se západem slunce byl se svou prací hotov – přetahal na
            kopec všechny kameny. Přišel k Učiteli naplněn hrdostí nad dobře
            splněným úkolem a ptal se: – Mohu teď, Mistře, znát odpověď na svou
            otázku? – Ne, — zavrtěl Učitel hlavou, — ještě nejsi hotov. – Tak
            proč jsem měl tahat všechny ty kameny? – durdil se žák. – To je ono,
            — zvedl Učitel ukazováček, — moudrý člověk by se nejdřív právě
            takhle zeptal, než by je začal tahat nahoru.
          </div>
          <div className="col">
            <video
              src="https://www.youtube.com/watch?v=5dWeeUIZFgA.mp4"
              controls
              width="640"
              height="360"
            ></video>
          </div>
          <h6>Záver</h6>
        </div>
        <div className="row redText">
          <div className="col">Moje první stránka</div>
          <div className="col">
            <img
              alt="abc"
              src="https://image.freepik.com/free-vector/goodbye-moving-hand-lettering-background_23-2147958751.jpg"
              width="500px"
              height="500px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
