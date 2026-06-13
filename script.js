let cart = [];

const cartDisplay = document.getElementById("cart");
const buttons = document.querySelectorAll("button");

const products = document.querySelectorAll(".card");

products.forEach((product, index) => {
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

  if (cartDisplay) {
    cartDisplay.textContent =
      "🛒 Items: " + cart.length + " | 💰 Total: " + total + " ETB";
  }
}
