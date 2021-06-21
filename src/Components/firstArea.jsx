import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import MainImage from "../../public/mainImage.png";
import { Image } from "react-bootstrap";
import { Button } from "react-bootstrap";

function firstArea() {
  return (
    <Row xs={1} md={1} lg={2}>
      <Col style={{ padding: "3% 5% 9% 15%" }}>
        <h1>
          <b>
            Making the most of evergrowing
            <br />
            <h1 style={{ color: "red" }}>Information Technology</h1>
          </b>
        </h1>
        <p>
          Managed by a team of professional experts with extensive experience
          and impressive track records.
        </p>
        <Button variant="danger">Read More</Button>
      </Col>
      <Col>
        <Container fluid style={{ marginBottom: "50px" }}>
          <Image src={MainImage} fluid />
        </Container>
      </Col>
    </Row>
  );
}

export default firstArea;
