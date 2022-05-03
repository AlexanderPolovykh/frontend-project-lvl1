#!/usr/bin/env node

import askUsernameAndGreet from "../src/cli.js";
import gameLogic from "../src/index.js";

const getRandomInt = () => Math.floor(Math.random() * 100); // от 1 до 100

const ops = ['+', '-', '*'];
const getRandomOp = () => ops[Math.round(Math.random() * 2)];

const calcResult = (num1, num2, op) => {
  switch (op) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: return NaN;
  }
};

const formAnswer = (str) => {
  // const answer = readlineSync.question("Your answer: ");
  const ret = Number.parseInt(str, 10);
  if (Number.isNaN(ret)) return [str, false]; // некорректный ввод!
  return [ret, true];
};

const makeQuestion = () => {
  const num1 = getRandomInt();
  const num2 = getRandomInt();
  const op = getRandomOp();
  const str = `${num1} ${op} ${num2}`;
  return [calcResult(num1, num2, op), str];
};

// Calc game
const name = askUsernameAndGreet();
console.log('What is the result of the expression?');
gameLogic(name, makeQuestion, formAnswer);
