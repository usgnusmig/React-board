const express = require("express");
const mysql = require("mysql");
const dbconfig = require("./config/db");

const connection = mysql.createConnection(dbconfig);

const app = express();

app.get("/", (req, res, next) => {
  connection.query("Select * from Users", (error, rows) => {
    if (error) throw error;
    console.log(rows);
    res.send(rows);
  });
});

app.listen(5000, () => {
  console.log("5000 포트에서 서버 시작");
});
