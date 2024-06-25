let cart=[];
let totalPrice = 0;

document.querySelector('.adicionar').addEventListener('click', addToCart);
document.querySelector('.limpar').addEventListener('click', clearCart);
 
function addToCart() {

    const productSelect = document.getElementById('select');
    const quantityInput = document.getElementById('count-box');
    const selectedProduct = productSelect.value;
    const quantity = parseInt(quantityInput.value);

    if (selectedProduct && quantity > 0) {
        const [productName, productPrice] = selectedProduct.split(' - ');
        const productTotal = parseFloat(productPrice) * quantity;
        cart.push({
            name: productName,
            price: parseFloat(productPrice),
            quantity: quantity,
            total: productTotal
        });
 
        totalPrice += productTotal;
        updateCart();
    }
}
 
function clearCart() {
    cart=[];
    totalPrice = 0;
    updateCart();
}
 
function updateCart() {
    const cartItems = document.getElementById('cart-item');
    const totalPriceElement = document.getElementById('total-price');
 
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.quantity} x ${item.name} - R$${item.total.toFixed(2)}`;
        cartItems.appendChild(li);
    });
 
    totalPriceElement.textContent = `R$${totalPrice.toFixed(2)}`;
}