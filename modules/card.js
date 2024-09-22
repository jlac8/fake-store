import { setupTimer } from "./timer.js";

export function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";

  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.title;

  const title = document.createElement("h2");
  title.textContent = product.title;

  const price = document.createElement("p");
  price.textContent = `Precio: $${product.price}`;

  const category = document.createElement("p");
  category.textContent = `Categoría: ${product.category}`;

  const description = document.createElement("p");
  description.textContent =
    product.description.length > 100
      ? `${product.description.substring(0, 100)}...`
      : product.description;

  const timer = document.createElement("p");
  timer.className = "timer";

  const detailBtn = document.createElement("button");
  detailBtn.textContent = "Go to Detail";
  detailBtn.className = "product-card__button";

  card.append(img, title, price, category, description, timer, detailBtn);

  setupTimer(timer, detailBtn);

  return card;
}
