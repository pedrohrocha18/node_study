import express from "express";
const app = express();

app.use(express.json());

const cars = [
  {
    id: 1,
    carro: "Camaro",
    fabricante: "Chevrolet",
  },
  {
    id: 2,
    carro: "Jetta",
    fabricante: "Volkswagem",
  },
  {
    id: 3,
    carro: "Fastback",
    fabricante: "Fiat",
  },
  {
    id: 4,
    carro: "306",
    fabricante: "Pegeout",
  },
  {
    id: 5,
    carro: "Virtus",
    fabricante: "Volkswagem",
  },
];

function getCarByID(id) {
  return cars.filter((car) => car.id == id);
}

function getIndexCarByID(id) {
  return cars.findIndex((car) => car.id == id);
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/cars", (req, res) => {
  res.status(200).send(cars);
});

app.post("/cars", (req, res) => {
  cars.push(req.body);

  res.status(201).send("O carro foi adicionado com sucesso!");
});

app.get("/cars/:id", (req, res) => {
  let car = getCarByID(req.params.id);

  if (car) {
    res.status(200).send(car);
  } else {
    res.status(204).send("Veículo não encontrado!");
  }
});

app.delete("/cars/:id", (req, res) => {
  let index = getIndexCarByID(req.params.id);

  cars.splice(index, 1);

  res.status(200).send("Carro deletado!")
});

export default app;
