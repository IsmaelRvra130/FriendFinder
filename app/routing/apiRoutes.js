

// require the data of the array from friends.js file when made.
//var friends = require("");

module.export = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends",function(req, res){
        
    }
}