const output = document.getElementById('output');
const range = document.getElementById('range');
const upper = document.getElementById('upper');
const number = document.getElementById('number');
const symbols = document.getElementById('symbols');
const btn = document.getElementById('btn');
const form = document.getElementById('my-form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const rangeValue = range.value;
  const upperChecked = upper.checked;
  const numberChecked = number.checked;
  const symbolsChecked = symbols.checked;
  const password = generatePassword(
    rangeValue,
    upperChecked,
    numberChecked,
    symbolsChecked
  );
  output.innerText = password;
});

const lowerCode = arrayFromLowToHigh(97, 122);
const upperCode = arrayFromLowToHigh(65, 90);
const numberCode = arrayFromLowToHigh(48, 57);
const symbolsCode = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));

function generatePassword(range, upper, number, symbols) {
  let charCodes = lowerCode;
  if (upper) charCodes = charCodes.concat(upperCode);
  if (number) charCodes = charCodes.concat(numberCode);
  if (symbols) charCodes = charCodes.concat(symbolsCode);
  const password = [];
  for (let i = 0; i < range; i++) {
    const char = charCodes[Math.floor(Math.random() * charCodes.length)];
    password.push(String.fromCharCode(char));
  }
  return password.join('');
}

function arrayFromLowToHigh(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}
