export const specie = async (x) => {    
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${x}`)
        const bodyspecie = await response.json();

        const div = document.querySelector(".descripcion")
        const descrip = document.createElement("p")
        descrip.className = "text-center texto-pequeño"
        descrip.textContent = `${bodyspecie.flavor_text_entries[1].flavor_text}`.toUpperCase();
        div.appendChild(descrip)

    }catch (err) {
        console.log(err);
        alert("Pokemon no encontrado")
        window.location.href="./index.html"
    }  
}