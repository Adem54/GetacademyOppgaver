






function talk(){
    let know={
        "Hi":"Hello",
        "How Are You?":"Great !",
        "Bye":"Have A Nice Day !",
    };
    let user=document.getElementById('userBox')
    let chatLog= document.getElementById('chatLog');
    let userValue=user.value;
    console.log("userValue: ",userValue);
    chatLog.innerHTML=userValue+ "<br/>";
     console.log("chatLog: ",chatLog.innerHTML);
    if(userValue in know){
        chatLog.innerHTML=know[userValue] + "<br/>";
    }else {
        chatLog.innerHTML="I do not understand";
    }
}