//Referencias a los elementos del DOM
const pokemonList = document.getElementById('pokemon_list')
const selectType = document.getElementById('select_type')
const btnSearch = document.getElementById('btn_search');
const sortPokemon = document.getElementById('order_pokemon');
const selectEgg = document.getElementById('select_egg');
const btnFilter = document.getElementById('filter');



//Se deja referencia al arreglo de los pokémon
let data = window.pokemon.pokemon;


// EMPIEZA: Acá se declaran las funciones que manipulan el DOM

//Funcion mostrar data dentro de una tarjeta de bootstrap
const showData = (data) => {
  let html = '';

  //se ejecuta la función por cada elemento del arreglo
  data.forEach(element => {
    let types = '';

    //imagenes por cada tipo de pokemon
    element.type.forEach(element => {
      types += `<img class="card-img-type" src="img/types/${element.toLowerCase()}.png" title="${element}">`;
    })
    
    // let weaknesses='';
    
    // element.weaknesses.forEach(element => {
    //   weaknesses += `<img class="card-img-type" src="img/types/${element.toLowerCase()}.png" title="${element}">`;
    // })

    html += `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 py-3">
      <div class="card h-100">
        <div class="card-img-wrapper">
        <img class="card-img mx-auto d-block" src="${element.img}" alt="${element.name}">
        </div>
        <div class="card-body">
          <h5 class="card-title">${element.name}</h5>
          <p class="card-text">Huevo: ${element.egg}</p>
          <p class="card-text">Tipo: ${types}</p>
          <p class="card-text">Debilidad: ${weaknesses}</p>
        </div>
      </div>
    </div>`;
  })


  //Imprimir tarjeta en html
  pokemonList.innerHTML = html
}
// FIN: Acá se declaran las funciones que manipulan el DOM


// EMPIEZA: Acá se agregan los eventos de los elementos del DOM
btnSearch.addEventListener("click", () => {
  const search = document.getElementById("search").value;
  showData(window.filterByName(data, search));
});



//Cuando termine de cargar la página va a desplegar la lista de pokemones
window.addEventListener('load', () => {
  showData(window.orderPokemon(data, 'a-z'));

  //Mostrar cálculo en el select 
  //Llamar función counterEgg y aproximar su valor con toFixed
  selectEgg.innerHTML = `
<option value="all">Todos</option>
<option value="Not in Eggs">No están en huevos (${window.counterEggs(data, 'Not in Eggs')}%)</option>
<option value="Omanyte Candy">Omanyte Candy (${window.counterEggs(data, 'Omanyte Candy')}%)</option>
<option value="2 km">2 Km (${window.counterEggs(data, '2 km')}%)</option>
<option value="5 km">5 Km (${window.counterEggs(data, '5 km')}%)</option>
<option value="10 km">10 Km (${window.counterEggs(data, '10 km')}%)</option>`;
});


//Filtro múltiple huevo,tipo y ordenar
btnFilter.addEventListener('click', () => {
  const km = selectEgg.value;
  const type = selectType.value;
  const order = sortPokemon.value;

  let pokemonList = window.filterByEgg(data, km);
  pokemonList = window.filterByType(pokemonList, type);
  pokemonList = window.orderPokemon(pokemonList,"name", order);

  showData(pokemonList);

})
// FIN: Acá se agregan los eventos de los elementos del DOM














// // Código modal de boostrap https://getbootstrap.com/docs/4.0/components/modal/#varying-modal-content
// $('#pokemonModal').on('show.bs.modal', function (event) {
//   const button = $(event.relatedTarget) // Botón que activó el modal
//   const pokemonId = button.data('id') // Extrayendo información de la data-id

//   const pokemon = data.filter(element => element.id === pokemonId)[0]; // Obtener pokémon por su id
//   //para poder buscar sus

//   let types = '';

//   pokemon.type.forEach(element => {
//     types += `<img class="card-img-type" src="img/types/${element.toLowerCase()}.png" title="${element}">`;
//   })

//   let weaknesses = '';

//   pokemon.weaknesses.forEach(element => {
//     weaknesses += `<img class="card-img-type" src="img/types/${element.toLowerCase()}.png" title="${element}">`;
//   })

//   const title = document.getElementById('modal_title');

//   title.innerHTML = pokemon.name;

//   const body = document.getElementById('modal_body');

//   body.innerHTML = `
//   <div class="card h-100">
//     <div class="card-img-wrapper">
//     <img class="card-img mx-auto d-block" src="${pokemon.img}" alt="${pokemon.name}">
//     </div>
//     <div class="card-body">
//       <p class="card-text">ID: ${pokemon.num}</p>
//       <p class="card-text">Huevo: ${pokemon.egg}</p>
//       <p class="card-text">Peso: ${pokemon.weight}</p>
//       <p class="card-text">Estatura: ${pokemon.height}</p>
//       <p class="card-text">Tipo: ${types}</p>
//       <p class="card-text">Debilidades: ${weaknesses}</p>
//     </div>
//   </div>`;
// });