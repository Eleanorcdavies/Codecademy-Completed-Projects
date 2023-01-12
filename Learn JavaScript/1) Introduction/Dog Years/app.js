//This is my age
const myAge = 31;
//step two is to save the value two to the variable earlyYears
let earlyYears = 2;
earlyYears *= 10.5;
//If I wanted to do this without the *= operator I would write:
    //earlyYears = earlyYears * 10.5
//Since we already accounted for the first two years, take the myAge variable, and subtract 2 from it.
let laterYears = myAge - 2;
//This is step 5
laterYears *= 4;
console.log(earlyYears, laterYears);
//this is step seveen
let myAgeInDogYears = earlyYears + laterYears;

let myName = "Eleanor Davies".toLowerCase();
//This is step nine
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
