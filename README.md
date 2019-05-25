# FriendFinder Node and Express Servers

<h3>Overview</h3>
In this activity,I built a compatibility-based "FriendFinder" application -- basically to find out which superhero your more compatable with. This full-stack site will take in results from your users' surveys, then compare their answers with those from other superheros. The app will then display the name and picture of the superhero with the best overall match.

<h3>Instructions</h3>

1.Your survey should have 10 questions of your choosing. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

2.Your server.js file should require the basic npm packages we've used in class: express and path.
 
3.Your htmlRoutes.js file should    include two routes:

   <ul>A GET Route to /survey which should display the survey page.
    <ul>A default, catch-all route that leads to home.html which displays the home page.

4.Your apiRoutes.js file should contain two routes:

   <ul>A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
  <ul>A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
<br>
5.You should save your application's data inside of app/data/friends.js as an array of objects. Each of these objects should roughly follow the format below.

    {
    "name":"Ahmed",
        "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
        ]
    }

6.Determine the user's most compatible friend using the following as a guide:

  <li>Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
  <li>With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.<br>
    Example:
    <li>User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
    <li>User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
    <li>Total Difference: 2 + 1 + 2 = 5
    <li>Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
    <li>The closest match will be the user with the least amount of difference.

7.Once you've found the current user's most compatible friend, display the result as a modal pop-up.
    <ul>The modal should display both the name and picture of the closest match.

<h2>Technologies Used</h2>
    <ul>Node.js
    <ul>JavaScript
    <ul>jQuery
    <ul>Express.js
    <ul>HTML
    <ul>Bootstrap