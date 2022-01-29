const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
  res.send("hi");
});

app.listen(5000, () => {
  console.log("5000 port에서 서버 실행");
});
