/*This variable will not change. The forecast today will be 239 kelvins*/
const kelvin = 293;
//Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin.
const celsius = kelvin - 273;
//Use this equation to calculate Fahrenheit- In the next step we will round the number saved to fahrenheit. 
let fahrenheit = celsius * (9/5) + 32;
//When you convert from Celsius to Fahrenheit, you often get a decimal number. This rounds down the Fahrenheit temperature
fahrenheit=Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

//Step 11
const kelvinTwo = 0;
const celsiusTwo = kelvinTwo - 273;
fahrenheit = celsiusTwo * (9/5) + 32;
fahrenheit=Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

//Step 12
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Fahrenheit`);
