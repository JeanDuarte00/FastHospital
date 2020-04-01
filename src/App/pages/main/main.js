import React, { Component } from "react";
import { Container, Menu, Icon } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../home/home";
import Manual from "../manual/manual";

import "./main.css";

class Main extends Component {
  state = { activePage: "" };
  render() {
    const { activePage } = this.state;
    return (
      <Container>
        <Router>
          <Menu>
            <Link to="/">
              <Menu.Item
                name="inicio"
                active={activePage === "inicio"}
                onClick={this.handleItemClick}
              >
                <Icon name="home" />
              </Menu.Item>
            </Link>
            <Link to="/manual">
              <Menu.Item
                name="manual"
                active={activePage === "manual"}
                onClick={this.handleItemClick}
              >
                Manual
              </Menu.Item>
            </Link>
          </Menu>
          <Route exact path="/" component={Home} />
          <Route path="/manual" component={Manual} />
        </Router>
      </Container>
    );
  }
}

export default Main;
