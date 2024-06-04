
## Technical test

1. Buatlah design rdbms

## SQL

To run tests, run the following command

```bash
  -- Tabel untuk menyimpan user
CREATE TABLE Users (
    UserID INT PRIMARY KEY,
    Username VARCHAR(50),
    Email VARCHAR(100)
);

-- Tabel untuk menyimpan Purchase Order
CREATE TABLE PurchaseOrders (
    PurchaseOrderID INT PRIMARY KEY,
    UserID INT,
    OrderDate DATE,
    FOREIGN KEY (UserID) REFERENCES Users (UserID)
);

-- Tabel untuk menyimpan Delivery Orders
CREATE TABLE DeliveryOrders (
    DeliveryOrderID INT PRIMARY KEY,
    PurchaseOrderID INT,
    DeliveryDate DATE,
    FOREIGN KEY (PurchaseOrderID) REFERENCES PurchaseOrders (PurchaseOrderID)
);

-- Tabel untuk menyimpan Order Items
CREATE TABLE OrderItems (
    OrderItemID INT PRIMARY KEY,
    PurchaseOrderID INT,
    ProductID INT,
    Quantity INT,
    FOREIGN KEY (PurchaseOrderID) REFERENCES PurchaseOrders (PurchaseOrderID)
);
```


## Screenshot

<img src="https://github.com/titoyudha/technical_test/blob/main/screenshot/database.png"></img> 
## Pseucdocode Romawi to integer

```bash
 FUNCTION romanToInteger(romanString)
    romans = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000}
    integer = 0
    prevValue = 0

    FOR i = length of romanString DOWNTO 1
        currentSymbol = romanString[i]
        currentValue = romans[currentSymbol]

        IF currentValue < prevValue THEN
            integer = integer - currentValue
        ELSE
            integer = integer + currentValue
        END IF

        prevValue = currentValue
    ENDFOR

    RETURN integer
ENDFUNCTION
```

## Pseucdocode Test

```bash
 TEST FUNCTION testRomanToInteger()
    ASSERT romanToInteger("I") == 1
    ASSERT romanToInteger("V") == 5
    ASSERT romanToInteger("X") == 10
    ASSERT romanToInteger("L") == 50
    ASSERT romanToInteger("C") == 100
    ASSERT romanToInteger("D") == 500
    ASSERT romanToInteger("M") == 1000

    ASSERT romanToInteger("III") == 3
    ASSERT romanToInteger("VI") == 6
    ASSERT romanToInteger("XIV") == 14
    ASSERT romanToInteger("XXV") == 25
    ASSERT romanToInteger("XL") == 40
    ASSERT romanToInteger("XC") == 90
    ASSERT romanToInteger("CM") == 900

    ASSERT romanToInteger("MCMXCIV") == 1994
    ASSERT romanToInteger("MMXXII") == 2022

    PRINT "All tests passed."
ENDFUNCTION
```

## Example in javascript

```bash
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
  if (romanToInteger("I") === 1) {
    console.log("Test 1 passed: I = 1");
  } else {
    console.log("Test 1 failed");
  }

  if (romanToInteger("V") === 5) {
    console.log("Test 2 passed: V = 5");
  } else {
    console.log("Test 2 failed");
  }

  if (romanToInteger("X") === 10) {
    console.log("Test 3 passed: X = 10");
  } else {
    console.log("Test 3 failed");
  }

  // Tambahkan lebih banyak tes di sini

  if (romanToInteger("MCMXCIV") === 1994) {
    console.log("Test passed: MCMXCIV = 1994");
  } else {
    console.log("Test failed");
  }
}

// Jalankan fungsi tes
testRomanToInteger();
```
