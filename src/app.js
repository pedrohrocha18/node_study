import express from "express";
const app = express();

app.use(express.json());

const cars = [
  {
    id: 1,
    modelo: "Civic",
    fabricante: "Honda",
    valor: 90000,
  },
  {
    id: 2,
    modelo: "Corolla",
    fabricante: "Toyota",
    valor: 95000,
  },
  {
    id: 3,
    modelo: "Focus",
    fabricante: "Ford",
    valor: 85000,
  },
  {
    id: 4,
    modelo: "Cruze",
    fabricante: "Chevrolet",
    valor: 92000,
  },
  {
    id: 5,
    modelo: "Jetta",
    fabricante: "Volkswagen",
    valor: 98000,
  },
];
function getCarByID(id) {
  return cars.filter((car) => car.id == id);
}

function getIndexCarByID(id) {
  return cars.findIndex((car) => car.id == id);
}

app.get("/", (req, res) => {
  res.send("Welcome to my API!");
});

app.post("/cars", (req, res) => {
  cars.push(req.body);

  res.status(201).send("O carro foi adicionado com sucesso!");
});

app.get("/cars", (req, res) => {
  res.status(200).send(cars);
});

app.get("/cars/:id", (req, res) => {
  let car = getCarByID(req.params.id);

  if (car) {
    res.status(200).send(car);
  } else {
    res.status(204).send("Veículo não encontrado!");
  }
});

app.put("/cars/:id", (req, res) => {
  let index = getIndexCarByID(req.params.id);

  cars[index].modelo = req.body.modelo;
  cars[index].fabricante = req.body.fabricante;
  cars[index].valor = req.body.valor;

  res.json(cars);
});

app.delete("/cars/:id", (req, res) => {
  let index = getIndexCarByID(req.params.id);

  cars.splice(index, 1);

  res.status(200).send("Carro deletado!");
});

export default app;
