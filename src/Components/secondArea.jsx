import React from "react";
import SecondImage from "../../public/secondImage.png";
import { Container, Row, Col } from "react-bootstrap";
import { Image } from "react-bootstrap";

function SecondArea() {
  return (
    <Row xs={1} md={1} lg={2} style={{ backgroundColor: "#f5f5f5" }}>
      <Col>
        <Container fluid style={{ marginTop: "10%" }}>
          <Image src={SecondImage} fluid />
        </Container>
      </Col>
      <Col style={{ padding: "3% 5% 9% 15%" }}>
        <h1>
          <b>Welcome to Dwidasa Samsara Indonesia (DSI)</b>
        </h1>
        <p>
          Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by the
          founders, who each of them has a common end objective to innovate new
          creations by making the most of the ever-growing information
          technology through DSI’s distinct front-end based application concept.
          Managed by a team of professional experts with extensive experience
          and impressive track records, DSI believes that continuous
          improvements and innovations assure your business to run effectively
          and efficiently.
        </p>
      </Col>
    </Row>
  );
}

export default SecondArea;
