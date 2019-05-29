const { example1, example2, longExample } = require('./examples.js');

const parser = (inputString) => {
  let compiles = true;
  const strLength = inputString.length;
  let leftStack = [];
  let rightStack = [];
  console.log({ length: inputString.length});
  for( let i = 0; i < strLength; i++){
    const val = inputString[i];
    console.log(
      val,
      val === '\(',
      val === '\)');
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
  console.log({compiles})
}

parser(example1)
