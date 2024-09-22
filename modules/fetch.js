export async function fetchProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}
