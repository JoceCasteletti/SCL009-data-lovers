//Mostrar toda la data al momento que cargue la página
const filter = (data,condition) => {
if(condition == 'all') {
  return data;
}
  
 

const filterData = POKEMON.pokemon;
  for(let i=0; i<filterData.lenght; i++) {
    console.log(filterData[i].name);
   }
}

//Filtrar por tipo de pokemon, si incluye grass por ejemplo retorna verdadero o falso y al final retorna
//todos los pokemones que contengan el filtro grass
const filterByType = (data, type) => {
  return data.filter(item => {
    return item.type.includes(type);
  });
}

window.filterByType = filterByType