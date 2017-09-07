// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  let prefix = cardNumber[0];
  let length = cardNumber.length;

  if (prefix === '3') {
  	prefix = cardNumber.slice(0, 2);
  } else if (prefix === '5') {
  	if (cardNumber[1] === '0') {
  		prefix = cardNumber.slice(0, 4);
  	} else {
  		prefix = cardNumber.slice(0, 2);
  	}
  } else if (prefix === '6') {
  	if (cardNumber[1] === '0' || cardNumber[1] === '3') {
  		prefix = cardNumber.slice(0, 4);
  	} else if (cardNumber[1] === '4') {
		prefix = cardNumber.slice(0, 3);
  	} else if (cardNumber[1] === '5') {
  		prefix = cardNumber.slice(0, 2);
  	}
  }

  if (['38', '39'].includes(prefix) && length === 14) {
  	return 'Diner\'s Club';
  } else if (['34', '37'].includes(prefix) && length === 15) {
  	return 'American Express';
  } else if ((prefix === '4') && [13, 16, 19].includes(length)) {
  	return 'Visa';
  } else if (['51', '52', '53', '54', '55'].includes(prefix) && length === 16) {
  	return 'MasterCard';
  } else if (['6011', '644', '645', '646', '647', '648', '649', '65'].includes(prefix) && [16, 19].includes(length)) {
  	return 'Discover';
  } else if (['5018', '5020', '5038', '6304'].includes(prefix) && [12, 13, 14, 15, 16, 17, 18, 19].includes(length)) {
  	return 'Maestro';
  }
};


