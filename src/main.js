const pokemonList = document.getElementById('pokemon_list')
const selectType = document.getElementById('select_type')

let data = POKEMON.pokemon;
let name = "Pikachu";

let filterByName = (data, name) => {
   return data.filter(element => element.name===name)
}
/*
document.getElementById('pokemon').innerHTML=all;
for(var i = 0; i < name.length; i++){
   return name[i];
}
*/
//console.log(filterByName(data, name));

//Funcion mostrar data dentro de una tarjeta de bootstrap
const showData = (data) => {
   let html = ``

   data.forEach(element => {
      html += `
      <div class="card">
      <img class="card-img-top" src="${element.img}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${element.name}</h5>
        <p class="card-text">${element.num}</p>
        <p class="card-text">${element.egg}</p>
        <p class="card-text">${element.weaknesses}</p>
        <a href="#" class="btn btn-primary">Saber más!</a>
      </div>
    </div>`
   })

   //Imprimir tarjeta en html
   pokemonList.innerHTML = html
}

//showData(window.pokemon.pokemon)
//showData(window.filterByType(data, "Electric"))



const btnSearch = document.getElementById("btn_search");


btnSearch.addEventListener("click", () => {
   const search = document.getElementById("search").value;
   const pokemonList = filterByName(data, search);

   showData(pokemonList);
});

selectType.addEventListener('change', () => {
   const type = selectType.value;
   const pokemonList = filterByType(data, type);

   showData(pokemonList);
});