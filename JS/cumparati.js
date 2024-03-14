function toggleVisibility() {
    var div = document.getElementById("myDiv");
    if (div.style.display === "none") {
        div.style.display = "block"; 
    } else {
        div.style.display = "none"; 
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartItemsList = document.querySelector(".cart-items");
    const totalDisplay = document.querySelector(".total");
    const checkoutButton = document.querySelector(".checkout");
    const checkoutDiv = document.getElementById("checkoutDiv");
    const closeCheckoutButton = document.getElementById("closeCheckout");

    let totalPrice = 0;

    checkoutButton.addEventListener("click", function() {
        alert(`Total amount to pay: MDL ${totalPrice.toFixed(2)}`);
    });

    function addToCart(productName, productPrice) {
        totalPrice += productPrice;
        totalDisplay.textContent = totalPrice.toFixed(2);

        const listItem = document.createElement("li");
        listItem.textContent = `${productName} - MDL ${productPrice.toFixed(2)}`;

        const removeButton = document.createElement("button");
        removeButton.textContent = "-";
        removeButton.classList.add("remove-from-cart");
        removeButton.addEventListener("click", function() {
            totalPrice -= productPrice;
            totalDisplay.textContent = totalPrice.toFixed(2);
            listItem.remove();
        });

        listItem.appendChild(removeButton);
        cartItemsList.appendChild(listItem);
    }

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function() {
            const product = button.parentElement;
            const productName = product.querySelector(".name").textContent;
            const productPrice = parseFloat(product.querySelector(".price").textContent.replace("MDL", ""));
            addToCart(productName, productPrice);
        });
    });

    checkoutButton.addEventListener("click", function() {
        checkoutDiv.style.display = "block";
    });

    closeCheckoutButton.addEventListener("click", function() {
        checkoutDiv.style.display = "none";
    });
});
