import logo from "./logo.svg";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Details from "./components/Details";
import Default from "./components/Default";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <BrowserRouter>
          <Switch>
            <Route path="/details" component={Details} />
            <Route exact path="/" component={ProductList} /> 
            <Route path="/cart" component={Cart} />
            <Route component={Default} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
export default App;
