const products = [
    { id: 1, name: "Eco-friendly Water Bottle", category: "Home", price: 15, tags: ["eco-friendly", "new"] },
    { id: 2, name: "Organic Cotton T-shirt", category: "Apparel", price: 25, tags: ["eco-friendly"] },
    { id: 3, name: "Wireless Headphones", category: "Electronics", price: 200, tags: ["new", "sale"] }
    // More products...
  ];
  
  function renderProducts(products) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
  
    if (products.length === 0) {
      productList.textContent = "No products found.";
    } else {
      products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.innerHTML = `
          <h3>${product.name}</h3>
          <p>Category: ${product.category}</p>
          <p>Price: $${product.price}</p>
          <p>Tags: ${product.tags.join(", ")}</p>
        `;
        productList.appendChild(productDiv);
      });
    }
  }
  
  function filterProducts() {
    const categoryFilter = document.getElementById("category").value;
    const tagFilters = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value);
  
    let filteredProducts = products.filter(product => {
      if (categoryFilter !== "all" && product.category !== categoryFilter) {
        return false;
      }
      return tagFilters.every(tag => product.tags.includes(tag));
    });
  
    renderProducts(filteredProducts);
  }
  
  document.getElementById("category").addEventListener("change", filterProducts);
  document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => checkbox.addEventListener("change", filterProducts));
  
  // Initial rendering of all products
  renderProducts(products);
  