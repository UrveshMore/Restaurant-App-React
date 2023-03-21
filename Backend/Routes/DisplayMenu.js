const express = require("express");

const router = express.Router();

router.post("/restaurants", (req, res) => {
  try {
    // const data = global.restaurantList.map((restaurant) => {
    //   const { menu, ...rest } = restaurant;
    //   return rest;
    // });
    res.send([global.restaurantList]);
  } catch (error) {
    res.send("Server error");
  }
});

module.exports = router;
