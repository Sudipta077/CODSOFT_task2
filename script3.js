const listArray = localStorage.getItem('list')?JSON.parse(localStorage.getItem('list')):[];
console.log(listArray);
let obj = localStorage.getItem('list');
JSON.parse(obj);
const display=()=>{
  let statement = '';
  listArray.forEach((element,i) => {
    statement+=`<div class="tasks"><h1>${element}</h1><button id="delete" onClick=Delete(${i}) class="delete">Delete</button></div>`
  });
  const divContainer =document.getElementById("divContainer");
  divContainer.innerHTML=statement;
}
const Delete=(i)=>{
    listArray.splice(i,1);
    localStorage.setItem('list',JSON.stringify(listArray));
    display();
  }
  
const handleClick=()=>{
  const text=document.getElementById('inputText').value;
  console.log(text);
  listArray.push(text);
  localStorage.setItem('list',JSON.stringify(listArray));
  display();
  inputText.value = '';
}
display();

