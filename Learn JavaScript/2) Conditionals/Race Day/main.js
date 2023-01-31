let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = false;
let runnerAge = 18;

if ( registeredEarly && runnerAge > 18 ) {
  raceNumber += 1000;
} else if ( runnerAge > 18 && registeredEarly ) {
  console.log(`You will run at 9:30am, and you will have the race number ${raceNumber}.`);
} else if ( runnerAge > 18 && registeredEarly !== true ) {
  console.log(`Late adults run at 11:00 am. You will race at 11:00am and you will have the race number ${raceNumber}.`);
} else if ( runnerAge < 18 ) {
  console.log (`Youth registrants run at 12:30 pm (regardless of registration), and your race number is ${raceNumber}.`);
} else if (runnerAge === 18){
  console.log("Please see the registration desk.");
}
