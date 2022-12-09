const input = document.querySelector(".input-toDo");
const inputElem = document.querySelector(".input-elem");
const button = document.querySelector(".buttonAdd");

let summ = document.querySelector(".summ");
let data = document.querySelector(".data");
let obj = [];

if (JSON.parse(localStorage.getItem("object"))) {
  obj = JSON.parse(localStorage.getItem("object"));
}
function sum(obj) {
  let sum = 0;
  let arr = [];

  for (let i = 0; i < obj.length; i++) {
    arr.push(obj[i].cost);
  }
  if (obj.length > 0) {
    sum = `${arr.reduce((a, b) => +a + +b)} bun`;
  }
  summ.innerHTML = sum;
}
sum(obj);

data.innerHTML = obj
  .map(
    (el, ind) =>
      `<div class="data-item ">${ind + 1}<p>${el.elem}</p><p class="gr">${
        el.cost + " bun"
      }</p><button class="deleteBtn" data-itemid=${ind}>Удалить</button></div>`
  )
  .join("");
button.addEventListener("click", () => {
  if (input.value&&inputElem.value&&input.value>0) {
    
    objItem = {
      elem: inputElem.value,
      cost: input.value,
    };
    obj.push(objItem);

    localStorage.setItem("object", JSON.stringify(obj));
    data.innerHTML = obj
      .map(
        (el, ind) =>
          `<div class="data-item ">${ind + 1}<p>${el.elem}</p><p class="gr">${
            el.cost + " bun"
          }</p><button class="deleteBtn" data-itemid=${ind}>Удалить</button></div>`
      )
      .join("");
  }
  else if (input.value<=0){
    alert("Цена товара не может быть отрицательной или ровняться нулю")
}
  sum(obj);
  inputElem.value = "";
  input.value = "";
});
data.addEventListener("click", (event) => {
  if (event.target.classList.contains("deleteBtn")) {
    console.log(event.target);

    obj.splice(event.target.dataset.itemid, 1);
    obj = localStorage.setItem("object", JSON.stringify(obj));
    location.reload();
  }
  sum(obj);
});
