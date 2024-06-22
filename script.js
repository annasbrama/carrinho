let btnAdd = document.querySelector('#add')
let btnLimpar = document.querySelector('#limpar')
let erro = document.querySelector('.erro')
let list = document.querySelector('.products-list')

const select = document.querySelector('#select')
let arraySelect, product, price
// console.log(product)

btnAdd.addEventListener('click', () => {
    if (select.value === '') {
        erro.textContent = 'ERRO - Escolha um produto'
        return
    }
    adicionar()
})

function adicionar() {
    arraySelect = select.value.split(" - ")

    product = arraySelect[0]
    price = arraySelect[1]

    erro.textContent = ''
    list.innerHTML = list.innerHTML + '<span>' + product + ' - ' + price + '</span>'
}


