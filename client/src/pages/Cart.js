import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import "./style.css";

function Cart() {
  // Setting our component's initial state
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

  // Deletes a item from the database with a given id, then reloads items from the db
  function deleteItem(id) {
    API.deleteItem(id)
      .then((res) => loadItems())
      .catch((err) => console.log(err));
  }
  return (
    <Container fluid>
          <Jumbotron>
            <h1>Cart</h1>
          </Jumbotron>
    </Container>
  );
}

export default Cart;