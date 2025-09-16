'use strict'

const main = document.querySelector('main')
const botaoBuscar = document.getElementById('buscar')
const buscar = document.getElementById('entrada')



// async -> porque vamos usar await dentro dela
async function mostrarCachorro() {
    const entrada = document.getElementById('entrada').value
    
    // Espera as imagens chegarem da API
    const imagens = await buscarImagens(entrada)

    // Limpa antes de adicionar
    main.replaceChildren()

    const card = document.createElement('div')
    card.classList.add('card-cachorro')

    imagens.forEach((url) => {
        const a = document.createElement('a')
        const img = document.createElement('img')
        img.src = url
        a.href = url
        a.setAttribute('target', '_blank')
        a.appendChild(img)
        card.appendChild(a)
    })

    main.appendChild(card)
}



//async -> Função assincrona
async function buscarImagens(breed) {
    const url = `https://dog.ceo/api/breed/${breed}/images`
    //await -> Aguardar a resposta dos dados antes de executa-lo
    //fetch -> Buscar
    const response = await fetch(url)
    const imagens = await response.json()
    return imagens.message
}

botaoBuscar.addEventListener('click', mostrarCachorro)
buscar.addEventListener('keydown', (event)=>{
    if(event.key === 'Enter'){
        mostrarCachorro()

    }
})

