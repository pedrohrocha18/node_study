import mysql2 from "mysql2";

const conexao = mysql2.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "1807.Drika",
  database: "bd_carros",
});

conexao.connect();

export default conexao;
