import readlineSync from 'readline-sync';

export const getRandomInt = (minv, maxv) => Math.floor(Math.random() * (maxv - minv + 1)) + minv;

export const gameLogic = (name, makeQuestion, formAnswer) => {
  let result = true;
  let answer;
  let isInputCorrect = true;
  let rightAnswer;
  let str;
  for (let idx = 0; idx < 3; idx += 1) {
    // задать вопрос
    let strQuestion = '';
    [rightAnswer, strQuestion] = makeQuestion();
    console.log(`Question: ${strQuestion}`);
    // получить ответ
    str = readlineSync.question('Your answer: ');
    [answer, isInputCorrect] = formAnswer(str);
    // проверить ответ
    result = result && isInputCorrect && rightAnswer === answer;
    if (!result) break;
    else console.log('Correct!');
  }
  if (result) console.log(`Congratulations, ${name}!`);
  else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
  }
};

// export default gameLogic;
