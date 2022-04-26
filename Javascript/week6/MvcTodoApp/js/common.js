
function createMenuHtml(){
        return `
        <button onclick="model.app.page='create';  updateView()">CreateNewTodo</button>
        <button onclick="model.app.page='search';  updateView()">Search</button>
        <button onclick="model.app.page='hjem';  updateView()">Hjem</button>
        
        
        `;
}



function findMaxElement(list){
    let maxId=list.map(person=>person.id).reduce((max,acc)=>Math.max(max,acc),-1);
    return maxId;
}