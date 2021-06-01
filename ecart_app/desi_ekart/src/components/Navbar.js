import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <BrowserRouter>
          <Link to="/">
            <img src={logo} alt="home" />
          </Link>
        <BrowserRouter>
      </nav>
    );
  }
}
