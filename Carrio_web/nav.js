const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navLinks = document.getElementsByClassName("navLinks")[0];
const navBar = document.getElementById("navBar");

toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
console.clear();
