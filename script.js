let cart = [];

const cartDisplay = document.getElementById("cart");
const products = document.querySelectorAll(".card");

products.forEach((product) => {
  const button = product.querySelector("button");
  const name = product.querySelector("h3").innerText;
  const priceText = product.querySelector("p").innerText;
  const price = parseInt(priceText.replace(/[^0-9]/g, ""));

  button.addEventListener("click", () => {
    cart.push({ name, price });
    updateCart();
  });
});

function updateCart() {
  let total = 0;

  cart.forEach(item => {
    total += item.price;
  });

  cartDisplay.textContent =
    "🛒 Items: " + cart.length + " | 💰 Total: " + total + " ETB";
}
