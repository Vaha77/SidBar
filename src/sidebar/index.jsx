import React, { Component } from "react";
import { Container, Sidbar, SidbarImg, Title, TitleWrapper } from "./sidbar.js";
import Avtar from "./img/sidbar.svg";
import { Navbar } from "./navbar.js";
export default class index extends Component {
  render() {
    return (
      <Container>
        <Sidbar>
          <Title>SaaS Kit</Title>
          <hr />
          <TitleWrapper>
            <SidbarImg src={Avtar} />
          </TitleWrapper>
        </Sidbar>
        <Navbar></Navbar>
      </Container>
    );
  }
}
