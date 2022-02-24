export default class Model {

    //Localstorage da tutacaksak eger verimizi o zaman biz, verimizi ilk olustururken localStorage da olustururuz ve veriyi ordan cekeriz...
    //Ilk bu constructor calisir daha sonra icindeki fonksiyonlar caliacaktir...Ondan dolayi icindeki fonskiyonlardaki degisiklik localStorage e kaydoluyor ama tabi constructor daha localStorageye kaydolmadan calisip bitiyr ondan dolayi da en guncel veri kaydolmamis ooluyor bunun icin biz burdaki fonksiyonlardan sonra calisacak olan class in constructor inin icinde calistrmamiz gerekecekDaha dogrusu o fonksiyonlar icinde tekrardan bir guncelleme tam yapamiyor
    constructor(){
        // this.todos=[{id:1, text:"jobbe med kodingd", completed:false},{id:2, text:"gå på videregående", completed:false}]

        this.todos=JSON.parse(localStorage.getItem("todos")) || [] ;
       
       
    }


    //Burda sunu iyi bilelim, model de biz ana veri olan todos verisinde bir takim modernize , update degisiklik islemleri yapiyoruz bu degisikliklerin html-css e yansimasi icin, yani ana vermizde yaptigmiz degisiklikten view in haberdar edilmesi gerekiyor ama view ile burdan baglanti kuramayiz view da hazirlanan display fonksiyonu controllerda invoke edilmisti zaten simdi o foksiynu biz burda hazrlayacagimiz bir fonksiyona parametre olarak gececegiz ve tum CRUD operasyonlarindan sonra o fonksiyonu olusturmus olacagiz ama yine invoke olaymimiz conteroller icindeki constructor da olaacak.....Bu arada biz verileri localSTorage da kullanmak istedigmiz icin

//Bu sekilde de her bir model icindeki CRUD operasyonlarinda hem view i guncelleyecek ve de o guncelledigi veriyi de localStorage a kaydedecek, yani localStorage da verinin durumunu da guncelleyecekki her seferinde veri ordan gelirken guncel olarak gelmis olsun.... Veritabanina veriyi gonderme, ordan veriyi alma islemleri model da gerceklesiyor...
    _commit(todos){
    this.bindTodoListChanged(todos);
    localStorage.setItem("todos",JSON.stringify(todos));
}




    addTodo(newTodo){
        console.log("newTodoModell: ", newTodo);
        const newId=this.todos===0 ? 1 : (this.todos.length+1);
        const todo={id:newId,text:newTodo,complete:false  };
        console.log("Uretilentodo: ", todo);
      
        this.todos=[...this.todos,todo];
        //this.todos.push(newTodo);
        //Update()-update fonksiyonu da calistiracagiz burda
       this._commit(this.todos);
   
        console.log("todoListesi: ",this.todos);

    }

    deleteTodo(id){
        this.todos=this.todos.filter(todo=>todo.id!==id);
        //Update();
        // this.bindTodoListChanged(this.todos);
        this._commit(this.todos);
    }

    editTodo(id,updatedTodo){
        this.todos=this.todos.map(todo=>todo.id===id ? {...todo,id:todo.id,text:updatedTodo,completed:false}: todo);
        //update();
        // this.bindTodoListChanged(this.todos);
          this._commit(this.todos);
    }

    toggleTodo(id){
        this.todos=this.todos.map(todo=>todo.id===id ? {...todo,completed:!this.completed} : todo);
        // this.bindTodoListChanged(this.todos);
        this._commit(this.todos);
    }

//Burda biz guncelleme fonkaiyonu olan controller icindeki this.onTodoListChanged fonksiyonun model da protoyping ile Model class inin her yerinden erisebilecegimiz bir degere atamis olyoruz cunku burdan alip tum Crud operasyonlarinin sonunda kullanacagiz...Ama tabi bu fonksiyonun controller da,constructor icinde invoke edilmesi lazm
    bindTodoListChanged(callback){
        this.onTodoListChanged=callback;
        //prototyping...
    }

    


}

