import { Schema, model } from "mongoose";

const albumSchema = new Schema({
  performer: String,
  title: String,
  cost: Number,
});

export default model("Album", albumSchema);
