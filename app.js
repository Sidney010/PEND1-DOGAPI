'use strict'

const main = document.querySelector('main')
const botaoBuscar = document.getElementById('buscar')

function mostrarCachorro(cachorro) {
    const card = document.createElement('div')
    const img = document.createElement('img')
    
    img.src = cachorro
    
    card.appendChild(img)
    card.classList.add('card-cachorro')
    main.appendChild(card)
}
//async -> Função assincrona
async function buscarImagens(breed) {
    const url = `https://dog.ceo/api/breed/${breed}/images`
    //await -> aguardar a resposta dos dados antes de executa-lo
    //fetch -> buscar
    const response = await fetch(url)
    const imagens = await response.json()
    return imagens.message
}

botaoBuscar.addEventListener('click', async () => {
    const entrada = document.getElementById('entrada').value
    const imagens = await buscarImagens(entrada)
    main.textContent = ''
    imagens.forEach(img => mostrarCachorro(img))
})
