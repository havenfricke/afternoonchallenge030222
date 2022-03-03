import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId
export const MoonSchema = new Schema({
  name: { type: String, required: true },

},
  { timestamps: true, toJSON: { virtuals: true } }
)




