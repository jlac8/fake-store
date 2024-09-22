import "./style.css";
import { setupTimer } from "./modules/timer.js";

document.querySelector("#app").innerHTML = `
  <header>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Cart</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section>
      <h1>Welcome to Fake Store</h1>
      <p>Shop the latest products!</p>
    </section>
    <section id="products-container">
      <p>Loading products...</p>
    </section>
  </main>
  <footer>
    <p>&copy; 2024 Fake Store. All rights reserved.</p>
  </footer>
`;
