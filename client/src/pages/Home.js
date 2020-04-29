import React from "react";
import Jumbotron from "../components/Jumbotron";
import "./style.css"



function Home() {
    return (
      <div>
        <Jumbotron>
          <h1>Welcome to the Thunderdome!!!</h1>
        </Jumbotron>
        <h2>You've hit the home page,</h2>
        <h3>
          Alex <del>is gonna</del> put some ill photos here!
        </h3>
        <h3>
          This will be styled better late, probably in a component. But it
          works!
        </h3>
        {/* <img src={require("../images/minamesacabsauv.webp")} />
        <img src={require("../images/buttercreamchardonnay.webp")} />
        <img src={require("../images/carsonridgecabsauv.webp")} />
        <img src={require("../images/governersbaysauvblanc.webp")} />
        <img src={require("../images/MASCOTAVINEYARDSUNANIME.webp")} /> */}
        <img
          src={require("../images/benoit.jpg")}
          className="wine-image"
          alt="wine"
        />
        <img
          src={require("../images/bichi.jpg")}
          className="wine-image"
          alt="wine"
        />
        <img
          src={require("../images/borgo.jpg")}
          className="wine-image"
          alt="wine"
        />
        <img
          src={require("../images/douro.jpg")}
          className="wine-image"
          alt="wine"
        />
        <img
          src={require("../images/enderle.jpg")}
          className="wine-image"
          alt="wine"
        />
        <img
          src={require("../images/escandalo.jpg")}
          className="wine-image"
          alt="wine"
        />
        <img
          src={require("../images/gandines.jpg")}
          className="wine-image"
          alt="wine"
        />
        <img
          src={require("../images/grolet.jpg")}
          className="wine-image"
          alt="wine"
        />
        <img
          src={require("../images/guimaro.jpg")}
          className="wine-image"
          alt="wine"
        />
        <img
          src={require("../images/montozzi.jpg")}
          className="wine-image"
          alt="wine"
        />
        <img
          src={require("../images/nerantzi.jpg")}
          className="wine-image"
          alt="wine"
        />
        <img
          src={require("../images/piollot.jpg")}
          className="wine-image"
          alt="wine"
        />
        <img
          src={require("../images/serata.jpg")}
          className="wine-image"
          alt="wine"
        />
        <img
          src={require("../images/siete.jpg")}
          className="wine-image"
          alt="wine"
        />
        <img
          src={require("../images/subliminal.jpg")}
          className="wine-image"
          alt="wine"
        />
      </div>
    );
}
export default Home;