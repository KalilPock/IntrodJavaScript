//Selecionando os elementos HTML
const pesquisaInput = document.getElementById("pesquisa-input");
const pesquisaBotao = document.getElementById("pesquisa-botao");
const pokemonCard = document.querySelectorAll(".card");

//impedir que a pagina regarregue
const pesquisaForm = document.getElementById('pesquisa-form');

//"Ouvinte" para o formulario não atualizar a pagina
pesquisaForm.addEventListener('submit', (event)=>{
    event.preventDefault();
});

//"Ouvindo" evento do botao 
pesquisaBotao.addEventListener('mouseover', ()=>{
    const filtroPesquisa = pesquisaInput.value.toLowerCase();

    //percorrendo os cards
    pokemonCard.forEach(card => {
        const pokemonNome = card.getAttribute('data-name').toLowerCase();

        //logica de filtragem
        if(pokemonNome.includes(filtroPesquisa)){
            card.classList.remove('d-none');
        } else {
            card.classList.add('d-none');
        }
    });
});

// Logica testando Eventos
const pokemonCards = document.querySelectorAll('.card');

//itera sobre cada card para adicionar um ouvinte de evento
pokemonCards.forEach(card => {
    card.addEventListener('click', (event) => {
        const pokemonNome = card.getAttribute('data-name');
        console.log(`O mouse está sobre o card do Pokemon: ${pokemonNome}`)
    });
});

const infoPokemon = document.getElementById('info-pokemon');

pokemonCards.forEach(card => {
    card.addEventListener('mouseover', (event) => {
        const pokemonNome = card.getAttribute('data-name');
        infoPokemon.textContent = `O mouse está sobre o card do Pokemon: ${pokemonNome}`;
    });
});

//Inicialização ao Fetch Aula 01/10/2025

//seleciona o elemento onde os cards serão adicionados
const rowElemento = document.querySelector('.row'); // Corrigido para selecionar apenas UM elemento

console.log("Elemento row selecionado:", rowElemento);
//salvando em uma variavel a URL da API
const apiURL = 'http://pokeapi.co/api/v2/pokemon?limit=50';

//função fetch
fetch(apiURL)

    //converte a resposta para formato JSON
    .then(response => response.json())
    .then(data => {
        console.log("Dados recebidos da API", data.results);

        //percorrendo a lista de pokemons recebida da API
        data.results.forEach(pokemon =>{
            //Cria um novo card dinamico para cada Pokemon
            const cardHTML =  `
            <div class="card" style="width: 18rem;" data-name="${pokemon.name}"> 
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png" class="card-img-top" alt="${pokemon.name}">
                    <div class="card-body">
                        <h5 class="card-title">${pokemon.name}</h5>
                        <a href="#" class="btn btn-outline-danger">Detalhes</a>
                    </div>
                </div>
            `;

            //adiciona o novo card ao elemento 'row' no HTML
            rowElemento.innerHTML += cardHTML;
        });
    })