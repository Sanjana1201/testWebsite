import React from "react";
import CardData from "../CardData";
import { Container, Row, Col } from "react-bootstrap";
import CardImage1 from "../images/Card1.png";
import CardImage2 from "../images/Card2.png";
import CardImage3 from "../images/Card3.png";
import { Button } from "react-bootstrap";

var count = 0;

function renderCard(CardArray) {
  count++;
  
  return (
    <>
      <Col style={{ margin: "10% 0%" }}>
      {count === 1? <img
          src={CardImage1}
          alt=""
          style={{ width: "40%" }}
        />: null }
        {count === 2? <img
          src={CardImage2}
          alt=""
          style={{ width: "40%" }}
        />:null }
        {count === 3? <img
          src={CardImage3}
          alt=""
          style={{ width: "40%" }}
        />:null }
        
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
