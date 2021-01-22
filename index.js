const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(4000, () => {
  console.log("Listening on port 4000.");
});