import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Menu from "@mui/material/Menu";
import Table from "react-bootstrap/esm/Table";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { DELETE } from "../React-redux/Menu-actions/menuaction";

export default function Navbar(props) {
  const [price, setPrice] = useState(0);
  const getdata = useSelector((state) => state.cartreducer.carts);
  const history = useNavigate();
  const dispatch = useDispatch();
  const dlt = (id) => {
    dispatch(DELETE(id));
  };

  //for cart
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //total price
  const total = () => {
    let price = 0;
    getdata.map((ele, k) => {
      price = ele.price * ele.qnty + price;
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);
  const handleOrder = () => {
    history("/");
    alert("Your order placed successfully");
  };
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bgColor position-sticky"
        style={{
          boxShadow: "0px 10px 20px black",
          filter: "blur(20)",
          position: "fixed",
          zIndex: "10",
          width: "100%",
        }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">
            GoFood<span>🍕</span>
            {"  "}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link fs-5 mx-3 active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>{" "}
              </li>
            </ul>
            <div>
              <div
                className="btn bg-white text-success mx-2 "
                onClick={handleClick}
              >
                My Cart {""}
                <Badge
                  pill
                  bg="danger"
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  {getdata.length}
                </Badge>
              </div>
            </div>
            <Menu
              className="navCartMenu"
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {getdata.length ? (
                <div
                  className="card_details navCart"
                  style={{ width: "24rem", padding: 10 }}
                >
                  <Table>
                    <thead>
                      <tr>
                        <th>Photo</th>
                        <th>Food Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      {getdata.map((e) => {
                        return (
                          <>
                            <tr>
                              <td>
                                <Link
                                  to={`/menuDetails/${e.id}`}
                                  onClick={handleClose}
                                >
                                  <img
                                    src={e.img}
                                    style={{ width: "5rem", height: "5rem" }}
                                    alt=""
                                  />
                                </Link>
                              </td>
                              <td>
                                <p>{e.rname}</p>
                                <p>Price : ₹{e.price}</p>
                                <p>Quantity : {e.qnty}</p>
                                <p
                                  style={{
                                    color: "red",
                                    fontSize: 20,
                                    cursor: "pointer",
                                  }}
                                  onClick={() => dlt(e.id)}
                                >
                                  <i className="fas fa-trash smalltrash"></i>
                                </p>
                              </td>

                              <td
                                className="mt-5"
                                style={{
                                  color: "red",
                                  fontSize: 20,
                                  cursor: "pointer",
                                }}
                                onClick={() => dlt(e.id)}
                              >
                                <i className="fas fa-trash largetrash"></i>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                      <p className="text-center">Total :₹ {price}</p>
                    </tbody>
                    <div className="text-center ">
                      <button
                        className="order bg bg-warning mx-5"
                        onClick={handleOrder}
                      >
                        Place Order
                      </button>
                    </div>
                  </Table>
                </div>
              ) : (
                <div
                  className="card_details d-flex justify-content-center align-items-center"
                  style={{ width: "24rem", padding: 10, position: "relative" }}
                >
                  <i
                    className="fas fa-close smallclose"
                    onClick={handleClose}
                    style={{
                      position: "absolute",
                      top: 2,
                      right: 20,
                      fontSize: 23,
                      cursor: "pointer",
                    }}
                  ></i>
                  <p style={{ fontSize: 22 }}>carts is empty</p>
                  <img
                    src="./cart.gif"
                    alt=""
                    className="emptycart_img"
                    style={{ width: "5rem", padding: 10 }}
                  />
                </div>
              )}
            </Menu>
          </div>
        </div>
      </nav>
    </div>
  );
}
