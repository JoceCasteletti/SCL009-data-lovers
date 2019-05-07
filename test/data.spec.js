global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');
 const data = [
   {
     "id": 1,
     "num": "001",
       "egg": "2 km",
    "name": "Bulbasaur",
    "type": ["Grass", "Poison"]
  }, {
    "id": 52,
     "num": "052",
      "egg": "5 km",
    "name": "Meowth",
    "type": ["Normal"]
   }, {
     "id": 128,
    "num": "128",
        "egg": "5 km",
    "name": "Tauros",
     "type": ["Normal",]
   }
 ]
 describe('filterByName', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof window.filterByName,'function');
  });
  it('debería retornar Taurus para filtrar por nombre', () => {
    assert.deepEqual(window.filterByName(data, "Tauros"), [
       { 
        "id": 128,
        "num": "128",
        "egg": "5 km",
        "name": "Tauros",
        "type": [
          "Normal"
        ]
      }
    ]);
   });
 })
 
 describe('filterByEgg', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof window.filterByEgg ,'function');
  });
   it('debería retornar Bulbasaur y Charmander para filtrar por huevo de "2 km"', () => {
   assert.deepEqual(window.filterByEgg(data, "2 km"), 
   [
    {
      "id": 1,
      "num": "001",
      "egg": "2 km",
     "name": "Bulbasaur",
     "type": ["Grass", "Poison"]
   
   
    }
        ]);
    });
     })
 describe('filterByType', () => {
  
   it('debería ser una función', () => {
     assert.equal(typeof window.filterByType, 'function');
   });
 
  
   it('debería retornar Bulbasaur para filtrar por tipo "Grass"', () => {
     assert.deepEqual(window.filterByType(data, "Grass"), [{
      "id": 1,
    "num": "001",
    "name": "Bulbasaur",
    "egg": "2 km",
    "type": [ "Grass",
      "Poison"]
      }]);
    });
  });
describe('orderPokemon', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof window.orderPokemon,'function');
  });
  it('debería retornar los pokemones ordenado de la A a la Z', () => {
    assert.deepEqual(window.orderPokemon(data, "a-z"), [
       {
        "id": 1,
       "num": "001",
       "egg": "2 km",
       "name": "Bulbasaur",
       "type": [
         "Grass",
          "Poison"
        ]
      }, {
        "id": 52,
       "num": "052",
       "egg": "5 km",
      "name": "Meowth",
       "type": [
         "Normal"
       ]
     }, {
        "id": 128,
        "num": "128",
        "egg": "5 km",
        "name": "Tauros",
        "type": [
          "Normal"
        ]
      }
   ]);
  });
})
describe('orderPokemon', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof window.orderPokemon,'function');
  });
  it('debería retornar los pokemones ordenado de la Z a la A', () => {
    assert.deepEqual(window.orderPokemon(data, "za"), [
       {
        "id": 128,
        "num": "128",
        "egg": "5 km",
        "name": "Tauros",
        "type": [
          "Normal"
        ]
      }, {
          "id": 52,
         "num": "052",
         "egg": "5 km",
        "name": "Meowth",
         "type": [
           "Normal"
         ]
       }, {
        "id": 1,
       "num": "001",
       "egg": "2 km",
       "name": "Bulbasaur",
       "type": [
         "Grass",
          "Poison"
        ]
      }
    ]);
   });
 })