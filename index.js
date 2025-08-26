const express = require("express");
const mongoose = require("mongoose");
const Product = require('./model/product.model.js')
const productRoute = require('./routes/product.route.js')

const app = express();

app.use(express.json())
app.use(express.urlencoded(false))

app.use('/api/products', productRoute)

PORT = 3000;

app.get("/", (req, res) => {
  res.send("This is some");
});


mongoose
  .connect(
    "mongodb+srv://Amir:Pass@cluster0.l0enhzv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to MongoDB!!!");
    app.listen(PORT, () => {
      console.log("Server is running on PORT: " + PORT);
    });
  })
  .catch(() => {
    console.error("Error Connecting MongoDB");
  });
