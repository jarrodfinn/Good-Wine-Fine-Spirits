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
      {
        items.map( (item) => {
          return(
              <Link to={'/items/' + item._id }>
              <img
                src={item.photo && require("../images/" + item.photo + ".jpg")}
                className="wine-image"
                alt={item.name}
              />
              </Link>  
          )
      })
      }
      </Row>
    </Container>
  );
}
export default Home;
