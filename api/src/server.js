require("dotenv").config();

const express = require("express");

const app = express();
app.use(express.json());

const cookies = require("cookie-parser");
app.use(cookies());

const userRoutes = require("./routes/userRoutes");
app.use("/users", userRoutes);

const listener = app.listen(process.env.PORT, process.env.HOST, () => {
  console.log(`Server listening at ${listener.address().address}:${listener.address().port}`);
});