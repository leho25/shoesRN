const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
const app = express();

const port = 3000;
dotenv.config();
//CONNECT DATABASE
const connectToMongo = async () => {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log("Connect to mongo");
};
connectToMongo();

app.use(express.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
