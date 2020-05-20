import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

const finalsData = fifaData.filter(function(match){
    return match["Year"]=== 2014 && match["Stage"]==="Final";
})
console.log(finalsData[0]["Home Team Name"]);
console.log(finalsData[0]["Away Team Name"]);
console.log(finalsData[0]["Home Team Goals"]);
console.log(finalsData[0]["Away Team Goals"]);
 
const winner = [];
fifaData.forEach(function(win){
    if (win.Year=== 2014 && win.Stage ==="Final"){

        return winner.push(win["Home Team Name"]);
    };
});
console.log(winner);


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
return data;
}
const getData = [];
fifaData.forEach(function(finals){
    if (finals.Stage==="Final")
    return getData.push(finals);
});
console.log(getFinals(getData));


/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callb, yearData) {     
    return callb(yearData);
    
};
const dataSet = [];
getData.forEach(function(years){
    return dataSet.push(years.Year);
});
console.log(getYears(getFinals, dataSet));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(winner, home) {
        return winner(home);
};
const winners = [];
getData.forEach(function(home){
    if (home["Home Team Goals"] > home["Away Team Goals"]){
        return winners.push(home["Home Team Name"])
    }
   if (home["Away Team Goals"] > home["Home Team Goals"]){
         return winners.push(home["Away Team Name"])
    }
    else {
        return winners.push(home["Win conditions"]);
    }       
}) 
console.log (getWinners(getFinals,winners));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(year, country) {
    return year, country;
    
};    
 const allwinners = []
    getData.forEach(function(worldyear){        
            if (worldyear["Home Team Goals"] > worldyear["Away Team Goals"]){
                return allwinners.push(`In ${worldyear["Year"]}, ${worldyear["Home Team Name"]} won the world cup`);
            }
           if (worldyear["Away Team Goals"] > worldyear["Home Team Goals"]){
                 return allwinners.push(`In ${worldyear["Year"]}, ${worldyear["Away Team Name"]} won the world cup`);
            }
            else {
                return allwinners.push(`In ${worldyear["Year"]}, ${worldyear["Win conditions"]} won the world cup`);
                
            }       
    });          
 
     console.log (allwinners);
       
     
  getWinnersByYear(getWinners,getYears);
  
//  getData.forEach(function(home)
// getWinnersByYear(getWinners, getYears);

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals( homegoals, awaygoals ) {
        return `home team goals ${Math.round(homegoals)}- match, Away Team Goals ${Math.round(awaygoals)}-match`;
};
const hometeamGoals = fifaData.reduce(function(datas, item, match){
        return datas + item["Home Team Goals"] / 850;
},0);
const awayTeamGoals = fifaData.reduce(function(datas, item, match){
    return datas + item["Away Team Goals"] / 850 ;
},0);   

console.log(getAverageGoals(hometeamGoals, awayTeamGoals));


/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
