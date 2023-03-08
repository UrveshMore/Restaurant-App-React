import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Navbar from "./Navbar";
import { useCart, useDispatchCart } from "./ContextReducer";
import "./style.css";
function Card0() {
  const [restaurantList, setRestaurantList] = useState([]);
  const [foodList, setFoodList] = useState([]);
  const [filterFoodList, setFilterFoodList] = useState([]);
  let dispatch = useDispatchCart();
  let data = useCart();
  const [qty, setQty] = useState(1);

  const loadData = async () => {
    let response = await fetch(
      "http://localhost:3001/restaurantList/restaurants",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      }
    );
    response = await response.json();
    // console.log("restaurant list.......", response[0]);
    setRestaurantList(response[0]);
    // console.log("menu list .........", response[1]);
    setFoodList(response[1]);
  };
  useEffect(() => {
    console.log("hwllo");
    loadData();
  }, []);

  // let finalPrice = qty * parseInt(props.foodItem.price);
  const filterItem = (rname) => {
    const updatedList = foodList.filter((curElem) => {
      return curElem.rname === rname;
    });
    console.log(updatedList);
    setFilterFoodList(updatedList);
  };

  const handleAddToCart = async (eve) => {
    await dispatch({
      type: "ADD",
      id: eve.id,
      name: eve.title,
      img: eve.img,
      price: eve.price,
      Price: finalPrice,
      qty: qty,
    });
    console.log(data);
  };
  let finalPrice =
    qty *
    parseInt(
      filterFoodList.map((eve) => {
        return eve.price;
      })
    );
  return (
    <>
      <Navbar></Navbar>
      <section className="item_section mt-4 container">
        <div className="row mt-2 d-flex justify-content-between align-item-center">
          {restaurantList.map((data, index) => {
            return (
              <Card
                style={{ width: "22rem", border: "none" }}
                className="mb-4 hove"
                onClick={() => filterItem(data.rname)}
                key={index}
              >
                <Card.Img variant="top" src={data.imgdata} className="cd" />

                <div className="card_body">
                  <div className="upper_data d-flex justify-content-between align-item-center ">
                    <h4 className="mt">{data.rname}</h4>
                    <span className="bg-success">{data.rating}&nbsp;★</span>
                  </div>
                  <div className="lower_data d-flex justify-content-between align-item-center">
                    <h5>{data.address}</h5>
                    <span> {data.price}</span>
                  </div>
                  <div className="extra"></div>
                  <br />
                </div>
              </Card>
            );
          })}
        </div>
      </section>
      <div className="text-center" style={{ fontSize: 40 }}>
        Menu List
      </div>

      <hr />
      {filterFoodList.map((eve, index) => {
        return (
          <main className="" key={index}>
            <div className="">
              <div className="row">
                <>
                  <div className="col-lg-6">
                    <article key={eve.id} className="main-div">
                      <div className="main-img">
                        <img src={eve.img} alt="" />
                      </div>
                      <div className="content">
                        <div className="title">
                          <h4>{eve.title}</h4>
                          <h6>${eve.price}/-</h6>
                        </div>
                        <p>{eve.desc}</p>
                        <select
                          name=""
                          className="m mx-5 bg-success rounded"
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
                        <button
                          className="btn btn-success mx-2"
                          onClick={() => handleAddToCart(eve)}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </article>
                  </div>
                </>
              </div>
            </div>
          </main>
        );
      })}
    </>
  );
}

export default Card0;
