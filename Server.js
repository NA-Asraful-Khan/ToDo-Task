const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const routes = require('./routes/ToDoRoutes')

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(routes)


mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongodb Connected..."))
  .catch((err) => console.error(err));

  app.listen(port, () => {
    console.log(`My Web site is running on port: ${port}`)
})