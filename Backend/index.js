const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;
const displayMenu = require("./Routes/DisplayMenu");
const mongoDB = require("./db");
app.use(cors({ origin: "http://localhost:3000" }));
mongoDB();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/restaurantList", displayMenu);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
