import BaseController from "../utils/BaseController";

export class GalaxiesController extends BaseController {
  constructor() {
    super('api/galaxies')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .get('/:id/stars', this.getGalaxyStars)
      .get('/:id/planets', this.getGalaxyPlanets)
      .get('/:id/species', this.getGalaxySpecies)
      .get('/:id/moons', this.getGalaxyMoons)
      .post('', this.create)
  }
  async getAll(req, res, next) {
    try {

    } catch (error) {
      next(error)
    }
  }
  async getById(req, res, next) {
    try {

    } catch (error) {
      next(error)
    }
  }
  async getGalaxyStars(req, res, next) {
    try {

    } catch (error) {
      next(error)
    }
  }
  async getGalaxyPlanets(req, res, next) {
    try {

    } catch (error) {
      next(error)
    }
  }
  async getGalaxySpecies(req, res, next) {
    try {

    } catch (error) {
      next(error)
    }
  }
  async getGalaxyMoons(req, res, next) {
    try {

    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      throw new Error("Method not implemented.");
    } catch (error) {
      next(error)
    }
  }
}