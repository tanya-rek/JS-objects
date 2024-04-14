// 1. Create an object that describes a car (manufacturer, model, year of release,
//average speed) and the following methods for working with this object:
// A method that displays the car info
// A method for counting a time frame necessary to cover a given distance with the
//average speed. Note that every 4 hours the driver has to take a 1-hour break.
/*
let yourDistance = Number(prompt("Please write the needed distance in km."));

const car1 = {
  type: "SUV",
  manufacturer: "Chrysler",
  model: "Jeep Wrangler",
  yearOfRelease: 2024,
  averageSpeed: 90,
  displayCarInfo() {
    console.log(
      `This is ${this.model} ${this.type} made in  ${this.yearOfRelease}, manufactured by ${this.manufacturer}. It has an average speed of ${this.averageSpeed}`
    );
  },

  countTime(distance) {
    let baseTime = distance / this.averageSpeed;
    const breakTime = Math.floor(baseTime / 4);
    let finalTime = baseTime + breakTime;
    return finalTime.toFixed(2);
  },
};

car1.displayCarInfo();
console.dir(car1.countTime(yourDistance));
*/

// 2. Create an object that contains separately the numerator and the denominator
//of a fraction, and the following functions for working with this object:

// A function for adding two fraction objects.
// A function for subtracting two fraction objects.
// A function for multiplying two fraction objects.
// A function for dividing two fraction objects.
// A function for simplifying a fraction object.
/*
const fractionNumber1 = {
  numerator: 5,
  denominator: 6,
};

let fractionNumber2 = { ...fractionNumber1, numerator: 3, denominator: 4 };

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

let sum = (fractionNum1, fractionNum2) => {
  const numerator =
    fractionNum1.numerator *
      (lcm(fractionNum2.denominator, fractionNum1.denominator) /
        fractionNum1.denominator) +
    fractionNum2.numerator *
      (lcm(fractionNum1.denominator, fractionNum2.denominator) /
        fractionNum2.denominator);
  const denominator = lcm(fractionNum1.denominator, fractionNum2.denominator);
  const common = gcd(numerator, denominator);
  return {
    numerator: numerator / common,
    denominator: denominator / common,
  };
};

const resultSum = sum(fractionNumber1, fractionNumber2);
console.log(resultSum);

let subtraction = (frNum1, frNum2) => {
  const numerator =
    frNum1.numerator *
      (lcm(frNum2.denominator, frNum1.denominator) / frNum1.denominator) -
    frNum2.numerator *
      (lcm(frNum1.denominator, frNum2.denominator) / frNum2.denominator);
  const denominator = lcm(frNum1.denominator, frNum2.denominator);
  const common = gcd(numerator, denominator);
  return {
    numerator: numerator / common,
    denominator: denominator / common,
  };
};

const resultSubstr = subtraction(fractionNumber1, fractionNumber2);
console.log(resultSubstr);

let simplify = (numerator, denominator) => {
  let maxDivisor = 1;

  for (let i = 1; i <= numerator; i++) {
    if (numerator % i === 0 && denominator % i === 0) {
      maxDivisor = i;
    }
  }
  return {
    numerator: numerator / maxDivisor,
    denominator: denominator / maxDivisor,
  };
};

let multiplying = (frNum1, frNum2) => {
  const numerator = frNum1.numerator * frNum2.numerator;
  const denominator = frNum1.denominator * frNum2.denominator;
  let simplyfied = simplify(numerator, denominator);
  return {
    numerator: simplyfied.numerator,
    denominator: simplyfied.denominator,
  };
};

const resultMultipl = multiplying(fractionNumber1, fractionNumber2);
console.log(resultMultipl);

let dividing = (frNum1, frNum2) => {
  const numerator = frNum1.numerator * frNum2.denominator;
  const denominator = frNum1.denominator * frNum2.numerator;
  let simplyfied = simplify(numerator, denominator);
  return {
    numerator: simplyfied.numerator,
    denominator: simplyfied.denominator,
  };
};

const resultDividing = dividing(fractionNumber1, fractionNumber2);
console.log(resultDividing);
*/

// 3. Create an object that describes time (hours, minutes, seconds), and the
//following methods for working with this object:

// A method for displaying the time.
// A method for changing the time by a given amount of seconds.
// A method for changing the time by a given amount of minutes.
// A method for changing the time by a given amount of hours.
// Note that in the last three methods changing one part may influence another.
//For example, if we add 30 seconds to «20:30:45», we should
//get «20:31:15», not «20:30:75».
/*
const someTime = {
  hours: 10,
  minutes: 25,
  seconds: 45,
  displayTime() {
    console.log(`The time is ${this.hours}:${this.minutes}:${this.seconds}`);
  },
  setSomeTime(someDate) {
    this.hours = someDate.getHours();
    this.minutes = someDate.getMinutes();
    this.seconds = someDate.getSeconds();
  },
  changeTimeInSec(numberOfSeconds) {
    let someDate = new Date(2011, 0, 1, this.hours, this.minutes, this.seconds);
    someDate.setSeconds(someDate.getSeconds() + numberOfSeconds);
    this.setSomeTime(someDate);
  },
  changeTimeInMin(numberOfMinutes) {
    let someDate = new Date(2011, 0, 1, this.hours, this.minutes, this.seconds);
    someDate.setMinutes(someDate.getMinutes() + numberOfMinutes);
    this.setSomeTime(someDate);
  },
  changeTimeInHours(numberOfHours) {
    let someDate = new Date(2011, 0, 1, this.hours, this.minutes, this.seconds);
    someDate.setHours(someDate.getHours() + numberOfHours);
    this.setSomeTime(someDate);
  },
};

someTime.displayTime();
someTime.changeTimeInSec(51);
someTime.displayTime();
someTime.changeTimeInMin(61);
someTime.displayTime();
someTime.changeTimeInHours(3);
someTime.displayTime();
*/
