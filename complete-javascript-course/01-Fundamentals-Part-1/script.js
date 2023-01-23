const sectionDivider = "--------------------";

// ASSIGNMENT 1

/* 
let country = "Philippines";
let continent = "South East Asia";
let populationMillion = 109.6 + " Million";

console.log(country);
console.log(continent);
console.log(populationMillion);

console.log(sectionDivider);
*/

// ASSIGNMENT 2

/*
let isIsland = true;
let language;

console.log(typeof isIsland);

console.log(typeof populationMillion);
console.log(typeof country);
console.log(typeof language);

console.log(sectionDivider);
*/

// ASSIGNMENT 3 --- base

/*
language = "Filipino";
const country = "Philippines";
const continent = "South East Asia";
let population = 109.6;
const isIsland = true;
*/

// ASSIGNMENT 4

/*let x = population / 2;
console.log(x);
x++;
console.log(x);
console.log(x > 6);
console.log(33 > x);
let description =
  country +
  " is in " +
  continent +
  " and its " +
  population +
  " million people speak " +
  language;
console.log(description);*/

// ASSIGNMENT 5

/*const newDescription = `${country} is in ${continent} and its ${population} million people speak ${language}.`;
console.log(newDescription);
*/

// ASSIGNMENT 6

/*
if (population > 33) {
  console.log(`${country} is above average.`);
} else {
  console.log(`${country} is below average.`);
}
*/

// ASSIGNMENT 7

/*
console.log("9" - "5"); //4
console.log("19" - "13" + "17"); // 617
console.log("19" - "13" + 17); // 23
console.log("123" < 57); // false
console.log(5 + 6 + "4" + 9 - 4 - 2); // 1143
*/

// ASSIGNMENT 8

/*
const numNeighbours = Number(
  prompt(`How many neighbors does your country have?`)
);

if (numNeighbours === 1) {
  console.log(`Only 1 border!`);
} else if (numNeighbours > 1) {
  console.log(`More than one border!`);
} else {
  console.log(`No borders!`);
}
*/

// ASSIGNMENT 9

/*
if (language === "English" && population > 50 && !isIsland) {
  console.log(`You should live in ${country}`);
} else {
  console.log(`Get out of the ${country}`);
}
*/

// ASSIGNMENT 10

/*
const givenLanguage = "filipino";

switch (givenLanguage) {
  case "chinese":
  case "mandarin":
    console.log("MOST native speakers");
    break;
  case "spanish":
    console.log("Second place in number of speakers");
    break;
  case "english":
    console.log("Third place in number of speakers");
    break;
  case "hindi":
    console.log("4th place");
    break;
  case "arabic":
    console.log("5th place");
    break;
  default:
    console.log("Language is great too :/");
}
*/

// ASSIGNMENT 11

/*
const population = 130;

const populationCount = population > 33 ? "above" : "below";

console.log(`Philippines is ${populationCount} average`);
*/

////////////////////////////////////////////////////////////////

// Coding Challenge No. 1

/*
let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;
let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;
let markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);

markWeight = 95;
markHeight = 1.88;
johnWeight = 85;
johnHeight = 1.76;
markBMI = markWeight / markHeight ** 2;
johnBMI = johnWeight / johnHeight ** 2;
markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);

// Coding Challenge No. 2

if (markHigherBMI === true) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI}).`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI}.`);
}
*/

// Coding Challenge No. 3

/*
const dolphinScoreAVG = (97 + 112 + 101) / 3;
const koalaScoreAVG = (109 + 95 + 106) / 3;

if (dolphinScoreAVG > koalaScoreAVG && dolphinScoreAVG > 99) {
  console.log(`Dolphins wins!`);
} else if (
  dolphinScoreAVG === koalaScoreAVG &&
  dolphinScoreAVG > 99 &&
  koalaScoreAVG > 99
) {
  console.log(`Draw!`);
} else if (koalaScoreAVG > 99) {
  console.log(`Koala wins!`);
} else {
  console.log(`No winners.`);
}

*/

// Coding Challenge No. 4

const billValue = 430;
const tipValue =
  billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;

console.log(
  `The bill is ${billValue}, thus the tip value is ${tipValue} for a total of ${
    billValue + tipValue
  }`
);

///////////////////////////////////////////////////////////////////////////////

// TEST AREA

// const againstGod = true

//if(againstGod!=false{
//  console.log("I love god.")
//} else {
//  console.log("I am now atheist.")
//};

/*
const day = "thursday";

switch (day) {
  case "monday":
    console.log(`Day received: Monday`);
    break;
  case "tuesday":
    console.log("Day received: Tuesday");
    break;
  case "wednesday":
  case "thursday":
    console.log("Day received: Wednesday & Thursday");
    break;
  case "friday":
    console.log("Day received: Friday");
    break;
  case "saturday":
  case "sunday":
    console.log("Time to sleep...");
    break;
  default:
    console.log("Day not received. Initiating death mode.");
}
*/
