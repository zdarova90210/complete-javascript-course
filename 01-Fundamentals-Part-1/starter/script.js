////////////////////////////////////
// Linking a JavaScript File
// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

////////////////////////////////////
// Values and Variables
// console.log("Jonas");
// console.log(23);

////////////////////////////////////
// let, const and var
// let age = 30;
// age = 31;

// const birthYear = 1991;
// birthYear = 1990;
// const job;
// var job = 'programmer';
// job = 'teacher'
// lastName = 'Schmedtmann';
// console.log(lastName);

////////////////////////////////////
// Basic operators

// Math operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);
// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//  2 ** 3 means 2 to the power of 3 = 2 * 2 * 2;
// const firstName = 'Jonas';
// const lastName = 'Schmedtmann';
// console.log(firstName + ' ' + lastName);

// Assignment operators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1 = 101
// x-- // x = x - 1 = 100
// x-- // x = x - 1 = 99
// console.log(x);

// Comparison operators
// console.log(ageJonas > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;
// console.log(now - 1991 > now - 2018);

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
//
// console.log(now - 1991 > now - 2018);
//
// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, x = 10
// console.log(x, y);
//
// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

////////////////////////////////////
// Coding Challenge #1

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;
//
// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;
//
// console.log(`Mark's BMI: ${BMIMark}, John's BMI: ${BMIJohn}, is Mark's BMI higher: ${markHigherBMI}`);


////////////////////////////////////
// Strings and Template Literals
// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;
//
// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
// console.log(jonas);
//
// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);
//
// console.log(`Just a regular string...`);
//
// console.log('String with \n\
// multiple \n\
// lines');
//
// console.log(`String
// multiple
// lines`);


////////////////////////////////////
// Taking Decisions: if / else Statements
// const age = 15;
//
// if (age >= 18) {
//     console.log('Sarah can start driving license 🚗');
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }
//
// const birthYear = 2012;
//
// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);


////////////////////////////////////
// Coding Challenge #2
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 78;
// const heightJohn = 1.69;
//
// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark}) is higher than Jhon's (${BMIJohn})!`);
// } else if (BMIMark < BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark}) is lower than Jhon's (${BMIJohn})!`);
// } else {
//     console.log(`Mark's BMI (${BMIMark}) is equal Jhon's (${BMIJohn})!`);
// }


////////////////////////////////////
// Type Conversion and Coercion

// type conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);
//
// console.log(Number('Jonas'));
// console.log(typeof NaN);
//
// console.log(String(23), 23);
//
// // type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' / '2');
// console.log('23' > '18');
//
// let n = '1' + 1; // '11'
// n = n - 1;
// console.log(n);


////////////////////////////////////
// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));
//
// const money = 100;
// if (money) {
//     console.log("Don't spend it all ;)");
// } else {
//     console.log('You should get a job!');
// }
//
// let height = 0;
// if (height) {
//     console.log('YAY! Height is defined');
// } else {
//     console.log('Height is UNDEFINED');
// }


////////////////////////////////////
// Equality Operators: == vs. ===
// const age = '18';
// if (age === 18) console.log('You just became an adult :D (strict)');
//
// if (age == 18) console.log('You just became an adult :D (loose)');
//
// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);
//
// if (favourite === 23) { // 22 === 23 -> FALSE
//     console.log('Cool! 23 is an amzaing number!')
// } else if (favourite === 7) {
//     console.log('7 is also a cool number')
// } else if (favourite === 9) {
//     console.log('9 is also a cool number')
// } else {
//     console.log('Number is not 23 or 7 or 9')
// }
//
// if (favourite !== 23) console.log('Why not 23?');
