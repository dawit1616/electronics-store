let cartCount = 0;

const cartDisplay = document.getElementById("cart");

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    cartCount++;

    if (cartDisplay) {
      cartDisplay.textContent = "🛒 Cart: " + cartCount;
    }
  });
});
