const express = require("express");
const csvTojson = require("csvtojson");
const fs = require("fs");
const server = require("./server");
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");
const app = express();

//Check if the file is csv

app.use(cors());
app.use(helmet());
app.use(json());
app.use(
  urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  fs.readFile("./form.html", "utf-8", (err, data) => {
    if (err) {
      return res.send("error");
    }
    res.send(data);
  });
});
app.post("/csv", csvUpload);

fs.readFileSync(`${__dirname}/SampleCSV - Sheet1.csv`);
csvTojson()
  .fromFile("./SampleCSV - Sheet1.csv")
  .then((source) => {
    console.log(source);
  });
app.get("/", (req, res) => {
  console.log("here");
});
module.exports = app;
