const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
const app = express();
const brandRouter = require("./routes/brand");
const shoesRouter = require("./routes/shoes");

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
//ROUTERS
app.use("/v1/brand", brandRouter);

app.use("/v1/shoes", shoesRouter);

app.listen("3000", "192.168.1.157", () => {
  console.log(`Service is running`);
});
