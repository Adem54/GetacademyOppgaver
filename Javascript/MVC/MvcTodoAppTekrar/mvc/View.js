


export default class View {
    constructor(){

        this.app=this.getElement("#root");//root u sectik burda, degiskene atamis gibi olduk, prototyping yontemi ile, artik class icinde heryerde kullanabilecegiz..
        this.title=this.createElement("h1");
        this.title.textContent="Todos";
        this.form=this.createElement("form");
        this.input=this.createElement("input");
        this.input.type="text";
        this.input.placeholder="Add todo";
        this.input.name="todo";

        this.submitButton=this.createElement("button");
        this.submitButton.textContent="Submit";
        this.todoList=this.createElement("ul","todo-list");

        this.form.append(this.input,this.submitButton);//2 tane birden element eklendi.Ayni anda 2 element birden ekendi burda

        this.app.append(this.title,this.form,this.todoList);//3 tane birden element eklemis olduk...

        this._temporaryTodoText;//global bir degisken olusturyorsun gibi dusun...
        this._initLocalListeners();

    }
    //-----BU EDITI OZEL INCELEE--BURASI SUPER BIR BESTPRACTISE---SIRF BIR DAHA RENDER OLMASIN BASTAN HERSEYI BIR DAHA YAZDIRMAMAK ICIN BURDA OZEL ELE ALDIK---BURASI HARIKA BIR BESTPRACTISE
// Update temporary state
_initLocalListeners() {
    this.todoList.addEventListener('input', event => {
      if (event.target.className === 'editable') {
        this._temporaryTodoText = event.target.innerText;//tiklayip icine ne yazdi isen temporaryTodoText e atiyorsun...
      }
    })
  }

  // Send the completed value to the model
bindEditTodo(handler) {
    this.todoList.addEventListener('focusout', event => {
      if (this._temporaryTodoText) {
        const id = parseInt(event.target.parentElement.id)
  
        handler(id, this._temporaryTodoText)
        this._temporaryTodoText = ''
      }
    })
  }
//-----BU EDITI OZEL INCELEE--BURASI SUPER BIR BESTPRACTISE---SIRF BIR DAHA RENDER OLMASIN BASTAN HERSEYI BIR DAHA YAZDIRMAMAK ICIN BURDA OZEL ELE ALDIK---BURASI HARIKA BIR BESTPRACTISE

    createElement(tag,className){//Helper method-yani sadece bu fonksiyon icinde calisan fonksiyondur
        const element=document.createElement(tag);
        if(className)element.classList.add(className);
        return element;
    }

    //Helper-Herhangi bir elementi css secicileri ile secmek icin kullanacagiz...
    getElement(selector){   
     const element=document.querySelector(selector);
     return element;
   
    }
       //Kullanicinin girdigi inputu burdan bir helper yardimi ile aliyoruz...
       _todoText(){
        return this.input.value;
    }

    //Reset
    _resetInput(){
        this.input.value='';//inputu temizle...
    }


    displayTodos(todos){
//Bunun kullanilma sebebi cok hizli silmnesidir

console.log("this.todoList.firstChild: ",this.todoList.firstChild);
        while(this.todoList.firstChild){
            this.todoList.removeChild(this.todoList.firstChild);
        }

        //Eger hic todo muz yok ise eklenecek birsey yok diye yaz...
        if(todos.length===0){
                const p=this.createElement("p");
                p.textContent="Nothing to do! Add a task";
                this.todoList.append(p);
        }else {
            todos.forEach(todo=>{//Eger todo nun icinde eleman var ise o zaman kac eleman var ise o kadar li, checkbox input olusturu diyoruz burda
                const li=this.createElement("li");
                li.id=todo.id;
                const checkbox=this.createElement("input");
                checkbox.type="checkbox";
                checkbox.checked=todo.complete;

                const span=this.createElement("span");
                span.contentEditable=true;
                span.classList.add("editable");

                //todo eger complete true ise yani completed ise uzerine cizgi cekecegiz...
                if(todo.complete){
                    const strike=this.createElement("s");
                    strike.textContent=todo.text;
                    span.append(strike);
                }else {
                    span.textContent=todo.text;
                }

                const deleteButton=this.createElement("button","delete");
                deleteButton.textContent="Delete";
                li.append(checkbox,span,deleteButton);

                   //Append nodes to the todo list-ul den olusturdugumuz todoList icine dinamik olarak yaptigimiz li yi ekliyoruz....
                   this.todoList.append(li);
            })
        }
    
    }

