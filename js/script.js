const containerPoke = document.querySelector(".pokemon__container");
const loading = document.getElementById("loading__container");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let offset = 1;
let limit = 8;

function fetchPoke(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => res.json())
        .then(data => {
            createPokemon(data);
            loading.style.display = "none";
        })
        .catch(err => console.log(err));
}
function amountPokemons(offset, limit) {
    loading.style.display = "flex"
    for(let i = offset; i <= offset + limit; i++) fetchPoke(i);
}
function createPokemon(pokemon) {
    const card = document.createElement("DIV");
    card.classList.add("pokemon__card");

    const imageContainer = document.createElement("DIV");
    imageContainer.classList.add("image__container");

    const image = document.createElement("IMG");
    image.src = pokemon.sprites.front_default;

    imageContainer.appendChild(image);

    const number = document.createElement("P");
    number.classList.add("number");
    number.textContent = `#${pokemon.id.toString().padStart(3, "0")}`;

    const name = document.createElement("P");
    name.classList.add("name");
    name.textContent = pokemon.name;

    card.appendChild(imageContainer);
    card.appendChild(number);
    card.appendChild(name);

    containerPoke.appendChild(card);
}
setTimeout(
    function() {
        amountPokemons(offset, limit);
    },500
)


function removeChildNodes(element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild)
    }
}
prev.addEventListener("click", () => {
    if(offset != 1){
        offset -= 9;
        removeChildNodes(containerPoke)
        amountPokemons(offset, limit);
    }
})
next.addEventListener("click", () => {
    if(offset != 901) {
        offset += 9;
        removeChildNodes(containerPoke)
        amountPokemons(offset, limit);
    }
})
