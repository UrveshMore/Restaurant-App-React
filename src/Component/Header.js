import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import Nav from "react-bootstrap/Nav";
import { TiShoppingCart } from "react-icons/ti";
const Header = () => {
  return (
    <>
      <div>
        <Navbar bg="dark" variant="dark" sticky="top">
          <Container>
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            <Navbar.Brand href="#home"> Swiggy</Navbar.Brand>
            <Nav className="me-auto">
              <NavLink to="/" className="text-decoration-none nav">
                Home
              </NavLink>
              <NavLink to="/res" className="text-decoration-none nav">
                {"      "}
                Resaturant
                {"      "}
              </NavLink>
              <NavLink to="/menu" className="text-decoration-none nav">
                Menu
              </NavLink>
              <div>
                <h5 style={{ color: "white" }}>
                  {<TiShoppingCart />}{" "}
                  <Badge pill bg="danger">
                    2
                  </Badge>
                </h5>
              </div>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
