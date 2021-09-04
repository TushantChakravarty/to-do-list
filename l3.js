

let i;
let txt= document.querySelector(".txt");
let btn= document.querySelector(".btn");
let text= document.querySelector(".text");


btn.addEventListener("click", add);
text.addEventListener("click",delcheck);
let container=document.querySelector(".container");
/*container.style.backgroundColor="black";*/
function add(){
    let t= txt.value;
    
    let todo=document.createElement("li");
    todo.innerText=`${t}`;
    
    todo.style.backgroundColor="grey";
    todo.style.color="black";
    todo.classList.add("todoo");
   
    let cbt=document.createElement("button");
    cbt.innerHTML= `<i class="fas fa-check"></i>`;
    cbt.innerText="completed";
    cbt.classList.add("complete-btn");
    cbt.style.backgroundColor="green";
    let dbt=document.createElement("button");
    dbt.innerHTML= `<i class="fas fa-check"></i>`;
    dbt.innerText="trash";
    dbt.style.backgroundColor="red";
    dbt.classList.add("delete-btn");
    todo.style.display="flex";
    todo.style.justifyContent="space-evenly";
   /* text.style.display="flex";
    text.style.flex-direction="row";
    text.style.justifyContent="space-evenly";*/

    todo.appendChild(cbt);
    todo.appendChild(dbt);
    
   
    text.appendChild(todo);
    todo.style.margin="20px";

    /*text.appendChild(cbt);
    text.appendChild(dbt);*/
    txt.value="";
    

} 


function delcheck(e){
    
   let item= e.target;
   if(item.classList[0]===`delete-btn`){
   let todd= item.parentElement;
   todd.remove();
   }
   if(item.classList[0]===`complete-btn`){
    let todd= item.parentElement;
    todd.classList.toggle("completed");
    }
    

}

