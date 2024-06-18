import express from "express";
import CarController from "./app/controllers/CarController.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/cars", CarController.getAllCar);

app.get("/cars/:id", CarController.getCarById);

app.post("/cars", CarController.addCar);

app.delete("/cars/:id", CarController.deleteCar);

app.put("/cars/:id", CarController.updateCar);

export default app;
