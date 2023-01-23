"use strict";

////////////////////////////////////////////////////////////////

// ASSIGNMENT 01

/*
function describeCountry(country, population, capitalCity) {
  const talkAboutCountry = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
  return talkAboutCountry;
}

const finland = describeCountry("Finland", 6, "Helsinki");
console.log(finland);

const philippines = describeCountry("Philippines", 106, "Manila");
console.log(philippines);

const america = describeCountry("America", 329, "Washington");
console.log(america);

*/

// ASSIGNMENT 02

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

// percentageOfWorld1 test

/*
const finland = percentageOfWorld1(6);
console.log(finland);

const philippines = percentageOfWorld1(106);
console.log(philippines);

const america = percentageOfWorld1(329);
console.log(america);
*/

// percentageOfWorld2 test

/*
const finland2 = percentageOfWorld2(6);
console.log(finland2);

const philippines2 = percentageOfWorld2(106);
console.log(philippines2);

const america2 = percentageOfWorld2(329);
console.log(america2);
*/

// ASSIGNMENT 03

/*
const percentageOfWorld3 = (population) => (population / 7900) * 100;

const finland3 = percentageOfWorld3(6);
console.log(finland3);

const philippines3 = percentageOfWorld3(106);
console.log(philippines3);

const america3 = percentageOfWorld3(329);
console.log(america3);
*/

// ASSIGNMENT 04

/*
const describePopulation = function (country, population) {
  const percentageOfWorld4 = percentageOfWorld1(population);
  const populationDesc = `${country} has ${population} million people which is about ${percentageOfWorld4} of the world.`;
  return populationDesc;
};

console.log(describePopulation("Finland", 6));
console.log(describePopulation("Philippines", 106));
console.log(describePopulation("America", 329));
*/

// ASSIGNMET 05
/*
const population = [6, 106, 329, 1402]; //Finland, Philippines, America, China

if (population.length >= 4) {
  console.log("Population is equal to or exceeds 4 elements.");
} else {
  console.log("Population has less than 4 elements.");
}

const finland4 = percentageOfWorld1(population[0]);
const philippines4 = percentageOfWorld1(population[1]);
const america4 = percentageOfWorld1(population[2]);
const china4 = percentageOfWorld1(population[3]);

console.log(`${finland4} 
${philippines4}
${america4}
${china4}`);
*/

// ASSIGNMENT 06

/*
const neighbours = ["Malaysia", "China", "Japan"];
console.log(neighbours);
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop("Utopia");
console.log(neighbours);
if (!neighbours.includes("Germany")) {
  console.log("Probably not a European country. :(");
}
console.log(neighbours.indexOf("China"));
neighbours.splice(1, 1);
console.log(neighbours);
neighbours.push("Republic of China");
console.log(neighbours);
*/

// ASSIGNMENT 07

/* const myCountry = {
  country: "Philippines",
  capital: "Manila",
  language: "Tagalog",
  population: 106,
  neighbours: ["Malaysia", "China", "Japan"],
};

console.log(myCountry); */

/*
console.log(`${myCountry.country} has ${myCountry.neighbours.length} neighbours and the closest
neighbour is ${myCountry.neighbours[0]}`);
*/

// ASSIGNMENT 08

/*
console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, and ${myCountry.neighbours.length} neighbours and a capital called ${myCountry.capital}`
);

console.log(myCountry.population + 2); // i can just do myCountry.population + 2 w/o putting it in a console.log which is very cool

console.log(myCountry["population"] - 2);
*/

// ASSIGNMENT 09

/* const myCountry = {
  country: "Philippines",
  capital: "Manila",
  language: "Tagalog",
  population: 106,
  neighbours: ["Malaysia", "China", "Japan"],
  isIsland: this.neighbours ? false : true,
  describe: function () {
    return `${myCountry.country} has ${myCountry.population} million ${
      myCountry.language
    }-speaking people, and ${
      myCountry.neighbours.length
    } neighbours and a capital called ${myCountry.capital}. It is ${
      this.isIsland ? "definitely" : "not"
    } an island.`;
  },
};

console.log(myCountry.describe()); */

