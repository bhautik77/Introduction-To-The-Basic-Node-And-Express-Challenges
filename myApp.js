var express = require("express");
var app = express();
var apath_html = __dirname + "/views/index.html";
function func(req, res) {
  res.sendFile(apath_html);
}
app.get("/", func);
app.use("/public",middlewareFunction).

module.exports = app;
