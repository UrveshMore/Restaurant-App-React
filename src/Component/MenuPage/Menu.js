// import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
// import Navbar from "../Navbar";

// import "./style.css";
// import { useCart, useDispatchCart } from "../ContextReducer";

// const Menu = (props) => {
// const [menuData, setMenuData] = useState([]);
// console.log(props.menuDataa);
// const fetchData = () => {
//   axios.get("http://localhost:3003/menu").then((res) => {
//     setMenuData(res.data);
//   });
// };
// useEffect(() => {
//   fetchData();
// }, []);

//   return (
//     <>
//       <Navbar></Navbar>
//       <main className="product-space">
//         <div className="container">
//           <div className="row">
//             {menuData.map((event) => {
//               return (
//                 <>
//                   <div className="col-lg-6">
//                     <article key={event.id} className="main-div">
//                       <div className="main-img">
//                         <img src={event.img} alt="" />
//                       </div>
//                       <div className="content">
//                         <div className="title">
//                           <h4>{event.title}</h4>
//                           <h6>{event.price}</h6>
//                         </div>
//                         <p>{event.desc}</p>
//                       </div>
//                     </article>
//                   </div>
//                 </>
//               );
//             })}
//           </div>
//         </div>
//       </main>
//     </>
//   );
// };

// export default Menu;

import React, { useState, useEffect } from "react";
import "./style.css";
import { useCart, useDispatchCart } from "../ContextReducer";
import Navbar from "../Navbar";

const Menu = (props) => {
  const [menuData, setMenuData] = useState([]);
  console.log(props.menuDataa);
  const fetchData = () => {
    axios.get("http://localhost:3003/menu").then((res) => {
      setMenuData(res.data);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  let dispatch = useDispatchCart();
  let data = useCart();
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
  };
  const title = menuData.map((e) => {
    return e.title;
  });
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

      {menuData.map((eve) => {
        return (
          <main className="">
            <div className="container-fluid ">
              <div className="row mt-2 d-flex justify-content-between align-item-center">
                <>
                  <div className="col-lg-6">
                    <article key={eve.id} className="main-div">
                      <div className="main-img">
                        <img src={eve.img} alt="" />
                      </div>
                      <div className="content">
                        <div className="title">
                          <h4> {eve.title}</h4>
                          <h6>{eve.price}/-</h6>
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
};

export default Menu;
