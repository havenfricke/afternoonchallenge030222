import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId
export const StarsSchema = new Schema({
  name: { type: String, required: true },
  planetId: { type: ObjectId, required: true, ref: 'Planet' }
},
  { timestamps: true, toJSON: { virtuals: true } }
)

StarsSchema.virtuals('planet', {
  localField: 'planetId',
  foreignField: '_id',
  ref: 'Planet',
  justOne: true
})