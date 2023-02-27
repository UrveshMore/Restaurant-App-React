import axios from "axios";
import "./style.css";
import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { ADD_DATA } from "../../React-redux/Menu-actions/menuaction";

const Menu = () => {
  const [menuData, setMenuData] = useState([]);
  const [search, setSearch] = useState("");

  //fetch food menu from api
  const fetchData = () => {
    axios
      .get("http://localhost:3003/menu")
      .then((res) => {
        setMenuData(res.data);
      })
      .catch((err) => alert(err));
  };
  useEffect(() => {
    fetchData();
  }, []);

  //send data to cart
  const dispatch = useDispatch();
  const send = (e) => {
    dispatch(ADD_DATA(e));
  };

  return (
    <>
      <Navbar></Navbar>
      <br />
      <div className="text-center">
        <input
          type="text"
          placeholder="Search...."
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </div>
      <section className="item_section mt-4 container text-center">
        <div className="row mt-2 d-flex justify-content-between align-item-center">
          {menuData
            .filter((val) => {
              if (search === "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(search.toLowerCase())
              ) {
                return val;
              }
            })
            .map((eve, index) => {
              return (
                <Card
                  style={{ width: "22rem", border: "none" }}
                  className="mb-4 hove"
                  key={index}
                >
                  <Card.Img variant="top" src={eve.img} className="cd" />

                  <div className="card_body my-2">
                    <div className="upper_data d-flex justify-content-between align-item-center">
                      <h4 className="mx-1" style={{ fontSize: 22 }}>
                        {eve.title}
                      </h4>
                      <h5 className="mx-1">₹ {eve.price}/-</h5>
                    </div>
                    <div className="text-center ">
                      <button
                        className="btn btn-warning mx-5"
                        onClick={() => send(eve)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </Card>
              );
            })}
        </div>
      </section>
    </>
  );
};

export default Menu;
