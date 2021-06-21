import React from "react";
import CardData from "../CardData";
import { Container, Row, Col } from "react-bootstrap";
import CardImage1 from "../../public/Card1.png";
import CardImage2 from "../../public/Card2.png";
import CardImage3 from "../../public/Card3.png";
import { Button } from "react-bootstrap";

function renderCard(CardArray) {
  return (
    <>
      <Col style={{ margin: "10% 0%" }}>
        <img
          src={require(`../../public/Card${CardArray.key}.png`)}
          alt=""
          style={{ width: "40%" }}
        />
        <h1>{CardArray.title}</h1>
        <p>{CardArray.content}</p>
        <Button variant="danger">Read More</Button>
      </Col>
    </>
  );
}

function Card() {
  return (
    <>
      <Row xs={1} md={1} lg={3} style={{ padding: "3% 5% 3% 15%" }}>
        {CardData.map(renderCard)}
      </Row>
    </>
  );
}

export default Card;
