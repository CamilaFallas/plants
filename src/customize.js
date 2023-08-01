const colorToggle = document.getElementById("color-toggle");
const colorOptions = document.getElementById("color-options");

colorToggle.addEventListener("change", () => {
  if (colorToggle.checked) {
    colorOptions.style.display = "none";
  } else {
    colorOptions.style.display = "block";
  }
});