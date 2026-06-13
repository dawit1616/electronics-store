let cartCount = 0;

const cart = document.getElementById("cart");
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    cartCount++;
    cart.textContent = "🛒 Cart: " + cartCount;
  });
});
