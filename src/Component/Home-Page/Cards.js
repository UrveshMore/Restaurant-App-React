import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Header from "../Header";

const Cards = (props) => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [sendList, setSendList] = useState([]);
  const uniqueList = () => {
    restaurantData.map((curElem) => {
      return curElem.rname;
    });
  };
  const [uniqueListData, setuniqueListData] = useState();
  const navigate = useNavigate();

  const fetchData = () => {
    axios
      .get("http://localhost:3003/restaurant")
      .then((res) => setRestaurantData(res.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const goToMenu = (event) => {
    // console.log(event.target.value);
    // const updatedlist = restaurantData.filter((curElem) => {
    //   return curElem.rname === event;
    // });
    // console.log(updatedlist);
    // setSendList(updatedlist);

    // props.getMenuData(restaurantData);
    navigate("/menu");
  };
  return (
    <>
      <section className="item_section mt-4 container">
        <h2 className="px-4" style={{ fontWeight: 400 }}>
          Restaurant in Pune
        </h2>
        <div className="row mt-2 d-flex justify-content-between align-item-center">
          {restaurantData.map((event, index) => {
            return (
              <Card
                style={{ width: "22rem", border: "none" }}
                className="mb-4 hove"
                onClick={goToMenu}
                key={index}
              >
                <Card.Img variant="top" src={event.imgdata} className="cd" />

                <div className="card_body">
                  <div className="upper_data d-flex justify-content-between align-item-center">
                    <h4 className="mt">{event.rname}</h4>
                    <span>{event.rating}&nbsp;★</span>
                  </div>
                  <div className="lower_data d-flex justify-content-between align-item-center">
                    <h5>{event.address}</h5>
                    <span> {event.price}</span>
                  </div>
                  <div className="extra"></div>
                  <br />
                </div>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Cards;
