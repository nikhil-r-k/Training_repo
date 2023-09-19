function timeset(){
    const date=new Date();
    var datetime=date.toLocaleDateString()+"  "+date.toLocaleTimeString()
    document.getElementById("datetime").innerHTML=datetime
}

setInterval(timeset,1000)