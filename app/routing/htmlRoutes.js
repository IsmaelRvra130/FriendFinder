//Dependencies
//Path package to get correct file path for html
const path = require("path");

//Routing
module.exports = function(app) {
    //GET route to display survey html page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname,"../public/survey.html"));
    });
    
    //Default catch-all route that leads to home.html
    app.get("*", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

}