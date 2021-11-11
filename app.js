//queryselectors
const taskInput=document.querySelector('.taskInput') 

 const addTask = document.querySelector('.addTaskBtn')
 const tasks = document.querySelector('.tasks')

//addeventListeenrs
addTask.addEventListener('click',taskAdder)
var tasksList =[]
//functions
function taskAdder(event){
    event.preventDefault()
    tasksList.push(taskInput.value)
    console.log(tasksList)
    taskInput.value =""
    displayTasks(tasksList)

}
function displayTasks(tasksList){
    tasks.innerText=""
    tasksList.map((task,index)=>{
        const itemDiv = document.createElement("div")
        const item = document.createElement("h1")
        item.innerText+=task
        const deleteBtn = document.createElement("button")
        deleteBtn.innerText="Delete"
        deleteBtn.addEventListener("click",()=>deleteTask(index))
        itemDiv.appendChild(item)
        itemDiv.appendChild(deleteBtn)

        tasks.appendChild(itemDiv)

    })
}
function deleteTask(index){
    tasksList.splice(index,1)
    displayTasks(tasksList)

}