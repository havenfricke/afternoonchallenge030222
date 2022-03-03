import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId

export const GalaxySchema = new Schema({
  name: { type: String, required: true },
  galaxyId: { type: ObjectId, required: true, ref: 'Galaxy' },
  planetId: { type: ObjectId, required: true, ref: 'Planet' },
  starId: { type: ObjectId, required: true, ref: 'Star' },
  speciesId: { type: ObjectId, required: true, ref: 'Species' },
  moonId: { type: ObjectId, required: true, ref: 'Moon' }
},
  { timestamps: true, toJSON: { virtuals: true } }
)

GalaxySchema.virtual('galaxy', {
  localField: 'galaxyId',
  foreignField: '_id',
  justOne: true,
  ref: 'Galaxy'
})

GalaxySchema.virtual('planet', {
  localField: 'planetId',
  foreignField: '_id',
  justOne: true,
  ref: 'Planet'
})

GalaxySchema.virtuals('star', {
  localField: 'starId',
  foreignField: '_id',
  justOne: true,
  ref: 'Star'
})

GalaxySchema.virtuals('species', {
  localField: 'speciesId',
  foreignField: '_id',
  justOne: true,
  ref: 'Species'
})

GalaxySchema.virtual('moon', {
  localField: 'moonId',
  foreignField: '_id',
  justOne: true,
  ref: 'Moon'
})

