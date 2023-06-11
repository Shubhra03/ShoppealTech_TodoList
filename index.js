let arrayEle = [];
let editElem = null;
const taskValue=document.getElementById('new-task');
const taskBtn = document.getElementById('submit');
const tasklist = document.getElementById('second-row');
let objs = localStorage.getItem('tasks');
if(objs != null){
arrayEle = JSON.parse(objs);}
console.log(arrayEle);
DisplayItem();
taskBtn.onclick=()=>{
    const taskname = taskValue.value;
    if(editElem!=null){
       arrayEle.splice(editElem,1,{'taskname': taskname});
       editElem=null;
    }
    else{
    if(!taskname){
        alert("please fill the task");
    }
    else{
    arrayEle.push({'taskname': taskname});
    }}
    // console.log(arrayEle);
    SaveItem(arrayEle);
    taskValue.value='';
    taskBtn.value='Add';
    
}
function SaveItem(arr){
    let s = JSON.stringify(arr);
    localStorage.setItem('tasks',s);
    DisplayItem();
}
function DisplayItem(){
    let statement = '';
    arrayEle.forEach((user,i) => {
        statement+=`<div class="row third-row">
        <div class="col-8 div-task">
        <textarea class="p-task" disabled>${user.taskname}</textarea>
        </div>
        <div class="col-4 div2-task">
         <button class="de-btn" onclick='DeleteItem(${i})'><i class="fa-regular fa-trash-can" style="color: #fdfcfc;"></i></button>
         <button class="ed-btn" onclick='EditItem(${i})'><i class="fa-sharp fa-solid fa-pen-to-square" style="color: #fdfcfc;"></i></button>
        </div>
        <hr id="hrl">
      </div>`;
    });
    tasklist.innerHTML=statement;
}
function EditItem(id){
editElem=id;
taskValue.value=arrayEle[id].taskname;
taskBtn.value = 'Save Changes';
}
function DeleteItem(id){
    // alert(id);

    arrayEle.splice(id,1);
    SaveItem(arrayEle);
  
}