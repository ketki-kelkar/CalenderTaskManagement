const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routes/eventRoute");
const dotenv = require("dotenv");
const eventRoute = require("./routes/eventRoute")


dotenv.config();
const cors = require("cors");

const URL = process.env.MONGO_URL;
const PORT = process.env.PORT;

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());

app.use("/api/events", router);
mongoose.set("strictQuery", false);

mongoose
  .connect(
    URL
  )
    .then(_=> console.log("Connection successful"))
    .catch(err=> console.log("database connection fail"))

  .then(() => {
    app.listen(PORT , _=> console.log("Backend server is running on port: "+ PORT))
  })
  .catch((err) => console.error("MongoDB connection error:", err));