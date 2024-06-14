import express from "express";
import conexao from "../infra/conexao.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/cars", (req, res) => {
  const query = "SELECT * FROM table_cars;";

  conexao.query(query, (err, result) => {
    if (err) {
      res.status(404).json({ erro: "Dados não localizados!" });
    } else {
      res.status(200).send(result);
    }
  });
});

app.get("/cars/:id", (req, res) => {
  const query = "SELECT * FROM table_cars WHERE id =?";
  const id = req.params.id;

  conexao.query(query, id, (err, result) => {
    if (err) {
      res.status(404).json({ error: "Dados não localizados!" });
    } else {
      res.status(200).send(result);
    }
  });
});

app.post("/cars", (req, res) => {
  const car = req.body;
  const query = "INSERT INTO table_cars SET ?";

  conexao.query(query, car, (err, result) => {
    if (err) {
      res.status(400).json({ error: "Não foi possível adicionar" });
    } else {
      res.status(201).json({ sucess: "Carro adicionado!" });
    }
  });
});

app.delete("/cars/:id", (req, res) => {
  const id = req.params.id;
  const query = "DELETE FROM table_cars WHERE id=?";

  conexao.query(query, id, (err, result) => {
    if (err) {
      res.send(404).json({ error: "Carro não localizado!" });
    } else {
      res.status(200).send("Carro deletado com sucesso!");
    }
  });
});

app.put("/cars/:id", (req, res) => {
  const car = req.body;
  const id = req.params.id;
  const query = "UPDATE table_cars SET ? WHERE id=?";

  conexao.query(query, [car, id], (err, result) => {
    if (err) {
      res.status(404).json({ error: "Carro não localizado!" });
    } else {
      res.status(200).json({ success: "Carro atualizado!" });
    }
  });
});

export default app;
