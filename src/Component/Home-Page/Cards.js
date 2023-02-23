import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import axios from "axios";

const Cards = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [search, setSearch] = useState([]);
  const navigate = useNavigate();

  const fetchData = () => {
    axios
      .get("http://localhost:3003/restaurant")
      .then((res) => setRestaurantData(res.data))
      .catch((err) => alert(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const goToMenu = (event) => {
    navigate("/menu");
  };
  return (
    <>
      <section className="item_section mt-4 container text-center">
        <h2 className="px-4" style={{ fontWeight: 400, fontSize: 60 }}>
          Restaurant In Pune
        </h2>
        <div>
          <input
            type="text"
            placeholder="Search...."
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        <div className="row mt-2 d-flex justify-content-between align-item-center">
          {restaurantData
            .filter((val) => {
              if (search == "") {
                return val;
              } else if (
                val.rname.toLowerCase().includes(search.toLowerCase())
              ) {
                return val;
              }
            })
            .map((event, index) => {
              return (
                <Card
                  style={{ width: "22rem", border: "none" }}
                  className="mb-4 hove"
                  onClick={goToMenu}
                  key={index}
                >
                  <Card.Img variant="top" src={event.imgdata} className="cd" />

                  <div className="card_body my-1">
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
