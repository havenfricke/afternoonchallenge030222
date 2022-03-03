import mongoose from 'mongoose'
import { AccountSchema, ProfileSchema } from '../models/Account'
import { GalaxySchema } from "../models/Galaxy";
import { MoonSchema } from "../models/Moon";
import { PlanetSchema } from "../models/Planet";
import { SpeciesSchema } from "../models/Species";
import { StarsSchema } from "../models/Star";
import { ValueSchema } from '../models/Value'

class DbContext {

  Moons = mongoose.model('Moon', MoonSchema)
  Galaxies = mongoose.model('Galaxy', GalaxySchema)
  Planets = mongoose.model('Planet', PlanetSchema)
  Species = mongoose.model('Species', SpeciesSchema)
  Stars = mongoose.model('Star', StarsSchema)
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts');
}

export const dbContext = new DbContext()
