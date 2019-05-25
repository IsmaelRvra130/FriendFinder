

// require the data of the array from friends.js file when made.
var friendsList = require('../data/friends');

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsList);
    });

    app.post("/api/friends",function(req, res){
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };
        console.log(req.body);

        //resules of the users survey POST and parse it.
        var userData = req.body;
        var userScores = userData.scores;

        console.log(userScores)

        //Calculates diffrence between users score and friends score.
        var totalDifference = 0;

        //Loop through the friends array.
        for (var i = 0; i < friendsList.length; i++) {
            //console.log(friends[i]);
            totalDifference = 0;

            //Loops through friends scores.
            for (var j = 0; j < friendsList[i].scores[j]; j++) {

                //Calculates the difference between the sores and sums them into totalDifference.
                 totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendsList[i].scores[j]));

                 //If the sum of the differences is less then differences of the current "best match".
                 if (totalDifference <= bestMatch.friendDifference) {

                    //Reset the bestmatch to be the new friend.
                    bestMatch.name = friendsList[i].name;
                    bestMatch.photo = friendsList[i].photo;
                    bestMatch.friendDifference = totalDifference;
                 }
            }
        }
        //Save the user Data to the database.
         // User
        friendsList.push(userData);

        //returns a json with the users bestmatch.
        res.json(bestMatch);
    });
}