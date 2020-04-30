import React from "react";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";
import { Row, Container } from "../components/Grid";
import "./style.css";

function Home() {
  return (
    <Container fluid>
      <Jumbotron>
        <h1>Welcome to the Thunderdome!!!</h1>
      </Jumbotron>
      <h2>You've hit the home page,</h2>
      <h3>
        Alex <del>is gonna</del> put some ill photos here!
      </h3>
      <h3>
        This will be styled better late, probably in a component. But it works!
      </h3>
      <Row>
      <Link to="/items/5eab0fc545c1243dcc70a9df">
        <img
          src={require("../images/benoit.jpg")}
          className="wine-image"
          alt="wine"
        />
        </Link>
        <Link to="/items/5eab0fc545c1243dcc70a9e6">
        <img
          src={require("../images/bichi.jpg")}
          className="wine-image"
          alt="wine"
        />
        </Link>
        <Link to="/items/5eab0fc545c1243dcc70a9e7">
        <img
          src={require("../images/borgo.jpg")}
          className="wine-image"
          alt="wine"
        />
        </Link>
        <Link to ="/items/5eab0fc545c1243dcc70a9e0">
        <img
          src={require("../images/douro.jpg")}
          className="wine-image"
          alt="wine"
        />
        </Link>
        <Link to ="/items/5eab0fc545c1243dcc70a9dd">
        <img
          src={require("../images/enderle.jpg")}
          className="wine-image"
          alt="wine"
        />
        </Link>
        <Link to="/items/5eab0fc545c1243dcc70a9e5">
        <img
          src={require("../images/escandalo.jpg")}
          className="wine-image"
          alt="wine"
        />
        </Link>
        <Link to="/items/5eab0fc545c1243dcc70a9e3">
        <img
          src={require("../images/gandines.jpg")}
          className="wine-image"
          alt="wine"
        />
        </Link>
        <Link to ="/items/5eab0fc545c1243dcc70a9de">
        <img
          src={require("../images/grolet.jpg")}
          className="wine-image"
          alt="wine"
        />
        </Link>
        <Link to ="/items/5eab0fc545c1243dcc70a9da">
        <img
          src={require("../images/guimaro.jpg")}
          className="wine-image"
          alt="wine"
        />
        </Link>
        <Link to="/items/5eab0fc545c1243dcc70a9e8">
        <img
          src={require("../images/montozzi.jpg")}
          className="wine-image"
          alt="wine"
        />
        </Link>
        <Link to="/items/5eab0fc545c1243dcc70a9e2">
        <img
          src={require("../images/nerantzi.jpg")}
          className="wine-image"
          alt="wine"
        />
        </Link>
        <Link to="/items/5eab0fc545c1243dcc70a9e1">
        <img
          src={require("../images/piollot.jpg")}
          className="wine-image"
          alt="wine"
        />
        </Link>
        <Link to="/items/5eab0fc545c1243dcc70a9e9">
        <img
          src={require("../images/serata.jpg")}
          className="wine-image"
          alt="wine"
        />
        </Link>
        <Link to="/items/5eab0fc545c1243dcc70a9dc">
        <img
          src={require("../images/siete.jpg")}
          className="wine-image"
          alt="wine"
        />
        </Link>
        <Link to="/items/5eab0fc545c1243dcc70a9db">
        <img
          src={require("../images/subliminal.jpg")}
          className="wine-image"
          alt="wine"
        />
        </Link>
      </Row>
    </Container>
  );
}
export default Home;
