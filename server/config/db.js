import mongoose from "mongoose";
import config from "config";

const db = config.get("mongoURI");

export const connectDB = () => {
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("mongo DB Connected ");
    })
    .catch((err) => console.error(err.message));
};
