function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem('cart')) || {};
  cart[productId] = (cart[productId] || 0) + 1;
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Товар додано до кошика!');
    


}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const cart = JSON.parse(localStorage.getItem('cart')) || {};

  cartItems.innerHTML = '';
  let total = 0;

  for (const [productId, quantity] of Object.entries(cart)) {
      fetch(`/product/${productId}/`)
          .then(response => response.json())
          .then(product => {
              const itemTotal = product.price * quantity;
              total += itemTotal;

              cartItems.innerHTML += `
                  <div>
                      ${product.name} - ${quantity} x ${product.price} грн. = ${itemTotal} грн.
                  </div>
              `;

              cartTotal.textContent = total;
          });
  }
}

if (document.getElementById('cart-items')) {
  updateCart();
}
