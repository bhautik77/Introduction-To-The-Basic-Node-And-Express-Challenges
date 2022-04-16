var express = require("express");
var app = express();
var apath_html = __dirname + "/views/index.html";
var apath_assests = __dirname + "/public";
function func(req, res) {
  res.sendFile(apath_html);
}
function jsonapi(req, res) {
  if (process.env.MESSAGE_STYLE=="uppercase"){
    res.json({"message": "HELLO JSON"});
  }
  else {
      res.json({"message": "Hello json"});
  }
}
app.get("/json", jsonapi);
app.get("/", func);
app.use("/public", express.static(apath_assests));
module.exports = app;
