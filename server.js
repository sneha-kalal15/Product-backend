const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const productRoutes = require("./routes/productRoutes");
const authRouter = require("./routes/authRoutes");
const cors = require("cors");

const PORT = 3000;

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Server is running",
  });
});
app.use("/products", productRoutes);
app.use("/auth", authRouter);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to mongodb successfully");

    app.listen(PORT, () => {
      console.log("Server is running fine");
    });
  })
  .catch(() => {
    console.error("Failed to connect to mongodb");
    console.log(err.message);
  });
