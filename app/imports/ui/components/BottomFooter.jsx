import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';

const BottomFooter = () => (
  <footer className="mt-auto bg-light py-3">
    <Container>
      <Row className="py-5">

        <Col>
          <Container>
            <h3>Hours</h3>
            <p>Wednesday - Thursday 5pm – 10pm <br />Friday - Saturday 5pm – 11pm <br />Sunday Brunch 10am -
              2pm
            </p>
          </Container>
        </Col>

        <Col>
          <h3>Stay Connected</h3>
          <Nav className="navbar-nav">
            <li><u>Instagram</u></li>
            <li><u>Contact</u></li>
            <li><u>Gift Cards</u></li>
            <li><u>Reservation</u></li>
          </Nav>
        </Col>

        <Col />

        <Col>
          <h3>THE BOARDROOM</h3>
          <Nav className="navbar-nav">
            <li>44 Kainehe St.</li>
            <li>Kailua, HI 96734</li>
            <br />
            <li>(808)807-5640</li>
          </Nav>
        </Col>

      </Row>
    </Container>
  </footer>

);

export default BottomFooter;
