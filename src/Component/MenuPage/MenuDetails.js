import React, { useEffect, useState } from "react";
import "./style.css";
import { Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ADD, DLT, REMOVE } from "../../redux/actions/action";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
const MenuDetails = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const getdata = useSelector((state) => state.cartreducer.carts);
  const history = useNavigate();
  const dispatch = useDispatch();
  //send data to the cart
  const send = (e) => {
    dispatch(ADD(e));
  };

  // remove item from cart
  const dlt = (id) => {
    dispatch(DLT(id));
    history("/menu");
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
    dispatch(REMOVE(item));
  };

  return (
    <div className="cart_details">
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-success position-sticky"
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
              <li className="nav-item">
                <Link
                  className="nav-link fs-5 mx-3 active"
                  aria-current="page"
                  to="/menu"
                >
                  menu
                </Link>{" "}
              </li>
            </ul>
            <div>
              <div className="btn bg-white text-success mx-2 ">
                My Cart {""}
                <Badge pill bg="danger" id="basic-button">
                  {getdata.length}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="container mt-2">
        <h2 className="text-center">Iteams Details Page</h2>

        <section className="container mt-3">
          <div className="iteamsdetails">
            <>
              {data.map((ele) => {
                return (
                  <>
                    <div className="items_img">
                      <img src={ele.img} alt="" />
                    </div>

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
                                style={{ fontSize: 24 }}
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
                                style={{ fontSize: 24 }}
                                onClick={() => send(ele)}
                              >
                                +
                              </span>
                            </div>
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
                            </p>
                          </td>
                        </tr>
                      </Table>
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
