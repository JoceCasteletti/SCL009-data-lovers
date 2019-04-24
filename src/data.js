
const filter = (data,condition) => {
if(condition == 'all') {
  return data;
}
  
 

const filterData = POKEMON.pokemon;
  for(let i=0; i<filterData.lenght; i++) {
    console.log(filterData[i].name);
   }
}