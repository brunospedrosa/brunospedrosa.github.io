let streaming = JSON.parse(localStorage.getItem('streaming'))

const serieImg = document.querySelector('#serie-img')
const nome = document.querySelector('#nome-serie')
const botaoDeletar = document.querySelector('#botao-deletar')
const botaoAtualizar = document.querySelector('#botao-atualizar')
let modalDeleta = document.querySelector('#div-alerta')
let modalDeletaConfirma = document.querySelector('#div-alerta-deletado')
let modalAtualiza = document.querySelector('#div-atualiza')
let modalAtualizaConfirmacao = document.querySelector('#div-atualiza-confirmacao')
let botaoFechar = document.querySelector('#botao-voltar-deletar')
let botaoClose = document.querySelectorAll('.close-btn')
let botaoConfirmarDeletar = document.querySelector('#botao-confirmar-deletar')
let botaoConfirmarAtualizar = document.querySelector('#botao-confirmar-atualizar')
let botaoredireciona = document.querySelector('#close-redireciona')


const nomeAtualiza = document.querySelector('#nome-atualiza')
const statusAtualiza = document.querySelector('#status-atualiza')
const streamingAtualiza = document.querySelector('#streaming-atualiza')
const generoAtualiza = document.querySelector('#genero-atualiza')

serieImg.src = streaming.src
nome.value = streaming.nome
nomeAtualiza.value = streaming.nome


botaoredireciona.addEventListener('click', () => {
    location.href = 'streaming.html'
})

botaoConfirmarDeletar.addEventListener('click', () => {
    modalDeleta.style.display = "none"
    modalDeletaConfirma.style.display = "block"
})

botaoConfirmarAtualizar.addEventListener('click', () => {
    modalAtualiza.style.display = "none"
    modalAtualizaConfirmacao.style.display = "block"
})

botaoDeletar.addEventListener('click', () => {
    modalDeleta.style.display = "block"
})

botaoAtualizar.addEventListener('click', () => {
    modalAtualiza.style.display = "block"
})

document.addEventListener('keyup', (e) => {
    if (e.key == 'Escape'){
        modalDeleta.style.display = 'none'
    }
})

botaoFechar.addEventListener('click', () => {
        modalDeleta.style.display = 'none'
})

botaoClose.forEach(element => {
    element.addEventListener('click', () => {
        modalDeleta.style.display = 'none'
        modalAtualiza.style.display = 'none'
        modalAtualizaConfirmacao.style.display = "none"
    })
});
