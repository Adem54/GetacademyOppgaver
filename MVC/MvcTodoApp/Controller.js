//class lar javascriptte bir cesit constructor functions lardir

// function Person(name,surname){
//     this.name=name;
//     this.surname=surname;
//     this.showAll=function(){
//         return this.name + this.surname;
//     }
// }
//Aslinda bizim class larimiz birer constructor fonksiyonlardir. Eger new ile olusturuluyor ise o bir constructor fonksiyon demektir ve new leme oldugu anda bellekte yeni bir referans olusturuyor
//Hersey bir objedir
//Temel obje olan prototype objesi vardir her obje de bulunur

// const person1=new Person("Adem", "Erbas");
// console.log("person1, ",person1.name);
// console.log(person1.showAll());

import Model from "./Model.js";
import View from "./View.js";
  
  class Controller {
    constructor(model ) {
      this.model = model//parametre yolu ile class icinde clas kullanma
      this.view = new View();//dependency injection-constuctor icinde dogrudan new leme ama neyi new leme ya interface i ya da base class i
       
      // Display initial todos--Dikkat edelim biz controllerddayiz ve bir fonksiyonu constructor icinde calistiriyoruz bu da cok onemli bir bestpractise.....
      //Yani baslangic olarak getirecegimiz veriyi biz controller in constructorinda getirecegiz.....bu cook onemlidir....
      //Yani kafamizda sadece controller deyince bizim hemen sadece click,onChange gibi islemleri yaptigimiz yer olarak dusunmeyelim....
      this.onTodoListChanged(this.model.todos);


      //BURASI BILMEMIZ GEREKEN COK ONEMLI BIR BESTPRACTISE-ARROW FUNCITONS LARIN NORMAL FUNCTIONLARDASN FARKI-THIS
//We used arrow functions on all the handle events. This allows us to call them from the view using the this context of the controller. If we did not use arrow functions, we would have to manually bind them, like this.view.bindAddTodo(this.handleAddTodo.bind(this)). Yikes.
      //BURAYA DIKKAT EDELIM-FONKSIYON CAGIRMA ISLERI HEP CONSTRUCTOR ICERISINDE OLUYOR...BURDA BIR TETIKLEME OLUYOR CUNKU BU ONEMLI...
      //ARROW FUNCTION KULLANDIGIM ICIN BIND ETME ISLEMINE GEREK KALMADI YOKSA BIZ CONTROLLER ICINDEKI HANDLE FONKSIYONLARINI BAGLAMAMIZ GEREKECEKTI BURDAKI THISE YANI CONSTRUCTOR A
      this.view.bindAddTodo(this.handleAddTodo);
      this.view.bindDeleteTodo(this.handleDeleteTodo.bind(this));
      this.view.bindToggleTodo(this.handleToggleTodo);
      this.view.bindEditTodo(this.handleEditTodo);
      //Dikkat edelim biz burda constructor da 
      //Belirlenen ogeler uzerinde herhangi bir submit,click,change olayi gerceklestiriginde iligli handle bu sekilde cagrilmis olacak...
     
//DIKKAT EDELIM EVENT FONKSIYONLARII CAGIRIYORUZ AMA HICBIRSEY OLMUYOR...CUNKU...YAPTIGIMIZ BU DEGISIKLIKLERDEN MODEL IN HABERI YOK KI BIZ DISPLAY METHODUNU CONTROLLERDA CALISTIRDIK TAMAM AMA VERIYI NERDEN ALIYORUZ TABI KI MODEL DEN O ZAAMN BU MEHTODU MODEL DE DE OLUSTURUP GELIP KONTROLLER DA CALISTIRMAMIZ GEREKIYOR...VE DE MODEL VE VIEW IN BIRBIRINI TANIMAMASI GEREKIYOR BUNA DA DIKKAT
      //Respond to callbacks in the model
//There's something we left out - the events are listening, the handlers are invoked, but nothing happens. This is because the model does not know that the view should update, and does not know what to do to make the view update. We have the displayTodos method on the view to solve this, but as mentioned earlier, the model and view should not know about each other.

//Just like with listening for events, the model should fire back to the controller to let it know that something happened.

//We already made the onTodoListChanged method on the controller to deal with this, we just have to make the model aware of it. We'll bind it to the model the same way we did with the handlers on the view.

//In the model, add bindTodoListChanged for onTodoListChanged.
    //VE DE VERININ GUNCELLENMSI ICINDE BU ISLEMI  
this.model.bindTodoListChanged(this.onTodoListChanged
 // Now after every method in the model, you'll call the onTodoListChanged callback.
  );
    }

    //Our first link between the view and model is to make a method that calls displayTodos every time a todo changes. We can also call it once in the constructor to display the initial todos if there are any.
    //Constructor ile baslar baslamaz bizim icine veri gonderecegimiz elemtleri getiriyoruz....
    onTodoListChanged=(todos)=>{
      this.view.displayTodos(todos);
    
    }

    //The controller will handle events after they're fired. When you submit a new todo, or click the delete button, or click on the checkbox of a todo, an event will be fired. The view must listen for those events because they're user input of the view, but it will dispatch the responsibility of what will happen in response to the event to the controller.
    //We'll create handlers for the events in the controller.

    handleAddTodo=(todoText)=>{
      this.model.addTodo(todoText);
      console.log("this: ",this);
      
    }//arrow functionlarin kendine ait this ler i yoktur

    handleEditTodo=(id,todoText)=>{
      this.model.editTodo(id,todoText);
    }

    handleDeleteTodo(id){
      this.model.deleteTodo(id);
      console.log("this: ",this);
    }

    handleToggleTodo=(id)=>{
      this.model.toggleTodo(id);
    }

    //Setting up event listeners
//Now we have these handlers, but the controller still doesn't know when to call them. We have to put event listeners on the DOM elements in the view. We'll respond to the submit event on the form, and click and change events on the todo list. (I'm skipping "Edit" for now since it's slightly more complicated.)

  }
  
  const model=new Model();

  const app = new Controller(model);

  
  


 
//Finally, the controller is the link between the model (the data ) and the view (what the user sees). Here's what we have so far in the controller.
//Cook onemli....
//Our first link between the view and model is to make a method that calls displayTodos every time a todo changes. We can also call it once in the constructor to display the initial todos if there are any.