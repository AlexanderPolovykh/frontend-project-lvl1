#!/usr/bin/env node

import askUsernameAndGreet from "../src/cli.js";
import { getRandomInt, gameLogic } from "../src/index.js";

const getGCD = (num1, num2) => {
  const maxnum = Math.max(num1, num2);
  const minnum = Math.min(num1, num2);
  if (maxnum % minnum === 0) return minnum;
  for (let div = Math.floor(minnum / 2); div > 1; div -= 1) {
    if (minnum % div === 0) {
      if (maxnum % div === 0) return div;
    }
  }
  return 1;
};

const formAnswer = (str) => {
  const ret = Number.parseInt(str, 10);
  if (Number.isNaN(ret)) return [str, false]; // некорректный ввод!
  return [ret, true];
};

const makeQuestion = () => {
  const num1 = getRandomInt(3, 100);
  const num2 = getRandomInt(3, 100);
  const str = `${num1} ${num2}`;
  return [getGCD(num1, num2), str];
};

// GCD game
const name = askUsernameAndGreet();
console.log('Find the greatest common divisor of given numbers.');
gameLogic(name, makeQuestion, formAnswer);
