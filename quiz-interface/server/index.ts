// @ts-nocheck
const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  fs.readFile("../src/Quizzes/data.json", (err, data) => {
    res.send(data);
  });
});

app.post("/", (req, res) => {
  fs.writeFile(
    "../src/Quizzes/data.json",
    JSON.stringify(req.body),
    () => null
  );
});

app.listen(8080, () => {
  console.log("server listening on 8080");
});
