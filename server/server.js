const express = require("express");
const app = express;
const port = 3001;
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rlatjdtn123",
  database: "hello",
});

connection.connect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/text", (req, res) => {
  const user_id = req.body.inText;
  console.log(user_id);
  //////추가 내용/////
  connection.query(
    "INSERT INTO new_table (user_id) values(?)",
    [user_id],
    function (err, rows, fields) {
      if (err) {
        console.log("DB저장 실패");
      } else {
        console.log("DB저장 성공");
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
