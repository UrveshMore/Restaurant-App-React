import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Cards from "./Home-Page/Cards";
import axios from "axios";

import Navbar from "./Navbar";

import "./style.css";
import Menu from "./MenuPage/Menu";

const Home = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [foodList, setFoodList] = useState([]);

  const loadData = (e) => {
    axios.get("http://localhost:3003/menu").then((res) => {
      setFoodList(res.data);
    });

    axios
      .get("http://localhost:3003/restaurant")
      .then((res) => setRestaurantList(res.data));
  };

  useEffect((e) => {
    loadData();
  }, []);

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
          <Carousel.Caption>
            <h3>res01</h3>
            <h1>Nashik</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="images/simg02.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>res02</h3>
            <h1>Pune</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="images/simg03.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>res03</h3>
            <h1>Mumbai</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div>
        {restaurantList !== []
          ? restaurantList.map((data) => {
              return (
                <div>
                  {foodList !== [] ? (
                    foodList
                      .filter((menu) => menu.rname === "Sai chinese")
                      .map((filterMenu) => {
                        return (
                          <div key={filterMenu.id} className="">
                            {console.log(filterMenu.name)}

                            {/* <Menu01 foodItem={filterMenu}></Menu01> */}
                            {/* <Menu01 foodItem={filterMenu} /> */}
                          </div>
                        );
                      })
                  ) : (
                    <div>No such Data found</div>
                  )}
                </div>
              );
            })
          : ""}
      </div>
      <Cards></Cards>
    </>
  );
};

export default Home;
