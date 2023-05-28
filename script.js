const addTaskBTn = document.querySelector('#addTask'),
DelAllTask = document.querySelector('#DelAllTask'),
errorBox = document.querySelector('.error'),
task_Ul = document.querySelector('.task-ul '), 
GetTask = document.querySelector('#getData');

let li ;
let editBTnHtml = "<i class='bx bxs-message-square-edit'></i>",
saveBTnHtml  = "<i class='bx bxs-save' ></i>";


document.addEventListener('keydown',(e)=>{
    if(e.key == 'Enter'){
        addTaskBTn.click()
    }
    else if(e.key == "Delete"){
        DelAllTask.click()
    }

})
window.addEventListener('load',()=>{
    GetTask.focus()
})
addTaskBTn.addEventListener('click',()=>{
    if(GetTask.value != ''){
        
        li = `<div class="mian-li">
        <li class="task-li">
        <span class="taskNo"></span>
        <textarea  class="textarea" placeholder="My Task" readonly>${GetTask.value}</textarea>
        <te >
        </li>
        <span class="li-btn">
            <button  class="btn green taskEditBtn">Edit</button>
            <button  class="btn red taskDelBtn"><i class='bx bxs-message-square-x' ></i>delete task</button>
        </span>
    </div>`
task_Ul.insertAdjacentHTML('beforeend',li);

let allLiSelector = document.querySelectorAll('.mian-li');


allLiSelector.forEach((crr,i)=>{
  let taskEditBtn = crr.querySelector('.taskEditBtn');
  let  taskDelBtn = crr.querySelector('.taskDelBtn');
  let  taskNo = crr.querySelector('.taskNo');
  let  taskInput = crr.querySelector('.textarea') ;
taskNo.innerHTML = `Task No : ${i+1}`;
taskEditBtn.onclick = ()=>{
    taskEditBtn.innerHTML === "Edit" ? taskEditBtn.innerHTML = 'Save':taskEditBtn.innerHTML = "Edit";
    taskInput.toggleAttribute('readonly');
    taskInput.focus()
}
// delete
taskDelBtn.addEventListener('click',()=>{
    crr.remove()
   })});
        GetTask.value = ''
        errorBox.innerHTML = ''
    }
    else{
    errorBox.innerHTML = 'please write the task'
    }
    
})

DelAllTask.addEventListener('click',()=>{
    if(confirm() === true){
    task_Ul.innerHTML = ''
    }
})