// script.js

// Function to fetch and display products
async function fetchProducts() {
  try {
    const response = await fetch('/api/products'); // Assuming your products API endpoint
    const products = await response.json();

    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = ''; // Clear previous products

    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product');
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <button>Add to Cart</button>
      `;
      productsContainer.appendChild(productCard);
    });
  } catch (err) {
    console.error('Error fetching products:', err);
  }
}

// Function to handle adding products to cart
function addToCart(product) {
  // Add your cart logic here
  console.log('Added to cart:', product);
}

// Function to initialize the page
function init() {
  fetchProducts();

  // Event listener for add to cart buttons
  document.addEventListener('click', function(event) {
    if (event.target && event.target.matches('button')) {
      const product = event.target.closest('.product');
      addToCart(product);
    }
  });
}
function redirectToMain() {
  window.location.href = "index.html"; // Change index.html to the main page URL
}

// JavaScript code can be added here if needed, such as handling animations or interactions.

// Initialize the page
init();
