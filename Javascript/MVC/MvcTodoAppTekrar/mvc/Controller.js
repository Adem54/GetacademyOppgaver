import Model from "./Model.js";
import View from "./View.js";

export default class Controller {
constructor(model){
this.model=model;
this.view=new View();
console.log(this.model.todos);
this.onTodoListChanged(this.model.todos);//1 kereligine veriyi burda getirtiyoruz...Bundan sonra da her model deki data modify fonksi arkasindan view i update edecegiz..bu fonks calisacak....
this.model.bindTodoListChanged(this.onTodoListChanged);
}


    //Constructor ile baslar baslamaz bizim icine veri gonderecegimiz elemtleri getiriyoruz....
onTodoListChanged=(todos)=>{
this.view.displayTodos(todos);

this.view.bindAddTodo(this.handleAddTodo);//handleAddTodo arrow func oludu icin bind etmemize gerek yok
this.view.bindDeleteTodo(this.handleDeleteTodo.bind(this));//handleDeleteTodo arrow func olmadigi icin o fonks u bind etmezsek burda goremiyor this oladak deyince cunku arrow func kendine ait thisi yok, ama normal func kendi thisi var 
this.view.bindToggleTodo(this.handleToggleTodo);
this.view.bindEditTodo(this.handleEditTodo);
}


//Model deki CRUD operasyonlari controllerda calistirilacak dolayisi ile biz model deki fonksiyonlari icinde calstiracagimiz arrow function lar olusturacagiz...Arrow olmasi cok onemli bind(this) den kurtulmak icin
//Bu islem 2 seyi hatirlatiyor-1-redux ta action createor da fonks olusturup ayni fonksdan componentte olusturp actiondaki fonksiyonu orda gelip useEffect veya onClick gibi bir tetikleyici iile calistiriyorduk
//2-ASP.Core da DataLayer da biz methodlarimizi olsuturup business de ayni mehtodlardan olusturp oraya datalayerdan bir interface dependency inject edip onlarin icinde calistirirdik aynisi burda da yine enjekte ediyoruz aslinda....
handleAddTodo=(todoText)=>{
    this.model.addTodo(todoText);
}
handleEditTodo(id,todoText){
    this.model.editTodo(id,todoText);
  }

  handleDeleteTodo(id){
    this.model.deleteTodo(id);
  }

  handleToggleTodo=(id)=>{
    this.model.toggleTodo(id);
  }
}

//COOOK ONEMLI....
//Ornegin Model in bir base class  yaparsak biz ayni sekilde View i da base classs yaparask artik bu class lari inherit eden tum class lar i biz controller da paremetreye koyabiliecegiz cunku base class lar yani inherit edeilen class lar onu inherit eden class larin referansini tutabiliyor dolayisi ile de biz de gidip onu onun yerine yazabiliyoruz bu bize iste surdurulebilirlik kazandiriyor....
const model=new Model();
const app=new Controller(model);