import Carousel from "react-bootstrap/Carousel";
import Navbar from "./Navbar";
import "./style.css";
import React, { Component } from "react";

import Cards from "./Home-Page/Cards";

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
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="images/simg02.jpg"
              alt="Second slide"
            />
            <Carousel.Caption></Carousel.Caption>
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
        <Cards></Cards>
      </>
    );
  }
}

export default Home;
