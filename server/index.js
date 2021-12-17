import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/user.js";
import { connectDB } from "./config/db.js";

const app = express();

//connect Mongo DB
connectDB();

//General Setups
app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));
app.use(cors());

// App Routes
app.use("/posts", postRoutes);
app.use("/user", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});
