const { commentingExample, example1, example2, longExample } = require('./examples.js')
const { parser } = require('./parser.js')

describe('lisp comments example', function(){

   test('Should compile commenting example', () => {
     expect( parser( commentingExample + "; )") ).toBe(true)

     expect( parser( commentingExample + "; (") ).toBe(true)

     expect( parser( `; (
         ${commentingExample}
     `) ).toBe(true)
   });

   test('Should not compile commenting example', () => {
     expect( parser( commentingExample + " (") ).not.toBe(true)
   })
})

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

