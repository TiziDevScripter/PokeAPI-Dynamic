const containerPoke = document.querySelector(".pokemon__container");

function fetchPoke(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => res.json())
        .then(data => createPokemon(data))
        .catch(err => console.log(err));
}
function amountPokemons(n) {
    for(let i = 1; i <= n; i++) fetchPoke(i)
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

    card.appendChild(imageContainer)
    card.appendChild(number)
    card.appendChild(name)

    containerPoke.appendChild(card)
}
amountPokemons(26)