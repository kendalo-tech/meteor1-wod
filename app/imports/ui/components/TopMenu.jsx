import React from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import { Instagram } from 'react-bootstrap-icons';

const TopMenu = () => (
  <Navbar expand="lg">
    <Container>
      <div className="justify-content-start">
        <Navbar.Brand id="coloring"><Instagram /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      </div>

      <div className="justify-content-center">
        <Navbar className="navbar-expand d-block">
          <img
            id="toplogo"
            src="https://courses.ics.hawaii.edu/ics314s23/morea/ui-frameworks/wod-boardroom-logo.png"
            width="70px"
            alt="logo"
          />
        </Navbar>
      </div>

      <div className="justify-content-end">
        <Button className="btn-dark">
          Menu
        </Button>
      </div>

    </Container>
  </Navbar>
);

export default TopMenu;
