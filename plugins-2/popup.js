// popup.js
document.addEventListener('DOMContentLoaded', function() {
    const decimalInput = document.getElementById('decimal');
    const binaryInput = document.getElementById('binary');
    const octalInput = document.getElementById('octal');
    const hexadecimalInput = document.getElementById('hexadecimal');
  
    decimalInput.addEventListener('input', function() {
      const decimalValue = decimalInput.value.trim();
      if (decimalValue === '') {
        binaryInput.value = '';
        octalInput.value = '';
        hexadecimalInput.value = '';
      } else {
        const binaryValue = decimalToBase(decimalValue, 2);
        const octalValue = decimalToBase(decimalValue, 8);
        const hexadecimalValue = decimalToBase(decimalValue, 16);
        binaryInput.value = binaryValue;
        octalInput.value = octalValue;
        hexadecimalInput.value = hexadecimalValue;
      }
    });
  
    binaryInput.addEventListener('input', function() {
      const binaryValue = binaryInput.value.trim();
      const decimalValue = baseToDecimal(binaryValue, 2);
      decimalInput.value = decimalValue;
      const octalValue = decimalToBase(decimalValue, 8);
      octalInput.value = octalValue;
      const hexadecimalValue = decimalToBase(decimalValue, 16);
      hexadecimalInput.value = hexadecimalValue;
    });
  
    octalInput.addEventListener('input', function() {
      const octalValue = octalInput.value.trim();
      const decimalValue = baseToDecimal(octalValue, 8);
      decimalInput.value = decimalValue;
      const binaryValue = decimalToBase(decimalValue, 2);
      binaryInput.value = binaryValue;
      const hexadecimalValue = decimalToBase(decimalValue, 16);
      hexadecimalInput.value = hexadecimalValue;
    });
  
    hexadecimalInput.addEventListener('input', function() {
      const hexadecimalValue = hexadecimalInput.value.trim();
      const decimalValue = baseToDecimal(hexadecimalValue, 16);
      decimalInput.value = decimalValue;
      const binaryValue = decimalToBase(decimalValue, 2);
      binaryInput.value = binaryValue;
      const octalValue = decimalToBase(decimalValue, 8);
      octalInput.value = octalValue;
    });
  });
  
  function decimalToBase(decimal, base) {
    const num = parseInt(decimal, 10);
    if (isNaN(num)) return '';
    return num.toString(base).toUpperCase();
  }
  
  function baseToDecimal(value, base) {
    if (!value) return '';
    return parseInt(value, base).toString(10);
  }
  