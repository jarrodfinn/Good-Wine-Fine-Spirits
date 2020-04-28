import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Items from "./pages/Items";
import Detail from "./pages/Detail";
import Create from "./pages/Create";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/"]}>
            <Home />
          </Route>
          <Route exact path={["/items"]}>
            <Items />
          </Route>
          <Route exact path="/items/:id">
            <Detail />
          </Route>
          <Route exact path={["/", "/create"]}>
            <Create />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
