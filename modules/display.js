import { createProductCard } from "./card.js";

export function displayProducts(container, products) {
  container.innerHTML = "";

  products.forEach((product) => {
    const productCard = createProductCard(product);
    container.appendChild(productCard);
  });
}
