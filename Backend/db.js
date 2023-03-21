const mongoose = require("mongoose");
const mongourl =
  "mongodb+srv://admin:admin123@cluster0.3nhqn9g.mongodb.net/restaurant?retryWrites=true&w=majority";
const mongoDB = async () => {
  await mongoose.connect(
    mongourl,
    { useNewUrlParser: true },
    async (err, result) => {
      if (err) console.log("error", err);
      else {
        console.log("connected.....");
        const fetchRestaurantData = await mongoose.connection.db.collection(
          "restaurantList"
        );
        fetchRestaurantData.find({}).toArray(async function (err, data) {
          if (err) console.log(err);
          else {
            global.restaurantList = data;
          }
        });
      }
    }
  );
};
module.exports = mongoDB;
