import React, { Component } from "react";
import {
  Container,
  Item,
  ItemText,
  ItemTextWreppee,
  ItemWrepper,
  Menu,
  Sidbar,
  SidbarImg,
  Text,
  TextWreppr,
  Title,
  TitleWrapper,
} from "./sidbar.js";
import Avtar from "./img/sidbar.svg";
import Icon from "./img/Vector.svg";
import tasks from "./img/tasks.svg";
import email from "./img/Email.svg";
import contact from "./img/contact.svg";
import chat from "./img/chat.svg";
import deals from "./img/deals.svg";
import setting from "./img/setting.svg";
import Navbar from "../navbar/navbar.jsx";
export default class index extends Component {
  state = {
    isActive: "",
  };
  render() {
    return (
      <Container>
        <Sidbar>
          <Title>SaaS Kit</Title>
          <hr />
          <TitleWrapper>
            <SidbarImg src={Avtar} />
            <Text>
              Sierra Ferguson
              <TextWreppr>s.ferguson@gmail.com</TextWreppr>
            </Text>
          </TitleWrapper>
          <Item>
            <Menu src={Icon} />
            <ItemText
              onClick={() => this.setState({ isActive: "dosh" })}
              isActive={this.state.isActive === "dosh"}
            >
              Doshbarod
            </ItemText>
          </Item>
          <Item>
            <Menu src={tasks} />
            <ItemText
              onClick={() => this.setState({ isActive: "task" })}
              isActive={this.state.isActive === "task"}
            >
              Tasks
            </ItemText>
          </Item>
          <Item>
            <Menu src={email} />
            <ItemText
              onClick={() => this.setState({ isActive: "email" })}
              isActive={this.state.isActive === "email"}
            >
              Email
            </ItemText>
          </Item>
          <Item>
            <Menu src={contact} />
            <ItemText
              onClick={() => this.setState({ isActive: "con" })}
              isActive={this.state.isActive === "con"}
            >
              Contacts
            </ItemText>
          </Item>
          <Item>
            <Menu src={chat} />
            <ItemText
              onClick={() => this.setState({ isActive: "chat" })}
              isActive={this.state.isActive === "chat"}
            >
              Chat
            </ItemText>
          </Item>
          <Item>
            <Menu src={deals} />
            <ItemText
              onClick={() => this.setState({ isActive: "deal" })}
              isActive={this.state.isActive === "deal"}
            >
              Deals
            </ItemText>
          </Item>

          <hr />
          <ItemTextWreppee>
            <Menu src={setting} />
            <ItemText
              onClick={() => this.setState({ isActive: "set" })}
              isActive={this.state.isActive === "set"}
            >
              Settings
            </ItemText>
          </ItemTextWreppee>

          <ItemWrepper>
            <Menu src={deals} />
            <TextWreppr>Togle Sidbar</TextWreppr>
          </ItemWrepper>
        </Sidbar>
        <Navbar />
      </Container>
    );
  }
}
