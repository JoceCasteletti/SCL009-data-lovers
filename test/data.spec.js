global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');


describe('filterByType', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof filterByType, 'function');
  });

  it('debería retornar "example"', () => {
    assert.equal(example(), 'example');
  });
})


describe('filterByType', () => {
  
  it('debería retornar Pikachu para "Electric"', () => {
    assert.equal(window.filterByType, (window.pokemon.pokemon,'Electric'));
  });

})