// Product Array
const products = [
    { id: "product1", name: "Smartphone" },
    { id: "product2", name: "Laptop" },
    { id: "product3", name: "Tablet" },
    { id: "product4", name: "Smartwatch" }
  ];
  
  // Populate Product Name options dynamically
  const productNameSelect = document.getElementById("productName");
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    productNameSelect.appendChild(option);
  });
  
  // Update footer year and last modified
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
  