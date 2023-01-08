'use strict';

// // Lecture 128: Default Parameters

// const bookings = [];

// const createBooking = function(flightNum, numPassengers = 1, price = 1.99 * numPassengers) {
//     // ES5
//     // numPassengers = numPassengers || 1;
//     // price = price || 1.99;
//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     }
//     console.log(booking);
//     bookings.push(booking);
// }

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);
// createBooking('LH123', undefined, 500);

// ------------

// // Lecture 129: How Passing Arguments work: Value vs. Reference

// const flight = 'LH234';
// const justice = {
//     name: 'Justice Pelteir',
//     passport: 24739479284
// }

// const checkIn = function(flightNum, passenger) {
//     flightNum = 'LH999';
//     passenger.name = 'Mr. ' + passenger.name;

//     if (passenger.passport === 24739479284) {
//         alert('check in')
//     } else {
//         alert('Wrong passport!')
//     }
// }

// // checkIn(flight, justice);
// // console.log(flight);
// // console.log(justice);

// // // is the same as doing...
// // const flightNum = flight;
// // const passenger = justice;

// const newPassport = function(person) {
//     person.passport = Math.trunc(Math.random() * 1000000000);
// }

// newPassport(justice);
// checkIn(flight, justice);

// Lecture 130: First-Class and Higher-Order Functions
// Complete Lecture 130 video

// ------------

// // Lecture 131: Functions Accepting Callback Functions

// const oneWord = function(str) {
//     return str.replaceAll(' ', '').toLowerCase();
// }

// const upperFirstWord = function(str) {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// }

// // Higher-order function
// const transformer = function(str, fn) {
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);

//     console.log(`Transformed by: ${fn.name}`);
// }

// transformer('JavaScript is the best!', upperFirstWord);

// transformer('JavaScript is the best!', oneWord);

// // JS uses callbacks all the time
// const high5 = function() {
//     console.log('👋');
// }

// document.body.addEventListener('click', high5);

// ['justice', 'martha', 'adam'].forEach(high5);

// ------------

// // Lecture 132: Functions Returning Functions

// const greet = function(greeting) {
//     return function(name) {
//         console.log(`${greeting} ${name}`)
//     }
// }

// const greeterHey = greet('Hey');
// greeterHey('Justice');
// greeterHey('Steven');

// greet('Hello')('Justice');

// // Challenge

// const greetArr = greeting => name => console.log(`${greeting} ${name}`);

// greetArr('Hi')('Justice');

// ------------

// // Lecture 133: The call and apply methods

// const lufthansa = {
//     airline: 'Lufthansa',
//     iataCode: 'LH',
//     bookings: [],
//     // book: function() {}
//     book(flightNum, name) {
//         console.log(
//             `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//         );
//         this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//     },
// };

// console.log(lufthansa);

// lufthansa.book(239, 'Jonas Schemdtmann');
// lufthansa.book(239, 'Justice Pelteir');

// const eurowings = {
//     airline: 'Eurowings',
//     iataCode: 'EW',
//     bookings: [],
// }

// const book = lufthansa.book;

// // DOES NOT WORK
// // book(23, 'Sarah Williams');

// // Call method
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// const swiss = {
//     airline: 'Swiss Air Lines',
//     iataCode: 'LX',
//     bookings: []
// }

// book.call(swiss, 583, 'Mary Cooper');
// console.log(swiss);

// // Apply method
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// ------------

// // Lecture 134: The bind Method

// // Bind Method
// // book.call(eurowings, 23, 'Sarah Williams');

// // Previous Lecture Code ---

// const lufthansa = {
//     airline: 'Lufthansa',
//     iataCode: 'LH',
//     bookings: [],
//     // book: function() {}
//     book(flightNum, name) {
//         console.log(
//             `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//         );
//         this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//     },
// };

// console.log(lufthansa);

// lufthansa.book(239, 'Jonas Schemdtmann');
// lufthansa.book(239, 'Justice Pelteir');

// const eurowings = {
//     airline: 'Eurowings',
//     iataCode: 'EW',
//     bookings: [],
// }

// const book = lufthansa.book;

// // DOES NOT WORK
// // book(23, 'Sarah Williams');

// // Call method
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// const swiss = {
//     airline: 'Swiss Air Lines',
//     iataCode: 'LX',
//     bookings: []
// }

// book.call(swiss, 583, 'Mary Cooper');
// console.log(swiss);

// // Apply method
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// // Previous Lecture Code ---

// // RELEVANT LECTURE CODE

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Steven Williams');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Justice Pelteir');
// bookEW23('Martha Stewart');

// // With event listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function() {
//     console.log(this);

//     this.planes++
//     console.log(this.planes);
// };

// // lufthansa.buyPlane();

// document.querySelector('.buy').addEventListener
// ('click', lufthansa.buyPlane.bind(lufthansa))

// // Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// // const addTax = (rate, value) => value + value * rate;
// console.log(addVAT(100));
// console.log(addVAT(23));

// const addTaxRate = function(rate) {
//     return function(value) {
//         return value + value * rate;
//     }
// }
// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));

// ------

// // Lecture 135: Coding Challenge #1

// // Coding Challenge #1

// /* 
// Let's build a simple poll app!

// A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

// Here are your tasks:

// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
//   1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
//         What is your favourite programming language?
//         0: JavaScript
//         1: Python
//         2: Rust
//         3: C++
//         (Write option number)
  
//   1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
// 4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

// HINT: Use many of the tools you learned about in this and the last section 😉

// BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

// BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

// GOOD LUCK 😀
// */

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     // Get answer
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     console.log(answer);

//     // Register answer
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     this.displayResults();
//     this.displayResults('string');
//   },

//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       // Poll results are 13, 2, 4, 1
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// // [5, 2, 3]
// // [1, 5, 3, 9, 6, 1]

// ------------

// // Lecture 136: Immediately Invoked Function Expressions (IIFE)

// const runOnce = function() {
//     console.log('This will never run again');
// };
// runOnce();

// // IIFE - Functions that are called immediately
// (function(){
//     console.log('This will never run again');
//     const isPrivate = 23;
// })();

// // console.log(isPrivate);

// (() => console.log('This will ALSO never run again'))();

// {
//     const isPrivate = 23;
//     var notPrivate = 46;
// }

// // console.log(isPrivate);
// console.log(notPrivate);

// ------------

// // Lecture 137: Closures

// const secureBooking = function(){
//     let passengerCount = 0;

//     return function(){
//         passengerCount++;
//         console.log(`${passengerCount} passengers`);
//     }
// }

// const booker = secureBooking();

// booker(); // 1 passenger
// booker(); // 2 passenger
// booker(); // 3 passenger

// console.dir(booker);

// ------------

// // Lecture 138: More Closure Examples

// let f;

// const g = function(){
//     const a = 23;
//     f = function(){
//         console.log(a * 2);
//     };
// };

// const h = function(){
//     const b = 777;
//     f = function(){
//         console.log(b * 2);
//     };
// }

// g();
// f();

// // Re-assigning f function
// h();
// f();
// console.dir(f);

// // Example 2
// const boardPassengers = function(n, wait){
//     const perGroup = n / 3;

//     setTimeout(function(){
//         console.log(`We are now boarding all ${n} passengers`);
//         console.log(`There are 3 groups, each with ${perGroup} passengers`)
//     }, wait * 1000);

//     console.log(`Will start boarding in ${wait} seconds`);
// }

// const perGroup = 1000;
// boardPassengers(180, 3);

// // setTimeout(function(){
// //     console.log('TIMER');
// // }, 1000);