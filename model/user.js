import mongoose from "mongoose";
import tripSchema from "./tripsModel.js";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  passwordHash: {
    type: String,
  },
  //adding trips to user
  trips: tripSchema,
});

//Converting from commonJS to ESM
const userModel = mongoose.model("User", userSchema);

export default userModel;
