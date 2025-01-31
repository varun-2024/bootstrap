// Sample product data
const products = [
    { id: 1, name: "Product 1", price: 19.99, image: "images/product1.jpg" },
    { id: 2, name: "Product 2", price: 29.99, image: "images/product2.jpg" },
    { id: 3, name: "Product 3", price: 39.99, image: "images/product3.jpg" },
  ];
  
  let cart = [];
  
  // Render products
  const productList = document.querySelector(".product-list");
  products.forEach(product => {
    const productElement = document.createElement("div");
    productElement.className = "product";
    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(productElement);
  });
  
  // Add to cart
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
      cart.push(product);
      updateCart();
    }
  }
  
  // Update cart UI
  function updateCart() {
    const cartItems = document.querySelector(".cart-items");
    const cartTotal = document.getElementById("cart-total");
    const cartCount = document.getElementById("cart-count");
  
    cartItems.innerHTML = "";
    let total = 0;
  
    cart.forEach(item => {
      const cartItem = document.createElement("div");
      cartItem.className = "cart-item";
      cartItem.innerHTML = `
        <span>${item.name}</span>
        <span>$${item.price.toFixed(2)}</span>
      `;
      cartItems.appendChild(cartItem);
      total += item.price;
    });
  
    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = cart.length;
  }
  
  // Toggle cart visibility
  document.querySelector("nav a:nth-child(3)").addEventListener("click", () => {
    document.getElementById("cart").classList.toggle("hidden");
  });
  
  // Checkout
  document.getElementById("checkout-btn").addEventListener("click", () => {
    document.getElementById("cart").classList.add("hidden");
    document.getElementById("checkout").classList.remove("hidden");
  });
  
  // Mock payment
  document.getElementById("payment-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Payment successful! Thank you for your purchase.");
    cart = [];
    updateCart();
    document.getElementById("checkout").classList.add("hidden");
  });