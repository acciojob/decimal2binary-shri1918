function convertToBinary() {
  const decimalInput = document.getElementById('decimalInput');
  const binaryResult = document.getElementById('binaryResult');

  const decimalNumber = parseInt(decimalInput.value);
  const binaryNumber = decimalToBinary(decimalNumber);

  binaryResult.textContent = `Binary: ${binaryNumber}`;
}

function decimalToBinary(num) {
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

window.decimalToBinary = decimalToBinary;
