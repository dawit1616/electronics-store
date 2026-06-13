let cartCount = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    cartCount++;
    alert("Item added to cart 🛒 Total items: " + cartCount);
  });
});
