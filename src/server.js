const express = require("express");
const app = express();
const { userRouter } = require("./routes/userRoute");
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const MONGO_URI =
  "mongodb+srv://men1692:qudals1004!@atlascluster.x25rhnu.mongodb.net/BlogService?retryWrites=true&w=majority";

const server = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    mongoose.set("debug", true);
    console.log("mongodb connected");
    app.use(express.json());

    app.use("/user", userRouter);

    app.listen(3000, () => console.log("server listening on port 3000"));
  } catch (err) {
    console.log(err);
  }
};

server();
