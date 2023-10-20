import { specie } from "./specie.js";


const click = async (x) => {    
    
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${x}`)
        const body = await response.json();
        searchPokemon(body)
        specie(body.id)

    }catch (err) {
        console.log(err);
        alert("Pokemon no encontrado")
        window.location.href="./index.html"
    }
}

const urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get("id");

if(id == null){
    
}else{
    click(parseInt(id))
       
   document.getElementById("backBtn").addEventListener("click", function () {
        if(parseInt(id) !== 0){
            id = parseInt(id) -1
            click(id)
            window.location.href=`./index.html?id=${id}`
        }
    });

    document.getElementById("nextBtn").addEventListener("click", function () {
        if(parseInt(id) !== 0){
            id = parseInt(id) +1
            click(id)
            window.location.href=`./index.html?id=${id}`
        }
   });
}

const searchPokemon = (pokemons) => {

    if (pokemons.id == 905) {
        console.log(pokemons.id);
        document.querySelector('#nextBtn').setAttribute("hidden", "none");
    }
    
    if(pokemons.id > 1){
        document.getElementById("nextBtn").style.display = 'block';
        document.getElementById("backBtn").style.display = 'block';
    }else{
        document.getElementById("nextBtn").style.display = 'block';
    }
    
    document.querySelector('#article').setAttribute("hidden", "none");
    document.getElementById('form').setAttribute("hidden", "none");
    document.querySelector('.navbar-toggler').setAttribute("hidden", "none");
        
    const article = document.getElementById('articleSearch')
    const li = document.createElement("li")
    const imgPoke = document.createElement("img")
    const type = document.createElement("b")
    const name = document.createElement("h4")
    const div = document.createElement("div")
    const divfooter = document.createElement("div")
    const divfooter2 = document.createElement("div")
    const a = document.createElement("a")
    const peso = document.createElement("p")
    const altura = document.createElement("p")
    const b = document.createElement("b")
    a.setAttribute("href", `#`);
    
    div.className = "card bg-dark bg-opacity-25 shadow bg-body margin"
    li.className = "container-fluid card-body"
    name.className = "name card-title"
    imgPoke.className = "card-img-top border rounded-circle p-3 w-50"
    divfooter.className = "footerCard d-flex justify-content-evenly align-items-center gap-2"
    type.className = "card-text text-center rounded-4 fw-bold p-1 px-3"
    a.className = "d-flex justify-content-center imgPoke"
    peso.className = "text-black h-25 texto-pequeño"
    altura.className = "text-black h-25 texto-pequeño"
    divfooter2.className = "descripcion"
    b.className = "type"

    let tipo = pokemons.types[0].type.name;

    let color = "000";
    if (tipo == "grass") {
        color = "#78C850";
    } else if (tipo == "fire") {
        color = "#F08030";
    } else if (tipo == "water") {
        color = "#6890F0";
    } else if (tipo == "electric") {
        color = "#F8D030";
    } else if (tipo == "ice") {
        color = "#98D8D8";
    } else if (tipo == "fighting") {
        color = "#C03028";
    } else if (tipo == "poison") {
        color = "#A040A0";
    } else if (tipo == "ground") {
        color = "#E0C068";
    } else if (tipo == "flying") {
        color = "#A890F0";
    } else if (tipo == "psychic") {
        color = "#F85888";
    } else if (tipo == "bug") {
        color = "#A8B820";
    } else if (tipo == "rock") {
        color = "#B8A038";
    } else if (tipo == "ghost") {
        color = "#705898";
    } else if (tipo == "dragon") {
        color = "#7038F8";
    } else if (tipo == "dark") {
        color = "#705848";
    } else if (tipo == "steel") {
        color = "#B8B8D0";
    } else if (tipo == "fairy") {
        color = "#EE99AC";
    } else if (tipo == "normal") {
        color = "#A8A878";
    }

    name.textContent = `${pokemons.id} - ${pokemons.name}`.toUpperCase();
    imgPoke.src = pokemons.sprites.other.home.front_default;
    type.textContent = `${pokemons.types[0].type.name}`.toUpperCase();
    b.textContent = `Type:`
    peso.textContent = `Weight: ${pokemons.weight} -`
    altura.textContent = `Height: ${pokemons.height}`

    imgPoke.style.backgroundColor = color + "93";
    type.style.backgroundColor = color;

    li.appendChild(a)
    article.appendChild(div)
    div.appendChild(li)
    a.appendChild(imgPoke)
    li.appendChild(name)
    li.appendChild(divfooter2)
    divfooter.appendChild(b)
    divfooter.appendChild(type)
    divfooter.appendChild(peso)
    divfooter.appendChild(altura)
    li.appendChild(divfooter)
   
    


}
