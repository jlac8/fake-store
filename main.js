import { fetchProducts } from "./modules/fetch.js";

document.querySelector("#app").innerHTML = `
  <header class="site-header">
    <nav>
      <ul class="site-header__nav-list">
        <li><a class="site-header__nav-link" href="#">Home</a></li>
        <li><a class="site-header__nav-link" href="#">About</a></li>
        <li><a class="site-header__nav-link" href="#">Contact</a></li>
        <li><a class="site-header__nav-link" href="#">Cart</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section>
      <h1>Welcome to Fake Store</h1>
      <p>Buy fast the latest products!</p>
    </section>
    <section id="products-container">
      <p>Loading products...</p>
    </section>
  </main>
  <footer>
    <p>&copy; 2024 Fake Store. All rights reserved.</p>
  </footer>
`;

const productsContainer = document.getElementById("products-container");

fetchProducts(productsContainer);
