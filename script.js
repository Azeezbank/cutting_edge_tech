document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalContainer = document.getElementById('cart-total');
    const button = document.querySelector('.button');

    
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', addToCart);
    });

    function addToCart(event) {
        const productElement = event.target.closest('.product');
        const productId = productElement.getAttribute('data-id');
        const productName = productElement.getAttribute('data-name');
        const productPrice = parseFloat(productElement.getAttribute('data-price'));

        const cartItem = cart.find(item => item.id === productId);
        if (cartItem) {
            cartItem.quantity += 1;
        } else {
            cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
        }

        updateCart();
    }

    function updateCart() {
        cartItemsContainer.innerHTML = '';

        let total = 0;
        cart.forEach(item => {
            const cartItemElement = document.createElement('li');
            cartItemElement.textContent = `${item.name} - #${item.price.toFixed(2)} x ${item.quantity}`;
            cartItemsContainer.appendChild(cartItemElement);

            total += item.price * item.quantity;





button.addEventListener('click', () => {
    let totalAmount = 0;
        cart.forEach(item => {
            totalAmount += item.price * item.quantity;
        });
    const name = document.getElementById('name').value;
    const amount = totalAmount;
  const email = document.getElementById('email').value;
  MonnifySDK.initialize({
    amount: amount,
    currency: "NGN",
    reference: "Monn_" + Math.floor((Math.random()* 1000000) + 1),
    customerFullName: name,
    customerEmail: email,
    apiKey: "MK_PROD_A58QFTHS2G",
    contractCode: 068760777648,
    paymentDescription: "purchase payment",
    isTestMode: false,
    onComplete: function(response) {
      paymentSuccessful = true;
      if (paymentSuccessful) {
      window.location.href = "success.html"}
      else {
        alert('Transaction not successful')
      }
    },
    onClose: function (data) {
        alert("Payment window closed")
    //return;
    }
  });
})
        });
        cartTotalContainer.textContent = `Total: #${total.toFixed(2)}`;
    }
    });

//Chart section

document.addEventListener('DOMContentLoaded', () => {
            const ctx = document.getElementById('myChart').getContext('2d');
            const myChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ['Honey', 'Catfish', 'Broiler', 'Dried Maize', 'Cassava', 'Fresh Maize', 'Egg', 'Chicken', 'Palm Oil'], datasets: [{label: "Available products", data: [10000, 9000, 6000, 8000, 10000, 8000, 5000, 4000, 2000], borderwidth: 1,              backgroundColor: 'rgba(0, 255, 0, 0.5',
      }]
    },
    options: {
        scales: {
            y: {
               beginAtZero: true
            }
        }
    }
});
});
