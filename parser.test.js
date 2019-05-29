const { example1, example2, longExample } = require('./examples.js')
const { parser } = require('./parser.js')
// parser(example2)
// parser(longExample)
describe('example1', function(){
   test('Should compile example 1', () => {
     expect(parser(example1)).toBe(true)
   });

   test('Should not compile example 1', () => {
    expect( parser(example1 + '\(') ).not.toBe(true)
    expect( parser(example1 + '\)') ).not.toBe(true)
    expect( parser(example1 + '\(') ).not.toBe(true)
    expect( parser('\(' + example1) ).not.toBe(true)
    expect( parser('\(' + example1)  ).not.toBe(true)
   });
})

describe('example2', function(){
  test('Should compile example 2', () => {
    expect( parser(example2) ).toBe(true)
  });
  test('Should not compile example 2', () => {
    expect( parser(example2 + '\(') ).not.toBe(true)
    expect( parser(example2 + '\)') ).not.toBe(true)
    expect( parser(example2 + '\(') ).not.toBe(true)
    expect( parser('\(' + example2) ).not.toBe(true)
    expect( parser('\(' + example2)  ).not.toBe(true)
  });
})

describe('example3', function(){
  const example = longExample
  test('Should compile example 3', () => {
    expect( parser(longExample) ).toBe(true)
  });
  test('Should not compile example 3', () => {
    expect( parser(longExample + '\(') ).not.toBe(true)
    expect( parser(longExample + '\)') ).not.toBe(true)
    expect( parser(longExample + '\(') ).not.toBe(true)
    expect( parser('\(' + longExample) ).not.toBe(true)
    expect( parser('\(' + longExample)  ).not.toBe(true)
  });
})

