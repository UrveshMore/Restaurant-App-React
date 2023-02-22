import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import "./style.css";
const Search0 = () => {
  const [fdata, setFdata] = useState([]);

  const [copydata, setCopyData] = useState([]);

  console.log(fdata);
  const fetchData = () => {
    axios
      .get("http://localhost:3003/menu")
      .then((res) => {
        setFdata(res.data);
      })
      .catch((err) => alert(err));
  };
  useEffect(() => {
    fetchData();
  }, []);

  // const chanegData = (e) => {
  //   let getchangedata = e.toLowerCase();

  //   if (getchangedata == "") {
  //     setCopyData(trusted);
  //   } else {
  //     let storedata = copydata.filter((ele, k) => {
  //       return ele.rname.toLowerCase().match(getchangedata);
  //     });

  //     setCopyData(storedata);
  //   }
  // };

  useEffect(() => {
    setTimeout(() => {
      setCopyData(fdata);
    }, 3000);
  }, []);
  return (
    <div>
      {" "}
      <Form className="d-flex justify-content-center align-items-center mt-3">
        <Form.Group className=" mx-2 col-lg-4" controlId="formBasicEmail">
          <Form.Control
            type="text"
            // onChange={(e) => chanegData(e.target.value)}
            placeholder="Search Restaurant"
          />
        </Form.Group>
        <button
          className="btn text-light col-lg-1"
          style={{ background: "#ed4c67" }}
        >
          Submit
        </button>
      </Form>
    </div>
  );
};

export default Search0;
