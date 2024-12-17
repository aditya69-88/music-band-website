// Initialize cart count from localStorage or set to 0
let cartCount = localStorage.getItem('cartCount') ? parseInt(localStorage.getItem('cartCount')) : 0;

// Initialize cart items array from localStorage or set to empty array
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Update the cart count on page load
document.getElementById('cart-count').textContent = cartCount;

// Get all add to cart buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Get the alert element
const alertElement = document.getElementById('alert');

// Add event listeners to each "Add to Cart" button
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Get the product name from the button's data attribute
        const productName = this.getAttribute('data-product');

        // Add the product to the cart items array
        cartItems.push(productName);

        // Increment the cart count
        cartCount = cartItems.length;

        // Update the cart count on the page
        document.getElementById('cart-count').textContent = cartCount;

        // Save the updated cart data to localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        localStorage.setItem('cartCount', cartCount);

        // Show the alert notification
        alertElement.textContent = `${productName} added to cart!`;
        alertElement.classList.add('show');

        // Hide the alert after 3 seconds
        setTimeout(() => {
            alertElement.classList.remove('show');
        }, 3000);

        // Optionally, log the product added to the cart for debugging
        console.log(`${productName} added to cart.`);
    });
});
