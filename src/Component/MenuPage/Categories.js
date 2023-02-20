import React, { useState, useEffect } from "react";
import axios from "axios";
const Categories = () => {
  const [edata, setData] = useState([]);
  const [Categories, setCategories] = useState(unqueList);
  const unqueList = [
    ...new Set(
      edata.map((eve) => {
        return eve.Category;
      })
    ),
    "All",
  ];

  const fetchData = () => {
    axios.get("http://localhost:3003/menu").then((res) => setData(res.data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="navbar">
        <div className="btn-group">
          <button className="btn-group__itm">fd</button>
        </div>
      </div>
    </>
  );
};

export default Categories;
