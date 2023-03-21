import React, { useEffect, useState } from "react";
import "./style.css";
import { Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  ADD_DATA,
  DELETE,
  REMOVE_DATA,
} from "../../React-redux/Menu-actions/menuaction";
import Navbar from "../Header/Navbar";

const MenuDetails = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const getdata = useSelector((state) => state.cart.carts);
  const history = useNavigate();
  const dispatch = useDispatch();
  //send data to the cart
  const send = (e) => {
    dispatch(ADD_DATA(e));
  };

  // remove item from cart
  const dlt = (id) => {
    dispatch(DELETE(id));
    history("/menu/:id");
  };

  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id;
    });
    setData(comparedata);
  };
  useEffect(() => {
    compare();
  }, [id]);
  const remove = (item) => {
    dispatch(REMOVE_DATA(item));
  };

  return (
    <div className="cart_details">
      <Navbar></Navbar>

      <div className="container mt-2">
        <h2 className="text-center">Food Details Page</h2>
        <br />
        <section className="container mt-3">
          <div className="iteamsdetails">
            <>
              {data.map((ele) => {
                return (
                  <>
                    <div className="details">
                      <Table>
                        <tr>
                          <td>
                            <p>
                              {" "}
                              <strong>Food Name</strong> : {ele.title}
                            </p>
                            <p>
                              {" "}
                              <strong>Price</strong> :₹{ele.price}
                            </p>

                            <p>
                              {" "}
                              <strong>Total</strong> :₹ {ele.price * ele.qnty}
                            </p>
                          </td>
                          <td>
                            <p>
                              <strong>Rating :</strong>{" "}
                              <span
                                style={{
                                  background: "green",
                                  color: "#fff",
                                  padding: "2px 5px",
                                  borderRadius: "5px",
                                }}
                              >
                                {ele.rating}{" "}
                              </span>
                            </p>

                            <p>
                              <strong>Remove :</strong>{" "}
                              <span>
                                <i
                                  className="fas fa-trash"
                                  onClick={() => dlt(ele.id)}
                                  style={{
                                    color: "red",
                                    fontSize: 20,
                                    cursor: "pointer",
                                  }}
                                ></i>{" "}
                              </span>
                              <div
                                className="mt-5 d-flex justify-content-between align-items-center"
                                style={{
                                  width: 100,
                                  cursor: "pointer",
                                  background: "#ddd",
                                  color: "#111",
                                }}
                              >
                                <span
                                  className="px-2"
                                  style={{ fontSize: 24, border: "solid" }}
                                  onClick={
                                    ele.qnty <= 1
                                      ? () => dlt(ele.id)
                                      : () => remove(ele)
                                  }
                                >
                                  -
                                </span>
                                <span style={{ fontSize: 22 }}>{ele.qnty}</span>
                                <span
                                  className="px-2"
                                  style={{ fontSize: 24, border: "solid" }}
                                  onClick={() => send(ele)}
                                >
                                  +
                                </span>
                              </div>
                            </p>
                          </td>
                        </tr>
                      </Table>
                    </div>
                    <div className="items_img">
                      <img src={ele.img} alt="" />
                    </div>
                  </>
                );
              })}
            </>
          </div>
        </section>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default MenuDetails;
