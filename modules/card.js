import { setupTimer } from "./timer.js";
import { disableButton } from "./disable.js";

export function createProductCard(product) {
  const card = document.createElement("article");
  card.className = "product-card";

  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.title;
  img.className = "product-card__image";

  const title = document.createElement("h2");
  title.textContent = product.title;
  title.className = "product-card__title";

  const section = document.createElement("section");
  section.className = "product-card__details";

  const price = document.createElement("p");
  price.textContent = `Price: $${product.price}`;

  const category = document.createElement("p");
  category.textContent = `Category: ${product.category}`;

  const description = document.createElement("p");
  description.textContent =
    product.description.length > 100
      ? `${product.description.substring(0, 100)}...`
      : product.description;

  section.append(price, category, description);

  const footer = document.createElement("div");
  footer.className = "product-card__footer";

  const timer = document.createElement("time");
  timer.className = "product-card__timer";

  const detailBtn = document.createElement("button");
  detailBtn.textContent = "Go to Detail";
  detailBtn.className = "product-card__button";

  footer.append(timer, detailBtn);

  card.append(img, title, section, footer);

  setupTimer(timer, () => disableButton(detailBtn));

  return card;
}
