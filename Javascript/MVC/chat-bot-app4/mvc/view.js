
export default class View {

    constructor(){
       
        this.input=document.getElementById("input");
        this.iconCancel=document.getElementById("icon-cancel");
        this.showChatBox=document.getElementById("showChatBox");
         this.iconSend=document.getElementById("icon-send");
    }

showChatBot(styleObject){
    main.style.display=styleObject.display3;
    showChatBox.style.display=styleObject.display1;
}


removeChatBox(styleObject){
    const main=document.getElementById("main");
    const showChatBox=document.getElementById("showChatBox");
  main.style.display=styleObject.display1;
  showChatBox.style.display=styleObject.display2;
  const messagesContainer=document.getElementById("messagesContainer");
  messagesContainer.innerHTML=styleObject.container;
}


//CLASS ICINDE 2 FONKS BIRBIRININ ICINDE NASIL CALISIR
// createNewElement(idName,className){
//     let newElement=document.createElement("p");
//     newElement.setAttribute("id",idName);
//     newElement.setAttribute("class",`${idName} ${className}`);
// }

 addChatEntry(input,randomAnswer){
    const messagesContainer=document.getElementById("messagesContainer");
  //  User-P-bunu da fonks. yap
    let userP=document.createElement("p");
    userP.setAttribute("id","user");
    userP.setAttribute("class","user response");
    //const userP=  this.createNewElement("user","response");
     userP.innerHTML=input; 
    messagesContainer.appendChild(userP);
  //bot-
  let botP=document.createElement("p");
  botP.setAttribute("id","bot");
  botP.setAttribute("class","bot response");
//   const botP=  this.createNewElement("bot","response");
  botP.innerHTML=" Typing.... ";
  messagesContainer.appendChild(botP);
  
  //Scroll u her zaman en altta tutuyor
  messagesContainer.scrollTop=messagesContainer.scrollHeight;
  
  setTimeout(()=>{
    botP.innerHTML=randomAnswer;
  },1200)
  
  }


}