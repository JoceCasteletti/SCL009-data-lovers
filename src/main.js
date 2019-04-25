
let all = POKEMON.pokemon;
let name = "Pikachu";

let filtrarNombre = (name) => {
   return all.filter(element => element.name===name)
}

document.getElementById('pokemon').innerHTML=all;
for(var i = 0; i < name.length; i++){
   
}

console.log(filtrarNombre(name));