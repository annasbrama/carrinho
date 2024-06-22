// let btnAdd = document.querySelectorbyID('add')
// let btnLimpar = document.querySelectorbyID('limpar')
// let list = ['mouse', 'teclado', 'monitor', 'cadeira']
// document.getElementById('list').value = list 

let error = document.querySelector('.erro')
console.log(select)


function produtosEscolhidos() {
    let select = document.querySelector('#select')
    for (var i = 0; i < productsJson.length; i++) {
        select.innerHTML = select.innerHTML + '<option value="mouse' + productsJson[i]['id'] + '">' + productsJson[i]['name'] + '</option>'
    }
}
{/* <option value="mouse">Mouse Genérico (preto) - R$ 15,90</option> */ }

// function show(select) {
//     let fullBox = document.querySelector('#fullBox')
//     fullBox.innerHTML = productsJson.op

// }

function Adicionar() {
    if (list == 0) {
        error.textContent = `ERRO: ${textoMensagem}`
    }
}

function Error(textoMensagem) {
    error.textContent = `ERRO: ${textoMensagem}`
}

function Limpar() {
    while (list.length != 0) {
        list.pop()
    }
    fullBox.textContent = ''
}