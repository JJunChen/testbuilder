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
  let prefixLengths = [6, 4, 3, 2, 1];
  let cardLength = cardNumber.length;

  for (let prefixLength of prefixLengths) {
  	let prefix = cardNumber.slice(0, prefixLength);
  	let network = findNetworkWithPrefix(prefix, cardLength);

  	if (typeof(network) === 'string') {
  		return network;
  	}
  }
};

var findNetworkWithPrefix = function (prefix, cardLength) {
  if (['38', '39'].includes(prefix) && cardLength === 14) {
  	return 'Diner\'s Club';
  } else if (['34', '37'].includes(prefix) && cardLength === 15) {
  	return 'American Express';
  } else if ((prefix === '4') && [13, 16, 19].includes(cardLength)) {
  	return 'Visa';
  } else if (['51', '52', '53', '54', '55'].includes(prefix) && cardLength === 16) {
  	return 'MasterCard';
  } else if (['6011', '644', '645', '646', '647', '648', '649', '65'].includes(prefix) && [16, 19].includes(cardLength)) {
  	return 'Discover';
  } else if (['5018', '5020', '5038', '6304'].includes(prefix) && [12, 13, 14, 15, 16, 17, 18, 19].includes(cardLength)) {
  	return 'Maestro';
  } else if (((+prefix >= 622126 && +prefix <= 622925) || (+prefix >= 624 && +prefix <= 626) || (+prefix >= 6282 && +prefix <= 6288)) && [16, 17, 18, 19].includes(cardLength)) {
  	return 'China UnionPay';
  } else if (['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'].includes(prefix) && [16, 18, 19].includes(cardLength)) {
  	return 'Switch';
  }
};


