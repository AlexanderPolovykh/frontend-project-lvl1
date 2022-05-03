#!/usr/bin/env node

import askUsernameAndGreet from "../src/cli.js";
import gameLogic from '../src/index.js';

const getRandomInt = () => Math.floor(Math.random() * 100); // от 1 до 100

const isEven = (num) => (num % 2 === 0 ? "yes" : "no");

const formAnswer = (str) => {
  const ret = str.toLowerCase();
  if (ret !== "yes" && ret !== "no") return [str, false]; // некорректный ввод!
  return [ret, true];
};

const makeQuestion = () => {
  const rndInt = getRandomInt();
  return [isEven(rndInt), `${rndInt}`];
};

// checkEven game
const name = askUsernameAndGreet();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
gameLogic(name, makeQuestion, formAnswer);
