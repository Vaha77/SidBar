import React, { Component } from "react";
import { Menu, TextWreppr } from "../sidebar/sidbar";
import { Container, Navbar, Conteinor, Elon } from "./navbar";
import elon from "./img/elon.svg";
import sorch from "./img/search.svg";
import Body from "../body/Bodstyle";

export default class navbar extends Component {
  render() {
    return (
      <Container>
        <Navbar>
          <Conteinor>
            <Menu src={sorch} />
            <TextWreppr>Global search</TextWreppr>
            <Elon src={elon} />
          </Conteinor>
        </Navbar>
        {this.state.isActive === "dosh" && <Body />}
        {this.state.isActive === "email" && <Body />}
        {this.state.isActive === "chat" && <Body />}
        {this.state.isActive === "set" && <Body />}
      </Container>
    );
  }
}