// ASSIGNMENT 10

/* for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting.`);
} */

// ASSIGNMENT 11
/* const population = [6, 106, 329, 1402];

for (let i = 0; i <= population.length - 1; i++) {
  console.log(percentageOfWorld1(population[i]));
} */

// ASSIGNMENT 12

/* let listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = listOfNeighbours.length - 1; i >= 0; i--) {
  for (let x = 0; x <= listOfNeighbours[i].length - 1; x++) {
    if (listOfNeighbours[i].length - 1 > 0) {
      console.log(`Neighbors: ${listOfNeighbours[i][x]}`);
    } else {
    }
  }
} */

// ASSIGNMENT 13

/* const population3 = [6, 106, 329, 1402];

let i = 0;

while (i <= population3.length - 1) {
  console.log(`${percentageOfWorld1(population3[i])}`);
  i++;
} */

////////////////////////////////////////////////////////////////

// CODING CHALLENGE 01
/*
function calcAverage(dolphinScore1, dolphinScore2, dolphinScore3, koalaScore1, koalaScore2, koalaScore3){
  dolphinTotal = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3
  koalaTotal = (koalaScore1 + koalaScore2 + koalaScore3) / 3
}
*/

/*
function calcAverage(number1, number2, number3) {
  const total = (number1 + number2 + number3) / 3;
  return total;
}

function checkWinner() {
  const avgDolphin = calcAverage(85, 54, 41);
  const avgKoala = calcAverage(23, 34, 27);
  const winnerDeclaration = (winner) =>
    console.log(`${winner} wins (${avgDolphin} vs ${avgKoala})`);
  if (avgDolphin >= avgKoala * 2) {
    winnerDeclaration("Dolphin");
  } else if (avgKoala >= avgDolphin * 2) {
    winnerDeclaration("Koala");
  } else {
    console.log("No one wins.");
  }
}

checkWinner();
*/

// CODING CHALLENGE 2

/*
let tips = [];
let bills = [125, 555, 44];
console.log(bills);

const calcTip = function (billValue) {
  if (billValue >= 50 && billValue <= 300) {
    let tipTotal = billValue * 0.15;
    console.log(`Tip total is ${tipTotal}.`);
    return tipTotal;
  } else {
    let tipTotal = billValue * 0.2;
    console.log(`Tip total is ${tipTotal}.`);
    return tipTotal;
  }
};

tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
let total = [tips[0] + tips[1] + tips[2]];
console.log(total);
*/

// CODING CHALLENGE 3

/* const mark = {
  fullName: "Mark Miller",
  weight: 78, //kg
  height: 1.69, // meters
  calcBMI: function () {
    return this.weight / this.height ** 2;
  },
};

const john = {
  fullName: "John Smith",
  weight: 92, //kg
  height: 1.95, //meters
  calcBMI: function () {
    return this.weight / this.height ** 2;
  },
};

if (john.calcBMI() > mark.calcBMI()) {
  console.log(
    `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${
      mark.fullName
    }'s (${mark.calcBMI()})`
  );
} else if (mark.calcBMI() > john.calcBMI()) {
  console.log(
    `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${
      john.fullName
    }'s (${john.calcBMI()})`
  );
} else {
  console.log(
    `Both Mark and John have either the same BMI or the input is invalid.`
  );
}

console.log(``); */

// CODING CHALLENGE 04

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (billValue) {
  if (billValue >= 50 && billValue <= 300) {
    let tipTotal = billValue * 0.15;
    return tipTotal;
  } else {
    let tipTotal = billValue * 0.2;
    return tipTotal;
  }
};

for (let i = 0; i <= bills.length - 1; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}

console.log(tips);
console.log(totals);

// bonus -- 04

let sum = 0;

const calcAverage = function (arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    console.log("Calculating...");
    sum += arr[i];
    console.log(sum);
    if (i >= arr.length - 1) {
      console.log("Computing final answer.");
      console.log(`The average of the array is ${sum / arr.length}`);
    }
  }
};

calcAverage(totals);

////////////////////////////////////////////////////////////////

// WORKSPACE
