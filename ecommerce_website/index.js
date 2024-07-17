document.addEventListener("DOMContentLoaded", function() {
    let cart = [];

    // Load cart from localStorage
    if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
    }

    // Add to cart functionality
    const buttons = document.querySelectorAll(".add-to-cart");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const name = this.getAttribute("data-name");
            const price = this.getAttribute("data-price");
            addToCart(name, price);
            alert("Item added to cart!");
        });
    });

    function addToCart(name, price) {
        const item = cart.find(item => item.name === name);
        if (item) {
            item.quantity += 1;
        } else {
            cart.push({ name, price, quantity: 1 });
        }
        localStorage.setItem("cart", JSON.stringify(cart));
    }
});
