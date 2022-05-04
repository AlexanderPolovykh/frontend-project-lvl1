import askUsernameAndGreet from '../src/cli.js';
import { getRandomInt, gameLogic } from '../src/index.js';

const formAnswer = (str) => {
  const ret = Number.parseInt(str, 10);
  if (Number.isNaN(ret)) return [str, false]; // некорректный ввод!
  return [ret, true];
};

const makeQuestion = () => {
  const beginEl = getRandomInt(1, 20); // начало последовательности
  const step = getRandomInt(1, 10); // шаг последовательности
  const hidden = getRandomInt(0, 9); // элемент, который скрыт (нужно угадать)
  const arr = new Array(10);
  let str = '';
  for (let idx = 0; idx < 10; idx += 1) {
    arr[idx] = beginEl + step * idx;
    if (idx !== hidden) str += `${arr[idx]} `;
    else str += '.. ';
  }
  return [arr[hidden], str];
};

export default () => {
  // Progression game
  const name = askUsernameAndGreet();
  console.log('What number is missing in the progression?');
  gameLogic(name, makeQuestion, formAnswer);
};
