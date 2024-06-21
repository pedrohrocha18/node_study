import { consult } from "../database/conexao.js";
class CarRepository {
  findAll() {
    const query = "SELECT * FROM table_cars;";

    return consult(query, "Dados não localizados!");
  }

  findById(id) {
    const query = "SELECT * FROM table_cars WHERE id =?";

    return consult(query, id, "Não foi possível localizar!");
  }

  store(car) {
    const query = "INSERT INTO table_cars SET ?";

    return consult(query, car, "Não foi possível adicionar!");
  }

  delete(id) {
    const query = "DELETE FROM table_cars WHERE id=?";

    return consult(query, id, "Não foi possível deletar!");
  }

  update(car, id) {
    const query = "UPDATE table_cars SET ? WHERE id=?";

    return consult(query, [car, id], "Não foi possível atualizar");
  }
}

export default new CarRepository();
