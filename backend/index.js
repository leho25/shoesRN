const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const app = express();
const brandRouter = require("./routes/brand");
const shoesRouter = require("./routes/shoes");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
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
app.use(cookieParser());
//ROUTERS
app.use("/v1/brand", brandRouter);

app.use("/v1/shoes", shoesRouter);

app.use("/v1/auth", authRouter);
app.use("/v1/user", userRouter);

app.listen("3000", "192.168.1.2", () => {
  console.log(`Service is running`);
});

//AUTHENTICATION
// AUTHORIZATION
