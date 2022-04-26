function updateViewCreateNew(){
    document.getElementById("app").innerHTML=`
    ${createMenuHtml()}
    <br>
    <br>
    <hr>
    <h3>Create newPerson!</h3>
   <br>
   ${createNewPersonHtml()}   
    `;
}


function createNewPersonHtml(){
    let html=``;
    html=`
    <form onsubmit="addNewPerson(event)">
  <label for="fname">Name:</label><br>
  <input type="text"
   id="fname"
    name="fname"
    oninput="model.inputs.create.name=this.value"
    value="${model.inputs.create.name}"><br>
  <label for="email">Email:</label><br>
  <input type="text"
   id="email" 
   name="email" 
   oninput="model.inputs.create.email=this.value"
   value="${model.inputs.create.email}"><br><br>
  <input type="submit" value="Submit">
</form> 
    `;
    return html;

}