

//Let's focus on the model first, as it's the simplest of the three parts. It doesn't involve any events or DOM manipulation. It's just storing and modifying data.


export default class Model {
    constructor(){
       // this.todos=JSON.parse(localStorage.getItem("todos") )|| []
         this.todos=[
            {id: 1, text: 'Run a marathon', complete: false},
            {id: 2, text: 'Plant a garden', complete: false},
        ]
    }


    //Helper icinde display guncelleme-update islmeini yapacagiz...
    _commit(todos) {
        this.onTodoListChanged(todos);
        localStorage.setItem("todos",JSON.stringify(todos));
    }

    addTodo(todoText){
        const newObject={id:this.todos.length > 0 ?  this.todos[this.todos.length - 1].id +1 :1 ,
             text:todoText,complete:false}
        this.todos=[...this.todos,newObject];//Burda referans degisir
        //this.todos.push(newObject);//Referans degismez.ayni dizi icine ekler ayni adres teki dizi icine ekler
       //UPDATE-GUNCELLEME
        this._commit(this.todos);
    }

    editTodo(id,todoText){
        this.todos=this.todos.map((todo)=>todo.id===id  ? {...todo, id:todo.id, text:todoText, complete:todo.complete} : todo );
          //UPDATE-GUNCELLEME
          this._commit(this.todos);
    }

    deleteTodo(id){
        this.todos=this.todos.filter((todo)=>todo.id!==id);
          //UPDATE-GUNCELLEME
          this._commit(this.todos);
    }

    toggleTodo(id){
        this.todos=this.todos.map((todo)=>todo.id===id ? {...todo, id:todo.id, complete:!todo.complete}: todo);
          //UPDATE-GUNCELLEME
          this._commit(this.todos);
    }

    //Bu update, display yapan methodu biz modul de tum crud operasyonlari icinde kullanmak istiyoruz ama herbirine ayri ayri paremetereye gonderme k yerine biz calistriacagimz callback i constructor icinde prototyping yparak bir nevi global degisken olustrurarak bu class icinde heryerde kullanilabilmesini saglamis oluyoruz yoksa obur turlu bu sefer 2.bir paremtre olarak Controllerdaki onTodoListChanged i kullanacaktik ama zaten bu fonks u biz controllerda calistiracagiz... ama kullanim ssklinde dikkat.....

    //callback controllerde view i upate eden fonksiyondur o fonksiyonu parametreye aliyoruz ve de o fonksiyonu baska bir degiskene atayarak o fonksiyonu model icinde calistirmis ooluyoruz aslinda bu fonksiyonun icinde view da hazrlanmis va calistirilan bir fonksiyon var, ve biz bu fonksiyonu parametree alarak model icinde kullanabilmeyi sagliyoruz...
    //Ki bu fonksiyona biz parametre olarak da zaten model dan oraya gonderdigimiz bir veriyi kullanacagimiz icin cok problem yasamiyoruz....
    bindTodoListChanged(callback) {
        this.onTodoListChanged = callback;
      }
}

//Model ile ilgili bilmemiz gerekenler..
//1-Data nin tutuldugu yerdir
//2-Datanin modifiye edilmesi ile ilgili olan tum CRUD fonksiyonlari buraya yazilir ve her fonksiyon sonun da guncelleme fonksiyonu calismalidir ana onun nasil calistirilacagini iyi izleyelim....
//3-Bir tane displayTodos isminde method olusturulacak ve ul,li olusturacak ve onlardan ibaret olacak ve Her todo degistiginde, addd,removed, displayTodos methodu yeniden cagrilacak model deki todos dan, listeyi temizleyecek ve tekrar yazacak....Bu islem view i her zaman model in durumuna senkronize  tutmus oluyor...(Cunku display her calistiginda elementleri yeniden uretiyor biz o kismi dinamik yaptik ki burda render i simule ediyoruz.. her islem yapildiginda biz todoList yani ul nin icini bosaltip temizleyecegiz ve icindekileri kaldiracagiz ve display methoud ile de tekrardan yazacagiz.....)