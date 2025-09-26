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
pesquisaBotao.addEventListener('click', ()=>{
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
    card.addEventListener('mouseover', (event) => {
        const pokemonNome = card.getAttribute('data-name');
        console.log(`O mouse está sobre o card do Pokemon: ${pokemonNome}`)
    });
});

