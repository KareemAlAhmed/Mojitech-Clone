
let btn=document.getElementById("btn");
let inp=document.querySelector(".test")
let result=document.querySelector(".result")

let tasksArray=[];

if(window.localStorage.getItem("task")){
  tasksArray=JSON.parse(window.localStorage.getItem("task"));
}
addingValueFromLocalStorage();



btn.onclick=function(e){
   if(inp.value !==""){
      addingValueTo(inp.value);  // Adding value to the task 
      inp.value="";
    
   }
}

result.addEventListener("click",(e)=>{
  if(e.target.classList.contains("delete")){
      e.target.parentElement.remove();
  }
  else if(e.target.classList.contains("task")){
      e.target.classList.toggle("done")
  }
 
})

function addingValueTo(textInfo){
   let task={
      id:Date.now(),
      title:textInfo,
      completed:false,
   }
   tasksArray.push(task) // Adding value to the array
   addingElementToThePage(tasksArray);
   addingValueToTheLocalStorage() // Adding value to local storage
}

function addingElementToThePage(tasksArray){
   result.innerHTML="";
   tasksArray.forEach((task)=>{
      let div=document.createElement("div");
      let del=document.createElement("span");
      del.appendChild(document.createTextNode("Delete"));
      del.classList.add("delete");
      div.classList.add("task");
      div.appendChild(document.createTextNode(task.title));
      div.appendChild(del)
      result.appendChild(div);
      
   })
}
function addingValueToTheLocalStorage(){
   let tasks1=JSON.stringify(tasksArray);
   window.localStorage.setItem("task",tasks1);
}

function addingValueFromLocalStorage(){
  let data=window.localStorage.getItem("task");
  if(data){
    let tasks=JSON.parse(data);
    addingElementToThePage(tasks);
  }
}