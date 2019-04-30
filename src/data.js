//Filtrar por tipo de pokemon, si incluye grass por ejemplo retorna verdadero o falso y al final retorna
//todos los pokemones que contengan el filtro grass
const filterByType = (data, type) => {
  return data.filter(item => {
    return item.type.includes(type);
  });
}

window.filterByType = filterByType

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
const sortByName = (data, name, sortOrder) => {
  let order = data.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name = b.name) {
      return 0;
    }
    return -1;
  });
  
  //ordenar de la Z-A
  let sortByName = data.sort((a, b) => {
    if (a.name < b.name) {
      return 1;
    }
    if (a.name = b.name) {
      return 0;
    }
    return -1;
  });
}

window.sortByName = sortByName;
