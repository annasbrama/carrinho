document.querySelector('.adicionar').addEventListener('click', addProducts)
document.querySelector('#limpar').addEventListener('click', cleanProducts)

let erro = document.querySelector('.erro')
const list = document.querySelector('.products-list')

let totalPrice = 0
let cart = []

function addProducts() {
    const select = document.querySelector('#select')
    const boxInput = document.querySelector('#count-box')

    const selectValue = select.value
    const countBox = parseInt(boxInput.value)


    if (selectValue === '') {
        erro.textContent = 'ERRO - Escolha um produto'
        return
    } else if (boxInput.value <= 0) {
        erro.textContent = 'ERRO - Insira uma quantidade válida'

    } else if (selectValue && countBox > 0) {
        const arraySelect = selectValue.split(' - ')
        const productName = arraySelect[0]
        const productPrice = arraySelect[1]
        // arraySelect = select.value.split(" - ")
        const productTotal = parseFloat(productPrice) * countBox

        cart.push({
            name: productName,
            price: parseFloat(productPrice),
            quantity: countBox,
            total: productTotal
        })
        totalPrice += productTotal
        console.log(totalPrice)
        cartList()
    }
}

function cleanProducts() {
    cart = []
    totalPrice = 0
    addProducts()

}

function cartList() {
    const result = document.getElementById('finalPrice')

    // list.textContent = ''
    cart.forEach(item => {
        const h3 = document.createElement('h3')
        h3.textContent = `${item.quantity} x ${item.name} - R$${item.total.toFixed(2)}`
        list.appendChild(h3)
    });

    result.innerText = `R$${totalPrice.toFixed(2)}`
}