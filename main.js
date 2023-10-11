import { getPokemons } from "./pokemon.js";

let next = 20;

document.addEventListener("DOMContentLoaded", () => {
      request(0, 20);
});


document.getElementById("btnNext").addEventListener("click", function () {
  let back = 0;
  if (next > 0 && next < 906) {
      next += 20;
      back = next - 19
      request(back, next);
  }
});


const request = async (back, next)=>{
  
  try{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${back}&limit=${next}`)
    const body = await response.json();
    getPokemons(body);
    

  } catch(err){
    console.log(err);
  }

}