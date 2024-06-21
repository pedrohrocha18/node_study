import mysql2 from "mysql2";

const conexao = mysql2.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "1807.Drika",
  database: "bd_carros",
});

conexao.connect();

export const consult = (query, value = "", errormessage) => {
  return new Promise((resolve, reject) => {
    conexao.query(query, value, (err, result) => {
      if (err) return reject(errormessage);
      const data = JSON.parse(JSON.stringify(result));
      return resolve(data);
    });
  });
};

export default conexao;
