// EMPIEZA: Referencias a los elementos del DOM
const pokemonList = document.getElementById('pokemon_list')
const selectType = document.getElementById('select_type')
const btnSearch = document.getElementById('btn_search');
const sortPokemon = document.getElementById('order_pokemon');
const selectEgg = document.getElementById('select_egg');
const btnFilter = document.getElementById('filter');

// FIN: Referencias a los elementos del DOM

// EMPIEZA: Se deja referencia al arreglo de los pokémon
let data = window.pokemon.pokemon;
// FIN: Se deja referencia al arreglo de los pokémon

// EMPIEZA: Acá se declaran las funciones que manipulan el DOM

//Funcion mostrar data dentro de una tarjeta de bootstrap
const showData = (data) => {
   let html = '';

   //se ejecuta la función por cada elemento del arreglo
   data.forEach(element => {
      html += `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
      <div class="card" style="width: 195px;">
      <img class="card-img-top" src="${element.img}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${element.name}</h5>
        <p class="card-text">${element.num}</p>
        <p class="card-text">${element.egg}</p>
        <p class="card-text">${element.weaknesses}</p>
      </div>
    </div>
    </div>`
   })

   //Imprimir tarjeta en html
   pokemonList.innerHTML = html
}
// FIN: Acá se declaran las funciones que manipulan el DOM

//showData(window.pokemon.pokemon)
//showData(window.filterByType(data, "Electric"))




// EMPIEZA: Acá se agregan los eventos de los elementos del DOM
btnSearch.addEventListener("click", () => {
   const search = document.getElementById("search").value;
   showData(window.filterByName(data, search));
});

//Cuando termine de cargar la página va a desplegar la lista de pokemones
window.addEventListener('load', () => {
  showData(window.orderPokemon(data, 'a-z'));
});

btnFilter.addEventListener('click', () => {
  const km = selectEgg.value;
  const type = selectType.value;
  const order = sortPokemon.value;

  let pokemonList = window.filterByEgg(data, km);
  pokemonList = window.filterByType(pokemonList, type);
  pokemonList = window.orderPokemon(pokemonList, order);

  showData(pokemonList);
  
})
// FIN: Acá se agregan los eventos de los elementos del DOM