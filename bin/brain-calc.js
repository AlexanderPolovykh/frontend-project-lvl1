#!/usr/bin/env node

import askUsernameAndGreet from "../src/cli.js";
import { getRandomInt, gameLogic } from "../src/index.js";

const ops = ["+", "-", "*"];
const getRandomOp = () => ops[getRandomInt(0, 2)];

const calcResult = (num1, num2, op) => {
  switch (op) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    default:
      return NaN;
  }
};

const formAnswer = (str) => {
  // const answer = readlineSync.question("Your answer: ");
  const ret = Number.parseInt(str, 10);
  if (Number.isNaN(ret)) return [str, false]; // некорректный ввод!
  return [ret, true];
};

const makeQuestion = () => {
  const num1 = getRandomInt(1, 99);
  const num2 = getRandomInt(1, 99);
  const op = getRandomOp();
  const str = `${num1} ${op} ${num2}`;
  return [calcResult(num1, num2, op), str];
};

// Calc game
const name = askUsernameAndGreet();
console.log("What is the result of the expression?");
gameLogic(name, makeQuestion, formAnswer);
