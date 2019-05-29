const { example1, example2, longExample } = require('./examples.js') 
describe('example1', function(){
   test('Should compile example 1', () => {
     expect(true).toBe(true)
   });
 
   test('Should not compile example 1', () => {
     expect(true).toBe(true)
   });
})

describe('example2', function(){
  test('Should comile example 2', () => {
    expect(true).toBe(true)
  });
  test('Should not comile example 2', () => {
    expect(true).toBe(true)
  });
})

describe('example3', function(){
  const example = longExample
  test('Should compile example 3', () => {
    expect(true).toBe(true)
  });
  test('Should not compile example 3', () => {
    expect(true).toBe(true)
  });
})

