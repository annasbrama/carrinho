let btnAdd = document.querySelector('#add')
let btnLimpar = document.querySelector('#limpar')
let erro = document.querySelector('.erro')
let list = document.querySelector('.products-list') //lista de produtos selecionados
let countBox = document.querySelector('#count-box') //caixa com números de quantidades pedidas

const select = document.querySelector('#select')
let arraySelect, product, price
// console.log(product)

let qtd = [] //quantidades dos produtos

let total //soma dos produtos adicionados

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

    qtd.push(countBox.value)
    // countBox.value = ''

    validateAmount()
    erro.textContent = ''
    list.innerHTML = list.innerHTML + '<span>' + qtd + ' ' + product + ' - ' + price + '</span>'

    resetQtd()

    productsValue()


}

function validateAmount() {
    if (countBox.value == '0') {
        erro.textContent = 'ERRO - Insira uma quantidade válida'
        return true
    }
    return false 
}

function resetQtd() {
    while (qtd.length != 0) {
        qtd.pop('')

        countBox.value = ''
    }
}

clean()

function clean() {
    btnLimpar.addEventListener('click', () => {
        if (list.length != 0) {
            list.innerHTML = ''
        }
    })
}

// function productsValue() {

//     total = countBox + (qtd * price)
// }
