const { example1, example2, longExample } = require('./examples.js');

const parser = (inputString) => {
  const strLength = inputString.length;
  let leftStack = [];
  let rightStack = [];
  console.log({ length: inputString.length});
  for( let i = 0; i < strLength; i++){
    console.log(
      inputString[i],
      inputString[i] === '\(',
      inputString[i] === '\)');
  }
}

parser(example1)
