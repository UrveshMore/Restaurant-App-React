import "bootstrap/dist/css/bootstrap.min.css";

import Menu from "./Component/MenuPage/Menu";
import Home from "./Component/Home";

import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./Component/MenuPage/Error";
import MenuDetails from "./Component/MenuPage/MenuDetails";
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
            <Route path="*" element={<Error></Error>} />
            <Route path="/menu/:id" element={<Menu menuDataa={menuDataa} />} />
            <Route
              path="/menuDetails/:id"
              element={<MenuDetails></MenuDetails>}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
