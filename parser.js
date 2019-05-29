const { example1, example2, commentingExample, longExample } = require('./examples.js');

const parser = (inputString) => {
  let compiles = true;
  let leftStack = [];
  let rightStack = [];
  const lines = inputString.split("\n");
  for( let index1 = 0; index1 < lines.length; index1++){
    if(compiles===false){break;};
    const line = lines[index1];
    for( let index2 = 0; index2 < line.length; index2++){
      const val = line[index2];
      if( val === ';' ) {
        break;
      } else if (val === '('){
        leftStack.push(val);
      } else if (val === ')'){
        if(leftStack.length > rightStack.length){
          rightStack.push(val);
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
  }
  compiles =
    (compiles === true && leftStack.length === rightStack.length)
      ? true : false;

  return compiles
}

// console.log( parser( "(" + commentingExample))
// console.log( parser( "; (" + commentingExample))
// console.log( parser( commentingExample + "; (") )
// console.log( parser( commentingExample + "; )") )

// parser(example2)
// parser(longExample)
// parser(longExample + '\(')
// parser(longExample + '\)')
// parser('\(' + longExample)
// parser('\(' + longExample)

module.exports = { parser }
