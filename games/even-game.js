import askUsernameAndGreet from "../src/cli.js";
import { getRandomInt, gameLogic } from "../src/index.js";

const minRandNum = 1;
const maxRandNum = 99;

const isEven = (num) => num % 2 === 0;

const yesOrNo = (result) => (result ? "yes" : "no");

const formAnswer = (str) => {
  const ret = str.toLowerCase();
  if (ret !== "yes" && ret !== "no") return [str, false]; // некорректный ввод!
  return [ret, true];
};

const makeQuestion = () => {
  const rndInt = getRandomInt(minRandNum, maxRandNum);
  return [yesOrNo(isEven(rndInt)), `${rndInt}`];
};

export default () => {
  // Even game
  const name = askUsernameAndGreet();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  gameLogic(name, makeQuestion, formAnswer);
};
