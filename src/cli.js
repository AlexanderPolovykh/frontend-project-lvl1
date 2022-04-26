import readlineSync from 'readline-sync';

const askUsernameAndGreetHim = () => readlineSync.question('May I have your name? ');

export default askUsernameAndGreetHim;
