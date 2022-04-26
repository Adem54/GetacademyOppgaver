import View from "./view.js";

  export default class Model {
    constructor(){
      //Verileri her zaaman burda aliriz cunku class olusurken ilk constructor olustrurur ve 1 kez calisir new lenirken 1 kez calisir
        this.utterances= [
            ["how are you", "how is life", "how are things"], //0
            ["hi", "hey", "hello", "good morning", "good afternoon"], //1
            ["what are you doing", "what is going on", "what is up"], //2
            ["how old are you"], //3
            ["who are you", "are you human", "are you bot", "are you human or bot"], //4
          ];

     this.answers=[
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

      this.styleObject={

display1:"none",
display2:"flex",
display3:"block",
container:""
      }

this.alternatives=["Go on...", "Try again"];
      this.view=new View();

    }


//model-2- from view via controller to model
    showChatBot(){
      this.view.showChatBot(this.styleObject);
       //3-from model to update view
    }

    //model-2- from view via controller to model
    removeChatBot(){
      //3-from model to update view
      this.view.removeChatBox(this.styleObject);
    }

//model
 generateRandomAnswer(uttarencesArray, answersArray, message) {
  let item;
  for (let index = 0; index<uttarencesArray.length; index++) {
      //Cek et cunku index geliyor ama uttarncesArray in ilk elemaninin 3.elemenai yok undefined
    for (let uttarence of uttarencesArray[index] || [] ) { 
      if (uttarence.toLowerCase().includes(message.toLowerCase())) {
        console.log("indexModel:",index);
        const answer = answersArray[index] ;//|| [] 
        item = answer[Math.floor(Math.random() * answer.length)];
      }
    }
  }
  return item;
}


//Validation ve input cek...et ve de randomAnswer uretirse onu al uretmezse alternatif metinle cevap don...
//Model-(2)view dan gelen input controllerin event i tetiklemesi araciligi ile buraya geliyor ve burda degisiklikleri yapiyor
 output(input){
  let randomAnswer;
  //let text=input.toLowerCase().replace(/[^\w\s\d\?]/gi, "");replace(/
  let text=input.toLowerCase().replace(/[^a-zA-Z0-9-" "-?]/g, '');
  text=text.replace(/whats/g, "what is");
 
  if(this.generateRandomAnswer(this.utterances,this.answers,text)){
    randomAnswer=this.generateRandomAnswer(this.utterances,this.answers,text);
  }else {
    randomAnswer=this.alternatives[Math.floor(Math.random()* this.alternatives.length)];
  }
 

//  addChatEntry(input,randomAnswer);
//(3)From Model to View -Updating
 this.view.addChatEntry(input,randomAnswer);
}



}

