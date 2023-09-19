console.log("LoginPage")

function timeset(){
    const date=new Date();
    var datetime=date.toLocaleDateString()+"  "+date.toLocaleTimeString()
    document.getElementById("datetime").innerHTML=datetime
}

setInterval(timeset,1000)

const users=[
    {name:'admin',pw:'adminpw'},
    {name:"user1",pw:'user1pw',module:"1"},
    {name:"user2",pw:'user2pw',module:"2"}
]

let logCount=1;
function validate(){
    event.preventDefault()

    console.log("Trial: ",logCount)
    
    var current_user=document.getElementById("user")
    localStorage.setItem("userID",current_user.value)
    var curr_pw=document.getElementById("password")
    localStorage.setItem("password",curr_pw.value)

    let i=0
    var user_found=false;
    
    for (; i<users.length;i++){
        if (users[i].name===current_user.value){
            user_found=true
            console.log('user found')
            if(users[i].pw===curr_pw.value){
                if(current_user.value==="admin"){
                window.location.replace("adminpage.html")
                }
                else{
                    window.location.replace("module"+users[i].module+".html")
                }
            }else{
                console.log("wrg pw")
                alert("invalid password")
                break;
            }
        }
    }
    if(i===users.length && user_found==false){
       alert("invalid credentials")
    }

}


// if (document.getElementById("user").value===users.u1.name){
//     if(document.getElementById("password").value===users.u1.pw){
//         localStorage.setItem(document.getElementById("user").value,document.getElementById("password").value)
//         sessionStorage.setItem(document.getElementById("user").value,document.getElementById("password").value)
//         console.log("open admin page");
//         logCount=1;
//         window.location.replace("adminpage.html");
//         return false;
//     }else{
//         console.error("Wrong PassWord")
//     }
// }else if (document.getElementById("user").value===users.u2.name){
//     if(document.getElementById("password").value===users.u2.pw){
//         console.log("open user page");
//         logCount=1
//     }else{
//         console.error("Wrong PassWord")
//     }
// }else{
//     console.error("Invalid User")
//     logCount+=1
//     if (logCount===4){
//         document.getElementById('login').setAttribute("disabled","disabled")
//     }
// }