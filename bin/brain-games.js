#!/usr/bin/env node

import askUsernameAndGreetHim from '../src/cli.js';
// import askAndGreet from '../src/cli.js';
// import readlineSync from "readline-sync";

console.log('Welcome to the Brain Games!');
// const name = readlineSync.question("May I have your name? ");
const name = askUsernameAndGreetHim();
console.log(`Hello, ${name}!`);
