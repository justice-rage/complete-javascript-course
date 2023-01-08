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