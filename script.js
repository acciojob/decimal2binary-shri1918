function decimalToBinary(num) {
  // Write your code here
	if (num === 0) {
    return '0';
  }

  let binary = '';

  while (num > 0) {
    binary = (num % 2) + binary;
    num = Math.floor(num / 2);
  }

  return binary;
}
	
}

window.decimalToBinary = decimalToBinary;