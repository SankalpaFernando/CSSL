const checkbox = document.getElementById("checkbox_toggle");
const navItems = document.getElementById("nav-items");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
checkbox.addEventListener("click", async () => {
  let opened = navItems.style.display == "flex";
  console.log(
    "🚀 ~ file: index.html:236 ~ checkbox.addEventListener ~ opened:",
    opened
  );
  if (opened) {
    navItems.setAttribute("style", "display: none !important;");
  } else {
    navItems.setAttribute("style", "display: flex !important;");
  }
});


