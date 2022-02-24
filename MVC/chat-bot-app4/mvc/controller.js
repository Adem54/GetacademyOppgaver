
import Model from "./model.js";
import View from "./view.js";




const model=new Model();
const view=new View();


//1-Input comes from View to Controller
const inputField=view.input;

inputField.addEventListener("keydown", function(e) {
    if (e.code === "Enter") {
        let input = inputField.value;
        console.log("input: ",input);
        inputField.value = "";
       model.output(input); 
       //2-From controller to model-controller running an event and changing values in model-   input come from view-and via controller to be sendet to model and changin values
}
});




const iconSend=view.iconSend;
iconSend.addEventListener("click", function(e) {
        let input = inputField.value;
        console.log("input: ",input);
        inputField.value = "";
        model.output(input); 
});


//1)Come from view-via controller go to model 
const iconCancel=view.iconCancel;
iconCancel.addEventListener("click", function(){
model.removeChatBot();//from view via controller to model
})

//Come from view-via controller go to model
const showChatBox=view.showChatBox;
showChatBox.addEventListener("click", function(){
    model.showChatBot();//from view via controller to model
})

document.addEventListener("DOMContentLoaded",function(){
    model.removeChatBot();
 })