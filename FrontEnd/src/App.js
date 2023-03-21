import "bootstrap/dist/css/bootstrap.min.css";

import Menu from "./Component/Menu-Page/Menu";
import Home from "./Component/Home-Page/Home";

import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./Component/Error-Page/Error";
import MenuDetails from "./Component/Menu-Page/MenuDetails.js";
import Restaurants from "./Component/Home-Page/Restaurants";

function App() {
  const [menuDataa, setMenuData] = useState([]);
  const getMenuData = (data) => {
    setMenuData(data);
  };

  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route
              path="/res"
              element={<Restaurants getMenuData={getMenuData} />}
            />

            <Route path="/menu/:id" element={<Menu menuDataa={menuDataa} />} />
            <Route
              path="/menuDetails/:id"
              element={<MenuDetails></MenuDetails>}
            />
            <Route path="*" element={<Error></Error>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
