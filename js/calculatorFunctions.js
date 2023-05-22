let number = "";
let firstNumber = "";
let operator = "";

const createNumber = (value) => {
  //* Caso: punto
  if (value === ".") {
    if (number === "") number += "0.";
    else {
      if (!pointBetweenNumber(number)) {
        number += value;
      }
    }
  } else {
    //* Caso: cero
    if (value === "0") {
      if (number === "" || pointBetweenNumber(number)) {
        number += "0";
      } else {
        if (number !== "0") number += value;
      }
    } else number += value; //*se concatena el numero
  }
  showNumberInScreen();
};

const showNumberInScreen = () => {
  if (firstNumber)
    document.getElementById("result").innerHTML =
      firstNumber + operator + number;
  else document.getElementById("result").innerHTML = number;
};

const operation = (op) => {
  operator = op;

  if (number !== "") {
    firstNumber += number;
    number = "";
  }
  showNumberInScreen();
};

const calculate = () => {
  if (number === "") return;
  const number1 = parseFloat(firstNumber);
  const number2 = parseFloat(number);
  let result = 0;
  switch (operator) {
    case "+":
      result = number1 + number2;
      document.getElementById("result").innerHTML = result;
      break;
    case "-":
      result = number1 - number2;
      document.getElementById("result").innerHTML = result;
      break;
    case "x":
      result = number1 * number2;
      document.getElementById("result").innerHTML = result;
      break;
    case "/":
      if (number2 !== 0) {
        result = number1 / number2;
        document.getElementById("result").innerHTML = result;
      } else {
        document.getElementById("result").innerHTML = "Error: div por 0";
      }
      break;
    default:
      break;
  }
  if (result === 0) {
    firstNumber = "";
    number = "";
    operator = "";
  } else {
    firstNumber = result.toString();
    number = "";
    operator = "";
  }
};

const deleteNumber = () => {
  if (operator) {
    if (number !== "") {
      number = number.slice(0, number.length - 1);
    } else {
      if (operator !== "") {
        operator = "";
      }
    }
  } else {
    if (firstNumber !== "") {
      firstNumber = firstNumber.slice(0, number.length - 1);
    } else {
      number = number.slice(0, number.length - 1);
    }
  }

  showNumberInScreen();
};

const reset = () => {
  firstNumber = "";
  operator = "";
  number = "";
  showNumberInScreen();
};

const pointBetweenNumber = (number) => {
  return number.includes(".");
};
