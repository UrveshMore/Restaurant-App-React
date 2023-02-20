import React from "react";
import "./style.css";
import { useCart, useDispatchCart } from "./ContextReducer";

export default function Cart(props) {
  let data = useCart();
  let dispatch = useDispatchCart();
  if (data.length === 0) {
    return (
      <div>
        <div className="m-5 w-100 text-center fs-3" style={{ color: "white" }}>
          The Cart is Empty!
        </div>
      </div>
    );
  }
  //   let finalPrice = qty * parseInt(props.foodItem.price);
  let totalPrice = data.reduce((total, food) => total + food.price, 0);
  return (
    <div>
      <div className="container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md">
        <table className="table tblHov ">
          <thead className="text-success fs-4">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Amount</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => {
              return (
                <tr style={{ color: "white" }}>
                  <th scope="row">{index + 1}</th>
                  <td>{food.name}</td>
                  <td>{food.qty}</td>
                  <td>{food.price}</td>
                  <td>
                    <button type="button" className="btn p-0">
                      <button
                        onClick={() => {
                          dispatch({ type: "REMOVE", index: index });
                        }}
                      >
                        {" "}
                        DEL
                      </button>
                    </button>{" "}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          <h1 style={{ color: "white" }} className="fs-2">
            Total Price :{totalPrice}/-
          </h1>
        </div>
      </div>
    </div>
  );
}
