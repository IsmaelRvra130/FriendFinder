//Dependencies
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

//Sets up express App
const app = express();
const PORT = process.env.PORT || 8080;

//Sets up express for data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw({ type: "application/vnd.api+json"}));
app.use(bodyParser.text());
//required html file routes.
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//Server begins to listen
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});