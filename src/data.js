//Filtrar por tipo de pokemon, si incluye grass por ejemplo retorna verdadero o falso y al final retorna
//todos los pokemones que contengan el filtro grass
const filterByType = (data, type) => {
  if (type === 'all') {
    return data;
  }

  return data.filter(item => {
    return item.type.includes(type);
  });
}

window.filterByType = filterByType

const filterByEgg = (data, egg)=> {
  if (egg === 'all') {
    return data;
  }

  return data.filter(item => {
    return item.egg.includes(egg);
  });
}

window.filterByEgg = filterByEgg

//Buscador 
let filterByName = (data, searchText) => {
  //return data.filter(element => element.name===name)

  //Se pasa a minúscula el nombre del pokemon y la búsqueda que hace el usuario 
  //para comparar ambos nombres en minúscula
  // Pikachu no es lo mismo que pikachu
  return data.filter(element => element.name.toLowerCase().includes(searchText.toLowerCase()))
}

window.filterByName = filterByName

// const filterBy = (data, field, value) => {
//   return data.filter(item => {
//     return item[field].includes(value);
//   });
// }

// window.filterBy = filterBy

// ordenar de la A - Z
const orderPokemon = (data, sortOrder,sortBy) => {
  // TODO: Implementar opciones de orden 

  const list = data.sort((a, b) => {
    if (a.name > b.name)
      return 1;
    if (a.name < b.name)
      return -1;
    return 0;
  });

  if (sortOrder === 'za') {
    return list.reverse();
  }

  return list;
};

window.orderPokemon = orderPokemon



//calculo agregado
// const computeStats = (arr) => {
//   let result = parseInt(arr.length / 151 * 100);
//   return result;
// }
// window.computeStats = computeStats;
const counterEggs = (data) => {
let counterData = data.reduce(function(counter,egg){
  if (egg ==="2 km") {
  return counter +1 * 100 /151 ; 
 } else {
  return counter ;
 }
   },0)}
   
window.counterEggs = counterEggs