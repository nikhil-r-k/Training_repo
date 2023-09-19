class movie{
    taskNo;
    name;
    description;
}
let movies=[
    {
    taskNo:1,
    name:"nikhil1",
    description:"task1"
    },
    {
    taskNo:2,
    name:"nikhil2",
    description:"task2"
    },
]

function changepreview(task){
    document.getElementById("preview").innerHTML=`
    <h2>Task: ${movies[task-1].name}</h2>
    <p>Description: ${movies[task-1].description}</p>
    `
    document.getElementById(`${task}`).style.backgroundColor="blue"
}

function listtask(task){
    console.log(task)
    document.getElementById('list').innerHTML+=`
    <button class='tasks' type="button" id="${task.taskNo}" onclick="changepreview('${task.taskNo}')">${task.taskNo}. ${task.name}</button>
    `
}
movies.forEach(listtask)


function newtask(){
    document.getElementById("newmov").style.display="block"
    document.getElementById('name').value=''
    document.getElementById('description').value=''
}
function addtask(){
    var newt= new movie();
    newt.taskNo=movies.length+1
    newt.description=document.getElementById("description").value
    newt.name=document.getElementById("name").value
    movies+=[newt]
    document.getElementById('list').innerHTML+=`
    <button class='tasks' type="button" id="${newt.taskNo}" onclick="changepreview(${newt.taskNo})">${newt.taskNo}. ${newt.name}</button>
    `
    document.getElementById("newmov").style.display="none"
}


document.getElementById('name').addEventListener('keyup',()=>{
    if (document.getElementById('name').value){
        document.getElementById('description').removeAttribute("disabled")
    }
    else{
        document.getElementById('description').setAttribute("disabled","true")
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

