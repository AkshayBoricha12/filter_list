let names = document.querySelectorAll(".name");
let input = document.querySelector(".form-input");

function filterList() {
  let value = input.value.toLowerCase();

  for (const name of names) {
    name.style.display = "block";
  }

  for (const name of names) {
    if (!name.innerHTML.toLowerCase().includes(value)) {
      name.style.display = "none";
    }
  }
}
