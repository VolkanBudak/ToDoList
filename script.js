const output = document.querySelector(".output");
const output1 = document.createElement("div");
const ul = document.createElement("ul");
output.append(output1);
output.append(ul);
const url = "todo.json";
window.addEventListener("DOMContentLoaded", () => {
  output1.textContent = "My To Do list!";
  loadData();
});

function loadData() {
  fetch(url)
    .then((rep) => rep.json())
    .then((data) => {
      addtoPage(data);
    });
}

function addtoPage(arr) {
  arr.forEach((el) => {
    console.log(el);
    const li = document.createElement("li");
    li.textContent = el.name;
    if (el.status) {
      li.classList.add("active");
    } else {
      li.classList.add("inactive");
    }
    ul.append(li);
    li.addEventListener("click", (e) => {
      li.classList.toggle("active");
      li.classList.toggle("inactive");
    });
  });
}
