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

export default app;
