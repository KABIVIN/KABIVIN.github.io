const cart = document.getElementById("cart");
    const increaseBtn = document.getElementById("increaseBtn");
    const decreaseBtn = document.getElementById("decreaseBtn");

    increaseBtn.onclick = function () {
        const item = cart.innerText;
        cart.innerText = parseInt(item, 10) + 1;
    }

    decreaseBtn.onclick = function () {
        const item = cart.innerText;
        cart.innerText = parseInt(item, 10) - 1 >= 0 ? parseInt(item, 10) - 1 : 0;
    }


    let cartCount = 0;
    let productPrice = 100; // Initial product price

    document.getElementById('increaseBtn').addEventListener('click', function () {
        cartCount++;
        updateCartCount();
        updateTotalPrice();
    });

    document.getElementById('decreaseBtn').addEventListener('click', function () {
        if (cartCount > 0) {
            cartCount--;
            updateCartCount();
            updateTotalPrice();
        }
    });

    document.querySelectorAll('.addToCartBtn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            cartCount++;
            updateCartCount();
            updateTotalPrice();
        });
    });

    function updateCartCount() {
        document.getElementById('cart').textContent = cartCount;
    }

    function updateTotalPrice() {
        const totalPrice = cartCount * productPrice;
        document.getElementById('productPrice').textContent = totalPrice + ' lei';
    } 

