// EMPIEZA: Referencias a los elementos del DOM
const pokemonList = document.getElementById('pokemon_list')
const selectType = document.getElementById('select_type')
const btnSearch = document.getElementById('btn_search');
const orderPokemon = document.getElementById('order_pokemon');

// FIN: Referencias a los elementos del DOM

// EMPIEZA: Se deja referencia al arreglo de los pokémon
let data = POKEMON.pokemon;
// FIN: Se deja referencia al arreglo de los pokémon

// EMPIEZA: Acá se declaran las funciones que manipulan el DOM

//Funcion mostrar data dentro de una tarjeta de bootstrap
const showData = (data) => {
   let html = '';

   //se ejecuta la función por cada elemento del arreglo
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
// FIN: Acá se declaran las funciones que manipulan el DOM

//showData(window.pokemon.pokemon)
//showData(window.filterByType(data, "Electric"))





// EMPIEZA: Acá se agregan los eventos de los elementos del DOM
btnSearch.addEventListener("click", () => {
   const search = document.getElementById("search").value;
   const pokemonList = filterByName(data, search);

   showData(pokemonList);
});

//Al momento de cambiar el tipo de pokemon en el select se dispara el evento change
selectType.addEventListener('change', () => {
   const type = selectType.value;
   const pokemonList = filterByType(data, type);

   showData(pokemonList);
});

//Cuando termine de cargar la página va a desplegar la lista de pokemones
window.addEventListener('load', () => {
   showData(data);
});
// FIN: Acá se agregan los eventos de los elementos del DOM

orderPokemon.addEventListener('change', ( )=> {
   
})

showData(data);