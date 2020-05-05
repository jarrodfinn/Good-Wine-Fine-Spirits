import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";
import { Row, Container } from "../components/Grid";
import API from "../utils/API";
import "./style.css";

function Home() {
  const [items, setItems] = useState([]);

  // Load all items and store them with setitems
  useEffect(() => {
    loadItems();
  }, []);

  // Loads all items and sets them to items
  function loadItems() {
    API.getItems()
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }
  return (
    <Container fluid>
      <Jumbotron>
        <p className="jumboTitle" style={{marginLeft: "390px"}}>
        <h1>Welcome to Good Wine & Fine Spirits!!!</h1>
        </p>
      </Jumbotron>
      <div className="conainer">
        <h3>
          This is your source for creating, reading, updating and deleting
          inventory.
        </h3>
      </div>
      <br />

      <Row>
        {items.map((item) => {
          return (
            <Link to={"/items/" + item._id}>
              <img
                src={item.photo && require("../images/" + item.photo + ".jpg")}
                className="wine-image"
                alt={item.name}
              />
            </Link>
          );
        })}
      </Row>
    </Container>
  );
}
export default Home;
