var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var apath_html = __dirname + "/views/index.html";
var apath_assests = __dirname + "/public";

function logger(req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
}

function func(req, res) {
  res.sendFile(apath_html);
}

function jsonapi(req, res) {
  if (process.env.MESSAGE_STYLE == "uppercase") {
    res.json({ message: "HELLO JSON" });
  } else {
    res.json({ message: "Hello json" });
  }
}

app.use(logger, bodyParser.urlencoded({extended: false}));

app.get(
  "/now",
  function mid(req, res, next) {
    req.time = new Date().toString();
    next();
  },
  function final(req, res) {
    res.json({ time: req.time });
  }
);

app.get("/:word/echo", function ech(req, res) {
  res.json({ echo: req.params.word });
});

app.get("/name", function querypara(req, res) {
  res.json({ name: req.query.first + " " + req.query.last });
});

app.post("/name", function querypara2(req, res) {
  res.json({ name: req.body.first + " " + req.body.last });
});

app.use("/public", express.static(apath_assests));
app.get("/json", jsonapi);
app.get("/", func);
module.exports = app;
