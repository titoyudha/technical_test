function romanToInteger(romanString) {
  const romans = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let integer = 0;
  let prevValue = 0;

  for (let i = romanString.length - 1; i >= 0; i--) {
    const currentSymbol = romanString[i];
    const currentValue = romans[currentSymbol];

    if (currentValue < prevValue) {
      integer -= currentValue;
    } else {
      integer += currentValue;
    }

    prevValue = currentValue;
  }

  return integer;
}

// Fungsi untuk menjalankan tes
function testRomanToInteger() {
  if (romanToInteger('I') === 1) {
    console.log('Test 1 passed: I = 1');
  } else {
    console.log('Test 1 failed');
  }

  if (romanToInteger('V') === 5) {
    console.log('Test 2 passed: V = 5');
  } else {
    console.log('Test 2 failed');
  }

  if (romanToInteger('X') === 10) {
    console.log('Test 3 passed: X = 10');
  } else {
    console.log('Test 3 failed');
  }

  if (romanToInteger('MCMXCIV') === 1994) {
    console.log('Test passed: MCMXCIV = 1994');
  } else {
    console.log('Test failed');
  }
}

// Jalankan fungsi tes
testRomanToInteger();
