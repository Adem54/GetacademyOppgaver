//The first thing I'll do is just make helper methods to retrieve an element and create an element.
//Burda istersek element olusturma fonksiyonu ile element olustururuz dom uzerinden 
//Istersek de elimizdeki ana div in innerHTML ine gelir onu getiren bir fonksiyonda yazariz ayni sey dir asliinda....
//Oncelikle helper yardimci fonksiyonlarimiz olacak yeni bir element uretmek icin ve de herhangi bir elemneti secmek istersek de bu sekilde sececegiz...
//Burdan sunu anliyoruz biz, gidip constructor da herhangi bir id si olan elementi direk this.div=document.getElementById("div"); diye alabiliriz ama bu dogru bir yontem degil ki her seferinde niye bunun yapalim onun yerine biz bunu da fonksiyon ile yapmaliyiz...

//Ve de biz constructor icinde view in ihtiyaci olan herseyi ayarlayacagiz...
//Constructor da ayarlamanin ozel sebepleri var bunu iyi anlayalim
export default class View {
    constructor(){ 
//I'll make them all variables in the constructor so we can easily refer to them.
//Tum degisken variable lari constructor da olusturuyor ki kolayca erisebilelim


        //The root element
        this.app=this.getElement("#root");

        //The title of the app
        this.title=this.createElement("h1");
        this.title.textContent="Todos";

        //The form, with a[type="text"] input, and a submit button

        this.form=this.createElement("form");
        this.input=this.createElement("input");
        this.input.type="text";
        this.input.placeholder="Add todo";
        this.input.name="todo";

        this.submitButton=this.createElement("button");
        this.submitButton.textContent="Submit";
        this.submitButton.style.cursor="pointer";
        this.submitButton.style.margin="5px";

        //The visual representation of the todo list
        this.todoList=this.createElement("ul","todo-list");

        //Append the input and sumbit button to the form
    
        this.form.append(this.input,this.submitButton);
        
        
        //Appent the title,form and todoList to the app
        this.app.append(this.title,this.form,this.todoList);

        //VE de constructorda biz sabit gorunumun degismeyecekk kismini ayarlamis olduk buraya kadar yaptiklarimizla
        //Bu kisim hic degismeyecek olan kisimdir...
        //Now the parts of the view that won't change are set up.



        //Edit islemi-MUTHIS BESTPRACTISE-BURAYI DA COK IYI ANLA HARIKA BIR BESTPRACRTISE VAR BURDA DA....
        this._temporaryTodoText;
        this._initLocalListeners()
    }

// Update temporary state
_initLocalListeners() {
    this.todoList.addEventListener('input', event => {
      if (event.target.className === 'editable') {
        this._temporaryTodoText = event.target.innerText
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

  //Now when you click on any todo item, you'll enter into "editing" mode, which will update the temporary state variable, and when you tab or click away from the todo, it will save in the model and reset the temporary state.
  //Just make sure to bind the editTodo handler.

     // Create an element with an optional CSS class
     //OPSIYONEL PARAMETRE ILE FUNCTION OLUSTURMAK-BESTPRACTISE....
    createElement(tag,className){
        const element=document.createElement(tag);
        //Burda parametrede eger className gelmezse diye bir if yapmis.gelmezse birsey yapmayacak cunku, bu da aslinda javascriptin eksigi gibi gozuken bir ozellikten faydalanilmasidir
        if(className)element.classList.add(className);
        return element;
    }

//Bu saye de id veya class i olan elementi getiriyor
    getElement(selector){
        const element=document.querySelector(selector);
        return element;
    }

//input value e yi alacak fonksiyon ve de onu resetleyecek fonksiyonu da yazacagiz ki bu fonksionlar sadece bu class icinde kullanilacak disarda kullanilmayacagi icin alt cizgi kullanarak olusturuyoruz
_todoText(){
    return this.input.value;
}

_resetInput(){
    this.input.value="";
}

//Artık tüm kurulum tamamlandı. En karmaşık kısım, yapılacaklar listesinde her değişiklik yapıldığında değişecek olan yapılacaklar listesinin görüntülenmesidir.
displayTodos(todos){//Burasi render islemi...burda render edilecek....
    //Bunlari iyi oturtalim...
       //The first thing we'll do is remove all todo nodes every time it's called. Then, we'll check if any todos exist. If they don't, we'll display an empty list message.
  //herseyin basinda biz ul nin icini sifirlariz bu da aslinda clear islemidir ki bu da bir bestpractistir,
        // BESTPRACTISE-Delete all nodes-Bu da bir element icinde birden cok eleman varsa onlarin hepsini silmek iicn bir yontemdir....VE bestpractise....
        //Delete all nodes
        while (this.todoList.firstChild) {
            this.todoList.removeChild(this.todoList.firstChild);
        }

        //Show default message
        if(todos.length===0){
            const p=this.createElement("p");
            p.textContent="Nothing to do! Add a task";
            this.todoList.append(p);
        }else {//Now we'll just loop through the todos and display a checkbox, span, and delete button for every existing todo.

// Create todo item nodes for each todo in state
            todos.forEach(todo=>{
                const li=document.createElement("li");
                li.id=todo.id;

                   //Each todo item will have a checbox you can toggle
            const checkbox=this.createElement("input");
            checkbox.type="checkbox";
            checkbox.checked=todo.complete;

                // The todo item text will be in a contenteditable span
                const span=this.createElement("span");
                span.contentEditable=true;
                span.classList.add("editable");
// If the todo is complete, it will have a strikethrough
                if(todo.complete){
                    const strike=this.createElement("s");
                    strike.textContent=todo.text;
                    span.append(strike);
                }else {  // Otherwise just display the text
                    span.textContent=todo.text;
                }

                  // The todos will also have a delete button- class i delete olan button olusturuyoruz burda
                  const deleteButton=this.createElement("button","delete");
                  deleteButton.textContent="Delete";
                  li.append(checkbox,span,deleteButton);

                  //Append nodes to the todo list-ul den olusturdugumuz todoList icine dinamik olarak yaptigimiz li yi ekliyoruz....
                  this.todoList.append(li);
            })

        }
     

          //VIEW KURULUMU TAMAMLANDIR MODEL I DE TAMAMLADIK ANCAK BU IKISINI BIRBIRINE BAGLAYACAK HENUZ EVENT LISTENER IMIZ YOK BUNLARI DINLYECEK VE DE DOLAYISI ILE CONTROLLER IMIZDA OLACAK BU ISLER VE CONTROLLER OLMADIGI ZAAMN BU IKISI BIRBRILERI ILE HICBIR ALAKALARI KALMIYOR BUNLARI BIRBIRI ILE ALAKALAI YAPACAK OLAN CONTROLLERDIR .......
         //Now the view is set up and the model is set up. We just don't have a way to connect them - no events watching for a user to make input, and no handlers to handle the output of such an event.
         //
}
//Cook kritik bilgi....
//displayTodos yöntemi, yapılacaklar listesinin oluşturduğu ul ve lis'i oluşturacak ve görüntüleyecektir. Yapılacak her değiştirildiğinde, eklendiğinde veya kaldırıldığında, displayTodos yöntemi modelden yapılacaklar ile yeniden çağrılacak, liste sıfırlanacak ve yeniden görüntülenecektir. Bu, görünümü model durumuyla senkronize tutacaktır.

//EVENT LISTENER LARI OLUSTURACAGIZ..-dikkat edelim events lari calistirma isi controller da ama click,onChange,gibi eventleri dinleme isini view yapiyor..yani elementler yapiyor....
//. We have to put event listeners on the DOM elements in the view. We'll respond to the submit event on the form, and click and change events on the todo list. 

//BU ISLEMLER TAM BESTPRACTISE LIK......
bindAddTodo(handler) {
    this.form.addEventListener("submit", event=>{
        event.preventDefault();
        //_todoText=>input.value varsa,girilmise
        if(this._todoText()){
            console.log("this.todoText: ",this._todoText());
            handler(this._todoText());
            this._resetInput();
        }
    })
}
//BESTPRACTISE-EVENT CAPTURING...TUM TODOLISTI UL YI SECIYOR AMA DIYOR KI HACI SEN SADECE CLASSNAME I DELETE OLAN A GELINCE BU ISLEMI YAP....
bindDeleteTodo(handler) {
    this.todoList.addEventListener("click", event=>{
        if(event.target.className==="delete"){
            const id=parseInt(event.target.parentElement.id);//delete li icinde bir buttondir childdir dolayisi ile parenti li dir dinamik olarak biz tikladitgmiz delete buttonin parentina erisiyoruz....
            handler(id);
        }
    })
}

//BESTPRACTISE-
//1-even.target uzerinden dinamik bir sekilde id yi almak
//2-Event capturing ile dinamik bir event olayi yapmak ....
bindToggleTodo(handler) {
    this.todoList.addEventListener("change",event=>{
        if(event.target.type==="checkbox") {
            const id=parseInt(event.target.parentElement.id);
            handler(id);
        }
    })
}
//We need to call the handler from the view, so we're going to bind the methods that are listening for the events to the view.
//Bu bind methodlari view tarafindan dinlenecegi icin burda yazdik...
//Ama tabi bunlari controllerda harekete geceirecegiz...

}

//View
//We're going to create the view by manipulating the DOM - the document object model. Since we're doing this in plain JavaScript without the aid of React's JSX or a templating language, it will be kind of verbose and ugly, but such is the nature of manipulating the DOM directly.
//Neither the controller nor the model should know anything about the DOM, HTML elements, CSS, or any of that. Anything relating to it should be in the view.
