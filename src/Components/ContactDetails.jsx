import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../images/logo.png";
import { Image } from "react-bootstrap";
import ContactImage from "../images/Contact.png";

function ContactDetails() {
  return (
    <Row xs={1} md={1} lg={3} style={{ padding: "3% 5% 9% 15%" }}>
      <Col>
        <Image src={Logo} fluid style={{ width: "25%" }} />
        <p>
          <b>PT Dwidasa Samsara Indonesia</b>
          <br />
          Ruko Jalur Sutera 29A No. 53 <br />
          Alam Sutera Serpong, Tangerang 15323
        </p>
      </Col>
      <Col>
        <p>
          {" "}
          <b>Contact</b>
          <br />
          Phone : +62.21.5314.1135 <br />
          Fax :+62.21.5314.1135 <br />
          Email : community@dwidasa.com
        </p>
      </Col>
      <Col>
        <Image src={ContactImage} fluid />
      </Col>
    </Row>
  );
}

export default ContactDetails;
