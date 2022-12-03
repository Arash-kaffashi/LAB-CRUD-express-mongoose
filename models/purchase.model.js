import { Schema, model } from "mongoose";

const purchaseSchema = new Schema({
  shippingAddress: String,
  album: { type: Schema.Types.ObjectId, ref: "Album" },
});
export default model("Purchase", purchaseSchema);
