import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId
export const SpeciesSchema = new Schema({
  name: { type: String, required: true },
  planetId: { type: String, required: true, ref: 'Planet' }
},
  { timestamps: true, toJSON: { virtuals: true } }
)

SpeciesSchema.virtual('planet', {
  localField: 'planetId',
  foreignField: '_id',
  justOne: true,
  ref: 'Planet'
})

