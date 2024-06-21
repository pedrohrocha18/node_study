import CarRepository from "../repositories/CarRepository.js";

class CarController {
  async getAllCar(req, res) {
    const result = await CarRepository.findAll();

    res.status(200).send(result);
  }

  async getCarById(req, res) {
    const id = req.params.id;

    const result = await CarRepository.findById(id);

    res.status(200).send(result);
  }

  async addCar(req, res) {
    const car = req.body;

    const result = await CarRepository.store(car);

    res.status(201).send(result);
  }

  async deleteCar(req, res) {
    const id = req.params.id;

    const result = await CarRepository.delete(id);

    res.status(200).send(result);
  }

  async updateCar(req, res) {
    const car = req.body;
    const id = req.params.id;

    const result = await CarRepository.update(car, id);

    res.status(200).send(result);
  }
}

export default new CarController();
