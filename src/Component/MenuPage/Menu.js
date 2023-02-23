import axios from "axios";
import "./style.css";
import React, { useState, useEffect } from "react";
import "./style.css";
import { useDispatchCart } from "../ContextReducer";
import Navbar from "../Navbar";
import Card from "react-bootstrap/Card";
const Menu = (props) => {
  const [menuData, setMenuData] = useState([]);
  const [search, setSearch] = useState("");
  console.log(props.menuDataa);
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

  let dispatch = useDispatchCart();
  // let data = useCart();
  const [qty, setQty] = useState(1);

  const handleAddToCart = async (eve) => {
    await dispatch({
      type: "ADD",
      id: eve.id,
      name: eve.title,
      img: eve.img,
      price: finalPrice,
      qty: qty,
    });
    setQty(1);
  };
  let finalPrice =
    qty *
    parseInt(
      menuData.map((eve) => {
        return eve.price;
      })
    );

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
                      <select
                        name=""
                        className="my-1 mx-4 bg-success rounded"
                        onChange={(e) => setQty(e.target.value)}
                      >
                        {Array.from(Array(5), (e, i) => {
                          return (
                            <option key={i + 1} value={i + 1}>
                              {i + 1}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="lower_data d-flex justify-content-between align-item-center">
                      <h5 className="mx-1"> {eve.price}/-</h5>
                      <button
                        className="btn btn-success mx-2"
                        onClick={() => handleAddToCart(eve)}
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
