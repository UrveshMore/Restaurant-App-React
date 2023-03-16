import React, { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
const Footer = () => {
  const data = useSelector((state) => state.restaurant.restaurants);
  console.log("sdasd", data);
  // const loadData = () => {
  //   axios
  //     .post("http://localhost:3001/restaurantList/restaurants", {
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Origin": "*",
  //         "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  //       },
  //     })
  //     .then((response) => console.log("main dddata", response.data));
  // };
  // useEffect(() => {
  //   loadData();
  // });
  return (
    <div bgColor="light" className="text-center text-lg-left">
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(223, 152, 72, 0.845)" }}
      >
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a className="text-dark" href="/">
          GoFood
        </a>
      </div>
    </div>
  );
};

export default Footer;