    //Listener lari, yani event fonksiyonlarini  view da olusturacagiz ve icerisinde ne yapacagiz modify fonksiyonlarini calistiracak ama bizim view da modify fonksiyonu yokki o zaman modify fonksiyonun calistiran controllerdaki handle fonksiyonlar i biz parametreye alacagiz.....VE dikkat edelim sakin view a gelip de import falan yapmaya kalkmayalim oyle birsey yok biz zaten controllerda bunu cagiracagimiz icin, icine biz yine controllerdan geleecek olan bir fonksiyon yaziyoruz.... ama surasi isin puf noktasi biz bu fonksiyon dinleme eventi old icin bunu aslinda buraya bagliyoruz....
    bindAddTodo(handler){//Submit islemi olacak burda.....Dikkat edelim biz clisk islemlerii her zaman html elementi nerde ise orda yapariz....
        this.form.addEventListener("submit", event=>{
            event.preventDefault();
            if(this._todoText()){//Dikkat et user in girdigi inputu biz burda almistik ve burda fonks icinde kullaniyoruz.
                handler(this._todoText());
                this._resetInput();
            }
        })
    }

    //BESTPRACTISE.....EVENTCAPTURING-EVENT.TARGET.PARENTELEMENT...TUM LISTEYI SEC AMA SADECE CLASS I DELETE OLANLARDA TIKLA
    bindDeleteTodo(handler) {
        this.todoList.addEventListener("click", event=>{
            if(event.target.className==="delete"){
                const id=event.target.parentElement.id;//yani li nin id si bize todoList icindeki li lerden hangisine tikladi isek onun id si gerekiyor du bize delete butonu onun childi idi dinamik olarak li nin idsini aldik
                handler(id);
            }
        })
    }

    //BESTPRACTISE..EVENT CAPTURING..ATTRIBUTE LER HTML ELEMENTLERININ AYRICALIKLI KILAN OZELLIKLERDIR VE BIZE EVENT.TARGET.TYPE==="CHECKBOX" DIYEREK BURDAN AYIRT EDEIYORUZ VEYA ID,CLASSNAME,NAME...VS COOOK ISE YARIYOR....
    bindToggleTodo(handler){
        this.todoList.addEventListener("change", event=>{
            if(event.target.type==="checkbox"){
                const id=parseInt(event.target.parentElement.id);
                handler(id);
            }

        })
    }

    //KRITIK BIR BILGI.....
    //DIKKAT EDELIM-CRUD OPERAYONLARINI MODEL DA OLUSTURDUK AMA PARAMETREYE ALINACAK DEGERLER VIEW DAN GELECEK VE ONLARI BIZ DINAMIK VE HERSEY BELLI OLACAK SEKILDE KULANIRSAK O ZAMAN HERSEYI DE BIRBRIINDEN AYIRT EDEBILECEGIZ....ONDAN DOLAYI BIZ PAREMETRELERI BURDA DINAMIK BIR SEKILDE VEREBILECEGIZ....


} 

//Bir tane display methodumuz olacak ve bu her veri degistiginde icerigin icini temizleyip yeniden yazacak...

//View da cok da aslinda bilmedigimiz bir durum var burda. Biz listener lari yani eventlerin dinleme olayni view da yapmaliyiz...ama calistirilma olayi controllerda olacak....