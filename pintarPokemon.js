export const datos = (id) => {

    const ul = document.querySelector("#ul-datos")

    const li = document.createElement("li")
    const img = document.createElement("img")
    const type = document.createElement("b")
    const name = document.createElement("h4")
    const div = document.createElement("div")
    const divfooter = document.createElement("div")
    const a = document.createElement("a")
    a.setAttribute("href", `${id.id}`); 
    
    div.className = "card bg-dark bg-opacity-25 shadow bg-body"
    li.className = "container-fluid card-body"
    name.className = "name card-title my-2"
    img.className = "card-img-top border rounded-circle p-3" 
    type.className = "card-text text-center rounded-4 p-1 px-3"
    divfooter.className = "d-flex justify-content-evenly align-items-center fw-bold"
    a.className = "text-decoration-none text-black"
    
    const tipo = id.types[0].type.name;
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

    img.src = id.sprites.other.home.front_default
    name.textContent = `${id.id} - ${id.name}`.toUpperCase();
    type.textContent = `${id.types[0].type.name}`.toUpperCase();
    divfooter.textContent = `Type:`

    img.style.backgroundColor = color + "93";
    type.style.backgroundColor = color;

    li.appendChild(a)
    ul.appendChild(div)
    div.appendChild(li)
    a.appendChild(img)
    li.appendChild(name)
    divfooter.appendChild(type)
    li.appendChild(divfooter)
}
  