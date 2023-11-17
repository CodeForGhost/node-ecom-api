const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("db connected successfully");
  })
  .catch((e) => {
    console.log(e);
  });

app.use(express.json());
app.use("/api/v1/users", userRoute);
app.use("/api/v1/auth", authRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running at port " + (process.env.PORT || 5000));
});
