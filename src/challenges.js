// Desafio 1
function compareTrue(value1, value2) {
  let cafe = value1;
  let leite = value2;

  if (cafe && leite === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return base * height / 2;

}

// Desafio 3
function splitSentence(str) {
  return str.split(" ");

}

// Desafio 4
function concatName(str) {
  return str[str.length - 1] + ', ' + str[0];

}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties * 1);
  return points;
}

// Desafio 6
function highestCount(numbers) {

  let maior = numbers[0];
  let sum = 0;

  for (let i = 1; i < numbers.length; i += 1) {
    if (maior < numbers[i]) {
      maior = numbers[i];
    }
  }

  for (let i = 0; i < numbers.length; i += 1) {
    if (maior === numbers[i]) {
      sum += 1;
    }
  }
  return sum;
}

// Desafio 7
function catAndMouse(number, number2, number3) {
  let mouse = number;
  let cat1 = number2;
  let cat2 = number3;

  if (Math.abs((cat1 - mouse)) === 3 && Math.abs((cat2 - mouse)) === 2) {
    return 'cat2';
  }
  else if (Math.abs((cat1 - mouse)) === 6 && Math.abs((cat2 - mouse)) === 12) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}
// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
