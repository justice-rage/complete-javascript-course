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