import Carousel from "react-bootstrap/Carousel";

import "./style.css";
import React, { Component } from "react";
import Restaurants from "./Restaurants";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";

class Home extends Component {
  render() {
    return (
      <>
        <Navbar></Navbar>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="images/simg01.jpg"
              alt="First slide"
            />
            <Carousel.Caption>Hello</Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="images/simg02.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>Hello</Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 "
              src="images/simg03.jpg"
              alt="Third slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Restaurants></Restaurants>
        <Footer></Footer>
      </>
    );
  }
}

export default Home;
