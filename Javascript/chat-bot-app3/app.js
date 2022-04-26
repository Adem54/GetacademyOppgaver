//User sentences
//Model
const utterances = [
  ["how are you", "how is life", "how are things"], //0
  ["hi", "hey", "hello", "good morning", "good afternoon"], //1
  ["what are you doing", "what is going on", "what is up"], //2
  ["how old are you"], //3
  ["who are you", "are you human", "are you bot", "are you human or bot"], //4
  ["Bye", "See you"], //5
];

// Possible responses corresponding to triggers
//Bot answers
const answers = [
  [
    "Fine... how about you?",
    "Pretty well, what about you?",
    "Fantastic, And you?",
  ], //0
  ["Hello!", "Hi!", "Hey!", "Hi there!"], //1
  [
    "Nothing much",
    "About to go to sleep",
    "Can you guess?",
    "I don't know actually",
  ], //2
  ["I am infinite"], //3
  ["I am just a bot", "I am a bot. What are you?"], //4
  ["Bye", "See you"], //5
];

// For any other user input-hvis vi bommer
const alternatives = ["Go on...", "Try again"];

//VIEW-Vi introduserer event.handling element og introduserer addEventlistener in view
const inputField = document.getElementById("input");
inputField.addEventListener("keyup", sendMessage);//WE ARE LISTENING IN VIEW-BUT INVOKE IN CONTROLLER
const iconSend = document.getElementById("icon-send");
iconSend.addEventListener("click", sendMessage);//LISTENING-iconSend listening event-invoke in controller

//CONTROLLER-But vi invoke-kaller event handling functions in controller
function sendMessage(e) {
  if (e.code === "Enter" || e.target === iconSend) {
    let input = inputField.value;
    inputField.value = "";
    output(input);
  }
}

//MODEL-generate randomw answer hvis vi vår database inneholder den setningen som brukeren sender...
//Dynamic-Vi har mulighet til å legge til nye klare setninger
//message- inputa kullanicinin girdigi deger, bizde var ise biz elimzdeki cevaplardan birini random olarak gonderecegiz ona...
function generateRandomAnswer(uttarencesArray, answersArray, message) {
  let item;
  for (let index = 0; index < uttarencesArray.length; index++) {
    for (let uttarence of uttarencesArray[index] || []) {
      if (uttarence.toLowerCase().includes(message.toLowerCase())) {//Vi søker message med vi har det i database
        const answer = answersArray[index];
        item = answer[Math.floor(Math.random() * answer.length)];//genererer random answer
      }
    }
  }
  return item;
}

//MODEL-Generate random answer 
function output(input) {
  let randomAnswer;
  let text = input.toLowerCase();
  if (generateRandomAnswer(utterances, answers, text)) {//Hvis brukeren klarer å treffe setninger der vi har i database
    randomAnswer = generateRandomAnswer(utterances, answers, text);
  } else {
    randomAnswer =alternatives[Math.floor(Math.random() * alternatives.length)];//Hvis brukeren klarer ikke å treffe setninger der vi har i database
  }
  addChatEntry(input, randomAnswer);
}

//View
const createNewElement = (idName, className, htmlTagName) => {
  let item = document.createElement(htmlTagName);
  item.setAttribute("id", idName);
  item.setAttribute("class", `${idName} ${className}`);
  return item;
};

//VIEW
function addChatEntry(input, randomAnswer) {
  const container = document.getElementById("container");
  const messagesContainer = document.getElementById("messagesContainer");
  let userP = createNewElement("user", "response", "p");
  userP.innerHTML = input;
  messagesContainer.appendChild(userP);
  //bot-
  let botP = createNewElement("bot", "response", "p");
  botP.innerHTML = " Typing.... ";
  messagesContainer.appendChild(botP);
  //Scroll holdes hele tida nederst
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
 
  setTimeout(() => {
    botP.innerHTML = randomAnswer;
  }, 1200);
}
//VIEW
const main = document.getElementById("main");
const showChatBox = document.getElementById("showChatBox");
const removeIcon = document.getElementById("cancel");

//removeIcon-Controller
removeIcon.addEventListener("click", removeChatBot);
document.addEventListener("DOMContentLoaded", removeChatBot);
function removeChatBot() {
  main.style.display = "none";
  showChatBox.style.display = "flex";
  const messagesContainer = document.getElementById("messagesContainer");
  messagesContainer.innerHTML = "";
}

//showChatBox-Controller
showChatBox.addEventListener("click", showChatBotBox);
function showChatBotBox() {
  main.style.display = "block";
  showChatBox.style.display = "none";
}
