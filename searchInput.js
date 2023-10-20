
const search = async () => {
 
    const input = document.getElementById('inputSearch').value
    datoInput = input.trim().toLowerCase()

    if(datoInput > 0){
        // console.log("es un numero");
        
        if (datoInput == "" || datoInput > 906) {
            alert("Pokemon no encontrado")
            window.location.href="./index.html"
        } else {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${datoInput}`)
                const body = await response.json();

                window.location.href=`./index.html?id=${datoInput}`

            } catch (err) {
                console.log(err);
                alert("Pokemon no encontrado")
                window.location.href="./index.html"
            }
        }
    }else{
        // console.log("NO un numero");
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${datoInput}`)
            const body = await response.json();
            
            let idInput = body.id
            window.location.href=`./index.html?id=${idInput}`
               
        } catch (err) {
            console.log(err);
            alert("Pokemon no encontrado")
            window.location.href="./index.html"
        }
     }
         
}