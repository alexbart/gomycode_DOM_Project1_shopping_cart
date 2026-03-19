// Select all necessary DOM elements
const cartItems = document.querySelectorAll('.card');
const totalPriceEl = document.querySelector('.total-price');

// Function to calculate total price
function updateTotal() {
    let total = 0;
    cartItems.forEach(card => {
        const quantity = parseInt(card.querySelector('.quantity').textContent);
        const priceText = card.querySelector('.unit-price').textContent;
        const price = parseFloat(priceText.replace('$', '').trim());
        total += price * quantity;
    });
    totalPriceEl.textContent = total + ' $';
}

// Add functionality to each cart item
cartItems.forEach(card => {
    const plusBtn = card.querySelector('.plus');
    const minusBtn = card.querySelector('.minus');
    const deleteBtn = card.querySelector('.delete');
    const likeBtn = card.querySelector('.like');
    const quantityEl = card.querySelector('.quantity');

    // Plus button
    plusBtn.addEventListener('click', () => {
        quantityEl.textContent = parseInt(quantityEl.textContent) + 1;
        updateTotal();
    });

    // Minus button
    minusBtn.addEventListener('click', () => {
        let currentQty = parseInt(quantityEl.textContent);
        if (currentQty > 0) {
            quantityEl.textContent = currentQty - 1;
            updateTotal();
        }
    });

    // Delete button
    deleteBtn.addEventListener('click', () => {
        card.remove(); // remove from DOM
        updateTotal();
    });

    // Like button
    likeBtn.addEventListener('click', () => {
        likeBtn.classList.toggle('text-pink-500'); // toggle heart color
    });
});

// Initialize total
updateTotal();