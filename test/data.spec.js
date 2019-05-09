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
    "id": 128,
    "num": "128",
    "egg": "5 km",
    "name": "Tauros",
    "type": ["Normal",]
  },
  {
    "id": 52,
    "num": "052",
    "egg": "5 km",
    "name": "Meowth",
    "type": ["Normal"]
  }
]
describe('filterByName', () => {

  it('debería ser una función', () => {
    assert.equal(typeof window.filterByName, 'function');
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
    assert.equal(typeof window.filterByEgg, 'function');
  });
  it('debería retornar Bulbasaur  para filtrar por huevo de "2 km"', () => {
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
      "type": ["Grass",
        "Poison"]
    }]);
  });

  it('debería retornar toda la data por tipo', () => {
    assert.deepEqual(window.filterByType(data, "all"), data);
  });
  it('debería retornar toda la data por egg', () => {
    assert.deepEqual(window.filterByEgg(data, "all"), data);
  });
});
describe('orderPokemon', () => {

  it('debería ser una función', () => {
    assert.equal(typeof window.orderPokemon, 'function');
  });
  it('debería retornar los pokemones ordenado de la A a la Z', () => {
    assert.deepEqual(window.orderPokemon(data, "name", "az"), [
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

  it('deberia retornar el mismo arreglo', () =>{
    assert.deepEqual(window.orderPokemon([{x : "A"}, {x : "A"}], "x", "az"), [{x : "A"}, {x : "A"}]);
  });

  it('debería retornar los pokemones ordenado de la Z a la A', () => {
    assert.deepEqual(window.orderPokemon(data, "name", "za"), [
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
describe('counterEggs', () => {

  it('debería ser una función', () => {
    assert.equal(typeof window.counterEggs, 'function');
  });
  it('debería retornar el porcentaje para huevos de 2 km', () => {
    assert.equal(window.counterEggs(data, "2 km"), "33.3")
  });
});


