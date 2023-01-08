'use strict';

// Lecture 128: Default Parameters

const bookings = [];

const createBooking = function(flightNum, numPassengers = 1, price = 1.99 * numPassengers) {
    // ES5
    // numPassengers = numPassengers || 1;
    // price = price || 1.99;
    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 500);