const search = async () => {
 
    const input = document.getElementById('inputSearch').value
    datoInput = input.trim().toLowerCase()
    
    if (datoInput == "" || datoInput > 906) {
        alert("Pokemon no encontrado")
        window.location.href="./index.html"
    } else {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${datoInput}`)
            const body = await response.json();

            searchPokemon(body)

        } catch (err) {
            console.log(err);
            alert("Pokemon no encontrado")
            window.location.href="./index.html"
        }
    }
}

const click = async (x) => {    
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${x}`)
        const body = await response.json();

        searchPokemon(body)

    } catch (err) {
        console.log(err);
        alert("Pokemon no encontrado")
        window.location.href="./index.html"
    }
}

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

if(id == null){
    
}else{
    click(id)
}

const searchPokemon = (pokemons) => {

    document.querySelector('#article').setAttribute("hidden", "none");
    document.getElementById('form').setAttribute("hidden", "none");

    document.getElementById('back-next').setAttribute("hidden", "block")
        
    const article = document.getElementById('articleSearch')
    const li = document.createElement("li")
    const imgPoke = document.createElement("img")
    const type = document.createElement("b")
    const generacion = document.createElement("b")
    const name = document.createElement("h4")
    const div = document.createElement("div")
    const divfooter = document.createElement("div")
    const a = document.createElement("a")
    a.setAttribute("href", `#`);
    
    div.className = "card bg-dark bg-opacity-25 shadow bg-body margin"
    li.className = "container-fluid card-body"
    name.className = "name card-title my-2"
    imgPoke.className = "card-img-top border rounded-circle p-3"
    divfooter.className = "footerCard d-flex justify-content-evenly align-items-center fw-bold"
    type.className = "card-text text-center rounded-4 p-1 px-3"
    generacion.className = "card-text text-center rounded-4 p-1 px-3"
    a.className = "text-decoration-none text-black"

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
    divfooter.textContent = `Type:`

    imgPoke.style.backgroundColor = color + "93";
    type.style.backgroundColor = color;

    li.appendChild(a)
    article.appendChild(div)
    div.appendChild(li)
    a.appendChild(imgPoke)
    li.appendChild(name)
    divfooter.appendChild(type)
    divfooter.appendChild(generacion)
    li.appendChild(divfooter)
}