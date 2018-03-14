Pick 16
=======

Table of Contents
-----------------
1. [Purpose](https://github.com/bosoxfan3/Pick16-Client#purpose)
2. [Screenshots](https://github.com/bosoxfan3/Pick16-Client#screenshots)
3. [Getting Started](https://github.com/bosoxfan3/Pick16-Client#getting-started)
4. [Technologies Used](https://github.com/bosoxfan3/Pick16-Client#technologies-used)

Purpose
-------
### What Is Pick 16?
[Pick 16](https://pick16.netlify.com/) is an app that lets you play NFL pick'em.
The rules are simple, pick the winner of each matchup every week of the regular season.
Each time a team you've picked wins, you get 1 points. Total points are tracked and charted throughout the season on the public leaderboard.

Pick 16 was created after years of playing this game by getting player's weekly picks through text or email, and scoring either by hand or with Excel. The app makes it much simpler both for the members of the league as picks can be made through the site and the points are updated automatically on a weekly basis.

**This is largely meant to be a private app meant for the friends I have been playing with for years. While there are no barriers to signing up now, there may be in the future.**

Screenshots
-----------
**Landing Page:** Users can learn about Pick 16, sign up, log in, or test it out with a demo account (Demo account link at bottom of signup and login forms).
![Landing Page](/src/screenshots/LandingPage.png)

**Leaderboard:** Users can see where their point total puts them in the standings of all the users.
![Leaderboard](/src/screenshots/Leaderboard.png)

**My Picks Page:** This page displays the current week of the season and all the matchups for that week. 
Here users can see all of their current picks or make picks if they have no current picks. They can edit the picks and submit the updates; or if they dislike any edits they've made, reset the picks to what they were when the page loaded.
![My Picks Page](/src/screenshots/MyPicks.png)

Getting Started
---------------
### Installing
```
>   git clone https://github.com/bosoxfan3/Pick16-Client.git
>   cd Pick16-Client
>   npm install
```
### Launching
```
>   npm start
```
Then open [`localhost:3000`](http://localhost:3000) in a browser.
**You will need to either sign up, log in, or use the demo link to access the main functions of Pick 16**

###Testing
```
>   npm test
```

Technologies Used
-----------------
Pick 16 is a fullstack javascript application that utilizes React. It uses MongoDB to save
user's login info and weekly picks, and Enzyme for testing.
Developers will need to install MongoDB for full functionality.
### Front End (Client)
  * Javascript
  * CSS
  * Enzyme - used for testing
  * TravisCI - used for continuous integration and deployment
  * Netlify - used for hosting

### Back End (API)
  [Pick 16 API](https://github.com/bosoxfan3/Pick16-API)
  * Node.js
  * Express
  * MongoDB
  * Mocha and Chai - used for testing
  * Travis CI - used for continuous integration and deployment
  * Heroku - where the Pick 16 API is deployed

### Security
  * Bcrypt.js - used to encrypt user passwords
  * Passport - used to control authorized endpoints