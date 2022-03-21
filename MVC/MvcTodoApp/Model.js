export default class Model{
    constructor(){
        //Eger localStorage de todos isminde verimiz varsa onu getir yoksa bos dizi getir..
        this.todos=JSON.parse(localStorage.getItem("todos") )|| []
        // this.todos=[
        //     {id: 1, text: 'Run a marathon', complete: false},
        //     {id: 2, text: 'Plant a garden', complete: false},
        // ]
    }
//We'll make a commit private method to update the value of localStorage as well as the model state.
//Localstorage a kaydetme islemini yapan ve sadece bu class icinde calisan bir fonksiyondur _commit
_commit(todos) {
    this.onTodoListChanged(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
}
//After every change to this.todos, we can call it.


    addTodo(todoText){
        const todo={
            id:this.todos.length > 0 ? this.todos[this.todos.length-1].id+1 : 1,
            text:todoText,
            completete:false
        }
        console.log("Eklenecektodo model icinde: ",todo)
        this.todos.push(todo);//Referans degistirmiyor...
       // this.todos=[...this.todos,todo];//referans degistirerek yapiyor
        console.log("todos: ", this.todos);
        this._commit(this.todos);
    }

    //map-ile update veya find ile bulup da update de yapabilirdik
    updateTodo(id,updateText) {
  this.todos=this.todos.map((todo)=>todo.id===id ? {id:todo.id, text:updateText, complete:todo.complete } : todo )
  this._commit(this.todos);
       
    }

    //Delete islemi filter ile yapilir.Esit olmayanlari getir deriz ve onu getirir bize...
deleteTodo(id){
    this.todos=this.todos.filter(todo=>todo.id!==id);
    this._commit(this.todos);
}
 // Now after every method in the model, you'll call the onTodoListChanged callback.

//Complete-false-true
toggleTodo(id){
    this.todos=this.todos.map(todo=>todo.id===id ? {...todo,complete:!todo.complete}: 
        todo)
        this._commit(this.todos);
}

//DIKKAT EDELIM VIEW IN GUNCELLENME OLAYI...ISTE MMC NIN KRITIK NOKTALARI BURALAR BURALARI IYI ANLA....
//Event islemleri de hallolduktan sonra view in guncellenmesi olayinda Model ile view birbrini tanimadan model in de haberdaer edilmesi gerekiyor
//Just like with listening for events, the model should fire back to the controller to let it know that something happened.
//controller da bir fonksiyonu biz burda da fonksiyon olarak yazmak ama tekrar calistrmak icin, nereye donecegiz controller a
//Simdi burda dikkat edelim yaptigimiz is, bizim model iicnde display methodunu cagirmak iicin view ile irtibat kurmadan bu fonksiyonu kullanmak icin controller daki onTodoListChanged fonksiyonun model de bir this.onTodoListChanged prototyping yaparak yani bir onu bir degiskene atar gibi onu bu class objesine yazdirarak artik model icindeki tum modify methodlarinda guncelleme islemlerini yapabiliyor olacagiz....
//Biz bu display methodunu controller da olusturuyoruz cunkiu display methodu hem view icerisindeki verileri calistirmak gerekiyor ayni zamanda model de degisikliklerden sonra calistirmasi gerekiyor yani model-view her ikisi ile ilgili gerceklesecek islemler var ama bizim model ve view i biraraya getirmememiz gerekiyor
bindTodoListChanged(callback){
    this.onTodoListChanged=callback;
    //Bu onTodoListChanged e biz controller daki onTodoListChanged in referansin i atiyoruz ve artik ayni adresi gosteriyorlar ve de controller da gidip burdaki onTodoListChanged 
}
//  Now after every method in the model, you'll call the onTodoListChanged callback.
//And you'll bind this in the controller, just like with the view.
//Ve bunu gidip controller da calistiracagiz...
}

//ONEMLI
//update,.toogle,bir dizi icinde birden fazla objenin oldugu elementlerdeki islemler hep map ile yapilir ve oralarda kolaylik olsun diye kesinlikle spring vs de kullanilir...
//delete-filter ile yapilir..
//add ise once id, ve icerdeki elemanlar olusturulur sonra da onu yien spring kullanarak yapabiliriz


/*
MODEL
Let's focus on the model first, as it's the simplest of the three parts. It doesn't involve any events or DOM manipulation. It's just storing and modifying data.
Data nin guncelleme isleri yani add,update,delete data ile ilgili bu arz isler burda olacak...
Modele dikkat edersek parametrelere gelen degerlerle, yani input ile kullanici tarafindan girilen input ile hic alakasi yok, sadece gelen veriyi modifiye etmekle mesgul...burayi anlamak onemli....
As we can see, the model only deals with the actual data, and modifying that data. It doesn't understand or have any knowledge the input - what's modifying it, or the output - what will end up displaying.
At this point you have everything you need for a fully functioning CRUD app, if you manually type all your actions through the console, and view the output in the console.

*/
