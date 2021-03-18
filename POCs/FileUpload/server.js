const cors = require("cors");
const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));

global.__basedir = "./";

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

const initRoutes = require("./route");

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

let port = 8080;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
