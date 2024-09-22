import { displayProducts } from "./display.js";

export function fetchProducts(container) {
  fetch("https://fakestoreapi.com/products")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      return response.json();
    })
    .then((products) => {
      displayProducts(container, products);
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
      container.innerHTML =
        "<p>Error loading products. Please try again later.</p>";
    });
}
