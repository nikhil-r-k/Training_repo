class MyTask{
    taskNo;
    name;
    description;
}
let tasklist=[
    {
    taskNo:1,
    name:"TASK 1",
    description:"DESCRIPTION FOR TASK 1"
    },
    {
    taskNo:2,
    name:"TASK 2",
    description:"DESCRIPTION FOR TASK 2"
    },
]
let initial=0;
function changepreview(task){
    console.log(task, typeof task)
    if (initial==task){
        document.getElementById(`${String(initial)}`).style.backgroundColor="beige";
        document.getElementById("preview").innerHTML=`..Preview..`
        initial=0;
    }
    else{
        if (initial!=0){
        document.getElementById(`${String(initial)}`).style.backgroundColor="beige";
        }
        initial=task;
        document.getElementById("preview").innerHTML=`
        <h2>Task: ${tasklist[task-1].name}</h2>
        <p>Description: ${tasklist[task-1].description}</p>
        `
        document.getElementById(`${task}`).style.backgroundColor="aqua"
    }
}

function listtask(task){
    console.log(task)
    document.getElementById('list').innerHTML+=`
    <button class='tasks' type="button" id="${task.taskNo}" onclick="changepreview('${task.taskNo}')">${task.taskNo}. ${task.name}</button>
    `
}
tasklist.forEach(listtask)


function newtask(){
    document.getElementById("newmov").style.display="block"
    document.getElementById('name').value=''
    document.getElementById('description').value=''
}
function addtask(){
    var newt= new MyTask();
    newt.taskNo=tasklist.length+1
    newt.description=document.getElementById("description").value
    newt.name=document.getElementById("name").value
    tasklist.push(newt)
    console.log(tasklist)
    document.getElementById('list').innerHTML+=`
    <button class='tasks' type="button" id="${newt.taskNo}" onclick="changepreview('${newt.taskNo}')">${newt.taskNo}. ${newt.name}</button>
    `
    document.getElementById("newmov").style.display="none"
    document.getElementById('description').setAttribute("disabled","true")
    document.getElementById('Add').setAttribute("disabled","disabled")
}


document.getElementById('name').addEventListener('keyup',()=>{
    if (document.getElementById('name').value){
        document.getElementById('description').removeAttribute("disabled")
    }
    else{
        document.getElementById('description').setAttribute("disabled","true")
        document.getElementById('Add').setAttribute("disabled","disabled")
    }
})
document.getElementById('description').addEventListener('keyup',()=>{
    if (document.getElementById('description').value){
        document.getElementById('Add').removeAttribute("disabled")
    }
    else{
        document.getElementById('Add').setAttribute("disabled","disabled")
    }
})

