import Model from "./model.js";
import View from "./view.js";

class Controller{
    constructor(model,view){
        this.model=model;
        this.view=view;
        //Bu fonksiyon invoke olayi display yani view i guncelliyor her zaman..ve burda view i gostermeye basliyor ancak view guncellenme olayi, model deki her fonksiyondan sonra da gerceklesmelidir...
        console.log("this.model.todos:!!!!!!!!: ", this.model.todos);
        this.onTodoListChanged(this.model.todos);


//Model de hazirladgmiiz CRUD operasyonlarindan sonra ki her degisiklikte view in guncellenmesi icin hazirldigmiz fonksiyon calisacak burda...
        this.model.bindTodoListChanged(this.onTodoListChanged);
        this.view.bindAddTodo(this.handleAddTodo);
        this.view.bindDeleteTodo(this.handleDeleteTodo);
        this.view.bindEditTodo(this.handleEditTodo);
        this.view.bindToggleTodo(this.handleToggleTodo);
    }
onTodoListChanged=(todos)=>{
    console.log("DisplaytodosController:",todos);
    this.view.displayTodos(todos);

}

//We invoke CRUD operations where we made first in model class and invoke in controller but we have a problem, we need to trigger these functions and first we need to listen these functions in view, we can do it in view
// we do not have parameter, og we need to get parameter in view.We must send handle funcitons in viwe as parameter
handleAddTodo=(newTodo)=>{
    console.log("newTodoController: ", newTodo);
    this.model.addTodo(newTodo);
}

handleDeleteTodo=(id)=>{
    this.model.deleteTodo(id)
}

handleEditTodo=(id,updateTodo)=>{
    this.model.editTodo(id,updateTodo);
}

handleToggleTodo=(id)=>{
    this.model.toggleTodo(id);
}

}

const view=new View();
const model=new Model();
console.log("ModelinTodosunCekEDelim::   ", model.todos);


const controller=new Controller(model,view);
//Bu view i gidip constructor da direk new lemenin bazi sakincalari var bunu goz ardi etmemelisin...tam guncelleme yapamiyor o zaman


//Fonksiyon invoke etme islerinin hepsi, constructor icerisindedir, constructor icersinde oluyor biz class icinde tum islerimizi  yapacagiz...