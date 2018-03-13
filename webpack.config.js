var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, "public"),
  entry: "./js/login/login-app.js",
  output: {
    path: __dirname + "/js/login/",
    filename: "login-app.min.js"
  }
};
