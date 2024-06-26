import React from "react";
import Header from "./Header";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export default (props) => {
  return (
    <Container style={{ marginTop: "50px" }}>
      <Header />
      {props.children}
    </Container>
  );
};
