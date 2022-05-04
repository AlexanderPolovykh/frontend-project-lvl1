#!/usr/bin/env node

import askUsernameAndGreet from "../src/cli.js";
import { getRandomInt, gameLogic } from '../src/index.js';

const isPrime = (num) => {
  if (num === 2 || num === 3) return 'yes';
  if (num % 2 === 0) return 'no';
  for (let div = 3; div <= num / 2; div += 2) {
    if (num % div === 0) return 'no';
  }
  return 'yes';
};

const formAnswer = (str) => {
  const ret = str.toLowerCase();
  if (ret !== "yes" && ret !== "no") return [str, false]; // некорректный ввод!
  return [ret, true];
};

const makeQuestion = () => {
  const rndInt = getRandomInt(1, 100);
  return [isPrime(rndInt), `${rndInt}`];
};

// Even game
const name = askUsernameAndGreet();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
gameLogic(name, makeQuestion, formAnswer);
