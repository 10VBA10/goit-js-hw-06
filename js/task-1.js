const categoriesList = document.querySelector("#categories");
const quantity = categoriesList.children;
console.log(`Number of categories:${quantity.length}`);

[...quantity].forEach((item) => {
  console.log(`Category:${item.querySelector("h2").textContent}`);
  console.log(`Elements:${item.querySelectorAll("li").length}`);
});