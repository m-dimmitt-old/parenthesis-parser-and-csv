const { example1, example2, longExample } = require('./examples.js');

const parser = (inputString) => {
  let compiles = true;
  let leftStack = [];
  let rightStack = [];

  const strLength = inputString.length;

  for( let i = 0; i < strLength; i++){
    const val = inputString[i];
    if( val === '\(' ) {
      leftStack.push(val)
    } else if (val === '\)'){
      if(leftStack.length > rightStack.length){
        rightStack.push(val)
      }
      else {
        compiles=false;
        break;
      }
    }
    else {
      continue;
    }
  }
  compiles =
    (compiles === true && leftStack.length === rightStack.length)
      ? true : false;

  return compiles
}

// parser(example1)
// parser(example2)
// parser(longExample)
// parser(longExample + '\(')
// parser(longExample + '\)')
// parser('\(' + longExample)
// parser('\(' + longExample)

module.exports = { parser }
