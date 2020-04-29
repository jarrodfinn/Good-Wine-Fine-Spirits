import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

function Items() {
  // Setting our component's initial state
  const [items, setItems] = useState([]);
  // const [formObject, setFormObject] = useState({});

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

  // Handles updating component state when the user types into the input field
  // function handleInputChange(event) {
  //   const { name, value } = event.target;
  //   setFormObject({ ...formObject, [name]: value });
  // }

  // When the form is submitted, use the API.saveitem method to save the item data
  // Then reload items from the database
  // function handleFormSubmit(event) {
  //   event.preventDefault();
  //   console.log(formObject);
  //   if (formObject.name && formObject.category) {
  //     API.saveItem({
  //       name: formObject.name,
  //       category: formObject.category,
  //       varietal: formObject.varietal,
  //       origin: formObject.origin,
  //       country: formObject.country,
  //       region: formObject.region,
  //       price: formObject.price,
  //       inventory: formObject.inventory,
  //       description: formObject.description,
  //       date: formObject.date,
  //     })
  //       .then(res => loadItems())
  //     console.log(formObject.name);
  //       // .catch((err) => console.log(err));
  //   }
  // }

  return (
    <Container fluid>
      <Row>
          <Col size='md-1'></Col> 
          <Col size="md-10 sm-12">
            <Jumbotron>
              <h1>Wines in Inventory</h1>
            </Jumbotron>
            {items.length ? (
              <List>
                {items.map((item) => (
                  <ListItem key={item._id}>
                    <Link to={"/items/" + item._id}>
                      <strong>
                        {item.name} - {item.varietal} - ${item.price}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteItem(item._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
          <Col size='md-1'></Col>
      </Row>
    </Container>
  );
}

export default Items;