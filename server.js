//Dependencies
const express = require("express");
const path = require("path");

//Sets up express App
const app = express();
const PORT = process.env.PORT || 8080;

//Sets up express for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//required html file routes.
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//Server begins to listen
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});