import React, { useState, useEffect } from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { ADD_DATA } from "../../React-redux/Menu-actions/menuaction";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";

const Menu = () => {
  const [mdata, setMData] = useState([]);
  const [search, setSearch] = useState("");
  const { id } = useParams();
  const getdata = useSelector((state) => state.restaurant.restaurants);

  //fetch food menu from api

  const compare = () => {
    let comparedata = getdata.map((eve) => {
      return eve.filter((e) => {
        return e._id == id;
      });
    });

    setMData(comparedata);
  };
  useEffect(() => {
    compare();
  }, [id]);

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
                {alldata.map((eve) => {
                  return eve.foodList
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
                        <div className="col-sm-6 col-md-6 col-lg-6" key={index}>
                          <div className="food-card food-card--vertical">
                            <div className="food-card_img">
                              <img src={eve.img} alt="" />
                              <i className="fa fa-heart"></i>
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
                                    <span className="fa fa-fire"></span>{" "}
                                    {eve.cal} Kcal
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
                    });
                })}
              </div>
            </section>
          </>
        );
      })}
      <Footer></Footer>
    </>
  );
};

export default Menu;
