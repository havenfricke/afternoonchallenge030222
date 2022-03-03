import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId
export const PlanetSchema = new Schema({
  name: { type: String, required: true },
  moonId: { type: ObjectId, required: true, ref: 'Moon' },
  speciesId: { type: ObjectId, required: true, ref: 'Species' }
},
  { timestamps: true, toJSON: { virtuals: true } }
)

PlanetSchema.virtual('moon', {
  localField: 'moonId',
  foreignField: '_id',
  justOne: true,
  ref: 'Moon'
})

PlanetSchema.virtual('species', {
  localField: 'speciesId',
  foreignField: '_id',
  justOne: true,
  ref: 'Species'
})

