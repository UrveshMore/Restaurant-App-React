import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./Component/Home-Page/Cards";
import Menu from "./Component/MenuPage/Menu";

import Home from "./Component/Home";
// import Navbar from "./Component/Navbar";
import { useState } from "react";

import { CartProvider } from "./Component/ContextReducer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
              {/* <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/myorder" element={<MyOrder />} /> */}
            </Routes>
          </div>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
