import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import "./style.css";
import FavoriteBtn from "../components/FavoriteBtn";

function Items() {
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

  function favoriteItem(id) {
    API.favorite(id)
      .then((res) => loadItems())
      .catch((err) => console.log(err));
  }

  return (
    <Container fluid>
      <Row>
        <Col size="md-1"></Col>
        <Col size="md-10 sm-12">
          <Jumbotron>
            <p className="jumboTitle" style={{ marginLeft: "320px" }}>
              <h1>Current Inventory: </h1>
            </p>
          </Jumbotron>
          
          {items.length ? (
            <List>
              {items.map((item) => (
                <ListItem key={item._id}>
                  <Link to={"/items/" + item._id}>
                    <em
                      style={{
                        color: "lightsalmon",
                        fontSize: "20px",
                        textDecoration: "underline",
                      }}
                    >
                      {item.name} - {item.varietal} - ${item.price}
                    </em>
                  </Link>
                  <div>
                    <FavoriteBtn onClick={() => favoriteItem(item._id)} />
                  </div>
                  <div>
                    <DeleteBtn onClick={() => deleteItem(item._id)} />
                  </div>
                </ListItem>
              ))}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </Col>
        <Col size="md-1"></Col>
      </Row>
    </Container>
  );
}

export default Items;
