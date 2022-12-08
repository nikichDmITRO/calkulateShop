const input = document.querySelector(".input-toDo");
const inputElem=document.querySelector(".input-elem")
const button = document.querySelector(".buttonAdd");
let summ = document.querySelector(".summ");
let data = document.querySelector(".data");




let obj=[];
obj=JSON.parse (localStorage.getItem ("object"));


if (localStorage.getItem(obj)) {
  obj =  localStorage.setItem ("object", JSON.stringify(obj));
} else {
 
}
console.log(obj)


function sum(obj){
  let sum=0
  let arr=[]
  for(let i=0;i<obj.length;i++){
     arr.push(obj[i].cost)
  }

  if(obj.length>0){
    sum= `${arr.reduce((a, b) => +a + +b)} bun`;
  }

  summ.innerHTML=sum
  console.log(arr)
  console.log(sum)
}
sum(obj)

// if (obj.length > 0) {
//      summ.innerHTML = `${obj.cost.reduce((a, b) => +a + +b)} bun `;
//   } else {
//      summ.innerHTML = `0 bun`;
//    }


console.log(summ);

data.innerHTML = obj
  .map(
    (el, ind) =>
      `<div class="data-item ">${
        ind + 1
      }<p>${el.elem}</p><p class="gr">${el.cost+ " bun"}</p><button class="deleteBtn" data-itemid=${ind}>Удалить</button></div>`
  )
  .join("");

button.addEventListener("click", () => {

  if (input.value) {

    objItem={
      elem:inputElem.value,
      cost:input.value
    }

    obj.push(objItem)
   
   
    localStorage.setItem ("object", JSON.stringify(obj));
 
data.innerHTML = obj
      .map(
        (el, ind) =>
          `<div class="data-item ">${
            ind + 1
          }<p>${el.elem}</p><p class="gr">${el.cost+" bun"}</p><button class="deleteBtn" data-itemid=${ind}>Удалить</button></div>`
      )
      .join("");
  }
  sum(obj)
  // if (sta.length > 0) {
  //   summ.innerHTML = `${sta.reduce((a, b) => +a + +b)} bun `;
  // } else {
  //   summ.innerHTML = `0 bun`;
  // }
});

data.addEventListener("click", (event) => {
  if (event.target.classList.contains("deleteBtn")) {
    console.log(event.target);

    obj.splice(event.target.dataset.itemid, 1);
    obj =  localStorage.setItem ("object", JSON.stringify(obj));
    location.reload();
  }
  sum(obj)

});
