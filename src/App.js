import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./Component/Home-Page/Cards";
import Menu from "./Component/MenuPage/Menu";

import Home from "./Component/Home";
// import Navbar from "./Component/Navbar";
import { useState } from "react";

import { CartProvider } from "./Component/ContextReducer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Err from "./Component/MenuPage/Err";

function App() {
  const [menuDataa, setMenuData] = useState([]);
  const getMenuData = (data) => {
    setMenuData(data);
  };

  return (
    <div className="App">
      <CartProvider>
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<Home></Home>} />
              <Route
                path="/res"
                element={<Cards getMenuData={getMenuData} />}
              />

              <Route path="/menu" element={<Menu menuDataa={menuDataa} />} />
              <Route path="*" element={<Err></Err>} />
            </Routes>
          </div>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
