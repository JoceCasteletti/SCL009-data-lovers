/* Manejo del DOM */
let todos = POKEMON.pokemon;
let name = "Pikachu";

let filtrarNombre = (name) => {
   return todos.filter(element => element.name===name)
}

console.log(filtrarNombre(name));