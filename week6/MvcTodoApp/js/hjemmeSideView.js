function updateViewHjemmeSide(){
    document.getElementById("app").innerHTML=`
    ${createMenuHtml()}
    <h3>People List</h3>
    ${getPeopleList()}    
    `;
}

function getPeopleList(){
    let html=`<ul>`;
    
for(let i=0; i<model.people.length; i++){
    let person=model.people[i];
    html+=`
    <li>${person.name}-${person.email}
   
    <button   onclick="goToEndrePage(${person.id})"
    >Endre</button>
    <button  onclick="goToDeletePage(${person.id})" >X</button>
    </li> 
    `;
}
html+=`</ul>`;
return html;

}

function goToEndrePage(id){
 
  //Burda  yapacagimiz islem sayfayi endre page e yonlendirmek ve de ayrica id yi de model.inputs.endre objesinin icerisine gondermek
  model.inputs.edit.personId=id;
  model.app.page="edit";
  updateView();
}

function goToDeletePage(id){
model.inputs.delete.personId=id;
model.app.page="delete";
updateView();
}