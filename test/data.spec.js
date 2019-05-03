global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

const data = [
  {
    "id": 1,
    "num": "001",
    "name": "Bulbasaur",
    "type": [
      "Grass",
      "Poison"
    ]
  }, {
    "id": 52,
    "num": "052",
    "name": "Meowth",
    "type": [
      "Normal"
    ]
  }, {
    "id": 128,
    "num": "128",
    "name": "Tauros",
    "type": [
      "Normal",
    ]
  }
]


describe('filterByType', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof window.data.filterByType, 'function');
  });

 

describe('data.filterByType', () => {
  
  it('debería retornar Tauros para filtrar por tipo "Normal"', () => {
    assert.deepEqual(window.data.filterByType,(data, "Normal"), [{
      "id": 128,
      "num": "128",
      "name": "Tauros",
      "type": [
        "Normal"
        ]

      }]);
    });
  });

});

describe('data.sortOrder', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof window.data.sortOrder, 'function');
  });

  it('debería retornar los pokemones ordenado de la A a la Z', () => {
    assert.deepEqual(window.data.sortOrder(data, "a-z"), [
      {
        "id": 1,
        "num": "001",
        "name": "Bulbasaur",
        "type": [
          "Grass",
          "Poison"
        ]
      }, {
        "id": 52,
        "num": "052",
        "name": "Meowth",
        "type": [
          "Normal"
        ]
      }, {
        "id": 128,
        "num": "128",
        "name": "Tauros",
        "type": [
          "Normal"
        ]
      }
    ]);
  });
