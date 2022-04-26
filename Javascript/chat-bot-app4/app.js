
 


const utterances = [
  ["how are you", "how is life", "how are things"], //0
  ["hi", "hey", "hello", "good morning", "good afternoon"], //1
  ["what are you doing", "what is going on", "what is up"], //2
  ["how old are you"], //3
  ["who are you", "are you human", "are you bot", "are you human or bot"], //4
];

// Possible responses corresponding to triggers
const answers = [
  [
    "Fine... how about you?",
    "Pretty well, what about you?",
    "Fantastic, And you?",
  ], //0
  ["Hello!", "Hi!", "Hey!", "Hi there!", "Howdy"], //1
  [
    "Nothing much",
    "About to go to sleep",
    "Can you guess?",
    "I don't know actually",
  ], //2
  ["I am infinite"], //3
  ["I am just a bot", "I am a bot. What are you?"], //4
];

// For any other user input
const alternatives = ["Go on...", "Try again"];

//Eger enter a basilmis ama cevap hic gelmemis ise...yani bos ise input
//Validation icinde yapabiliriz

//2 array icindeki elementleri nasil karsilastiririz
//1-JSON.stringfy a cevirdikten sonra string mehtodlari ile o string icinde aranan string var mi cok kolay bir sekilde cek edehbiliriz
//2-for dongusu
//Gelen mesaji uttarence icinde 2 kez dongu yapiyor ve ariyor ve karsilastiriyor eger gelene mesaj uttalence icinde varsa o zamanda uttalence dizisinin index i kac ise ayni index teki answer icinden cevabi random olarak veiryor cunku gelen soru eger var ise ona cevap olarak birkac alternatif hazirlanmis daha guzel olsun diye, onlari random gonderiyor




// inputField.addEventListener("keydown", function(e) {
//     if (e.code === "Enter") {
//         let input = inputField.value;
//         console.log("input: ",input);
//         inputField.value = "";
//        output(input);
// }
// });

//Controller
function sendMessage(event){
    const inputField = document.getElementById("input")
  // if (e.code === "Enter") {
    let input = inputField.value;
    console.log("input: ",input);
    inputField.value = "";
   output(input);

}//  }


//model
function generateRandomAnswer(uttarencesArray, answersArray, message) {
  let item;
  for (let index = 0; index<uttarencesArray.length; index++) {
      //Cek et cunku index geliyor ama uttarncesArray in ilk elemaninin 3.elemenai yok undefined
    for (let uttarence of uttarencesArray[index] || [] ) { 
      if (uttarence.toLowerCase().includes(message.toLowerCase())) {
        const answer = answersArray[index] || []; //bunu yapmazsak undefined aliriz
        item = answer[Math.floor(Math.random() * answer.length)];
      }
    }
  }
  return item;
}


//Validation ve input cek...et ve de randomAnswer uretirse onu al uretmezse alternatif metinle cevap don...
//Model
function output(input){
  let randomAnswer;
//  let text=input.toLowerCase().replace(/[^\w\s\d\?]/gi, "");
  let text=input.toLowerCase().replace(/[^a-zA-Z0-9-" "-?]/g, '');
  text=text.replace(/whats/g, "what is");
  if(generateRandomAnswer(utterances,answers,text)){
    randomAnswer=generateRandomAnswer(utterances,answers,text);
  }else {
    randomAnswer=alternatives[Math.floor(Math.random()* alternatives.length)];
  }
  //updateDom- dizilerimizi kullandigmiz yerlerde updatedom yapalim ki degisiklikler elementlerimize yansisin...

 addChatEntry(input,randomAnswer);
}





//view......
function addChatEntry(input,randomAnswer){
  const container=document.getElementById("container");
  const messagesContainer=document.getElementById("messagesContainer");
  
  //User-P-bunu da fonks. yap
  let userP=document.createElement("p");
  userP.setAttribute("id","user");
  userP.setAttribute("class","user response");
  userP.innerHTML=input;

  
  messagesContainer.appendChild(userP);
  // messagesContainer.innerHTML+=userP.innerHTML;

//bot-

let botP=document.createElement("p");
botP.setAttribute("id","bot");
botP.setAttribute("class","bot response");
botP.innerHTML=" Typing.... ";
messagesContainer.appendChild(botP);

//Scroll u her zaman en altta tutuyor
messagesContainer.scrollTop=messagesContainer.scrollHeight;
// messagesContainer.innerHTML+=botP.innerHTML;
setTimeout(()=>{
  botP.innerHTML=randomAnswer;
},1200)


}




//addEventlistener silinince tum eventlari da sildigi icin artik onun click ozelligini bulamiyor ama bu butonda boyle degil
const showChatBox=document.getElementById("showChatBox");
const main=document.getElementById("main");


function removeChatBox(){
  main.style.display="none";
  showChatBox.style.display="flex";
  console.log("showChatBox: ", showChatBox);
  const messagesContainer=document.getElementById("messagesContainer");
  messagesContainer.innerHTML="";

}




function showChatBotBox(){
  main.style.display="block";
showChatBox.style.display="none";
}


