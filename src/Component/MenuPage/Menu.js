import axios from "axios";
import "./style.css";
import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import { useDispatch } from "react-redux";
import { ADD_DATA } from "../../React-redux/Menu-actions/menuaction";
import { useNavigate, useParams } from "react-router-dom";
import { connect, useSelector } from "react-redux";

const Menu = () => {
  const [menuData, setMenuData] = useState([]);
  const [mdata, setMData] = useState([]);
  const [search, setSearch] = useState("");
  const { id } = useParams();
  const getdata = useSelector((state) => state.restaurant.restaurants);
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
  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id;
    });
    setMData(comparedata);
  };
  useEffect(() => {
    compare();
  }, [id]);
  const foodList = mdata.map((event) => {
    return event.foodList;
  });
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
      {mdata.map((alldata) => {
        return (
          <>
            {" "}
            <section className="item_section mt-4 container text-center">
              <div className="row mt-2 d-flex justify-content-between align-item-center">
                {alldata.foodList
                  .filter((val) => {
                    if (search === "") {
                      return val;
                    } else if (
                      val.title.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .map((eve) => {
                    return (
                      <div className="col-sm-6 col-md-6 col-lg-6">
                        <div className="food-card food-card--vertical">
                          <div className="food-card_img">
                            <img src={eve.img} alt="" />
                            <a href="#!">
                              <i className="fa fa-heart"></i>
                            </a>
                          </div>
                          <div className="food-card_content">
                            <div className="food-card_title-section">
                              <span className="food-card_title d-flex">
                                {eve.title}
                              </span>{" "}
                              <span
                                className="mx-2 "
                                style={{
                                  background: "green",
                                  color: "#fff",
                                  padding: "2px 5px",
                                  borderRadius: "5px",
                                }}
                              >
                                {eve.rating} ★
                              </span>
                            </div>

                            <div className="food-card_bottom-section">
                              <div className="space-between">
                                <div>
                                  <span className="fa fa-fire"></span> {eve.cal}{" "}
                                  Kcal
                                </div>
                                <div className="pull-right">
                                  <span className="badge badge-success">
                                    Veg
                                  </span>
                                </div>
                              </div>
                              <hr />
                              <div className="space-between">
                                <div className="food-card_price">
                                  <span>₹{eve.price}/-</span>
                                </div>
                                <div className="food-card_order-count">
                                  <div className="input-group mb-3 mx-5">
                                    <div className="input-group-prepend">
                                      <button
                                        className="btn btn-outline-secondary minus-btn"
                                        type="button"
                                        id="button-addon1"
                                        onClick={() => send(eve)}
                                      >
                                        Add to cart
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </section>
          </>
        );
      })}
    </>
  );
};

export default Menu;
