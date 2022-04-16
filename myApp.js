var express = require("express");
var app = express();
var apath_html = __dirname + "/views/index.html";
var apath_assests = __dirname + "/public";
function func(req, res) {
  res.sendFile(apath_html);
}
app.get("/", func);
app.use("/public", express.static(apath_assests));
module.exports = app;
