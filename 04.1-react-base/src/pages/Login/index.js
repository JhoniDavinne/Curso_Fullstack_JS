import React from "react";

import { Container } from "../../styles/GlobalStyles";
import { Title, Paragraph } from "./styled";
export default function Login() {
  return (
    <Container>
      <Title isRed={false}>
        Login <small>page</small>
      </Title>
      <Paragraph>This is the login page</Paragraph>
      <button type="button">Enviar</button>
    </Container>
  );
}
