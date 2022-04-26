export default class View {
  //Sabit koymayi dusundugumuz html elementlerini constructor icerisindde olusturacagiz
  constructor() {
    this.app = document.getElementById("root");

    //container class div
    this.container = this.createNewElement("div", "container");
    //todoText-p
    this.todoText = this.createNewElement("p", "todoText");
    this.todoText.textContent="TodoList";
    //todoAdd section
    this.todoAdd = this.createNewElement("section", "todoAdd");
    this.inputAdd = this.createNewElement("input", "input");
    
    this.inputAdd.type = "text";
    this.inputAdd.setAttribute("placeholder", "Add todo...");
    this.btnAdd = this.createNewElement("button", "btn");
    this.btnAdd.textContent = "Add Todo";
    this.todoAdd.append(this.todoText,this.inputAdd, this.btnAdd);
    //hr
    this.hrLine = this.createNewElement("hr");
    //todoSearch section
    this.todoSearch = this.createNewElement("section", "search");
    this.todoHeaderText = this.createNewElement("p", "todoText");
    this.todoHeaderText.textContent = "Todos";
    this.inputSearch = this.createNewElement("input", "input");
    this.inputSearch.type = "text";
    this.inputSearch.setAttribute("placeholder", "Search todo...");
    this.todoSearch.append(this.todoHeaderText, this.inputSearch);
    //hr
    this.hrLine = this.createNewElement("hr");

    this.todoList = this.createNewElement("section", "todoList");
    this.todoUl = this.createNewElement("ul","ul");
    this.todoUl.id="todoUl";


    this.todoList.append(this.todoUl);
    

    //add elements container and add container in  root
    this.container.append(
      this.todoText,
      this.todoAdd,
      this.todoSearch,
      this.todoList
    );
    this.app.append(this.container);
  }

  createNewElement(tagName, className) {
    const element = document.createElement(tagName);
    if (className) element.classList.add(className);
    return element;
  }

  getElement(selector) {
    const element = document.querySelector(selector);
    return element;
  }

  _getTodoInputText() {
    
    return this.inputAdd.value;
  }

  _resetInput() {
    return (this.inputAdd.value = "");
  }

  //The todos we have.. array-We have problem in this...When I execute app, control and model working but view is not working....so we can not update our view...
  displayTodos(todos) {
    console.log("Burasi addTododan sonra calisiyor mu....")
    //Every render, first clear everthing
console.log("this.todoUlId:  ",this.todoUl);

console.log("this.todoUlId:  ",this.todoUl.firstElementChild);

    while (this.todoUl.firstElementChild) {
     
      this.todoList.removeChild(this.todoUl.firstChild);
    }
  this.todoUl.innerHTML="";
    console.log("todoUlRenderSonrasi: ", this.todoUl);
    //if todos array is empty
    console.log("todos un eleman sayisinin 0 olmasi gerekiyor burda", todos.length)
    if (todos.length === 0) {
      console.log(todos.length);
      // const nothingTodo=this.createNewElement("p","nothingToDo");
      // nothingTodo.textContent="Nothing to do! Add a task!";
      // this.todoUl.append(nothingTodo);
    } else {
      todos.forEach((todo) => {
        const todoLi = this.createNewElement("li","li");
        todoLi.id = todo.id;
        const todoSpan = this.createNewElement("span", "todoSpan");
        todoSpan.textContent = todo.text;
        const todoDeleteIcon = this.createNewElement("span", "icon-bin");
        todoDeleteIcon.name = "todoDelete";
        todoDeleteIcon.id = todo.id;//********/
        const todoEditIcon = this.createNewElement("span", "icon-edit");
        todoEditIcon.name = "todoEditIcon";
        todoEditIcon.id=todo.id;/********* */
        const checkBoxLabel = this.createNewElement("label", "checkBoxLabel");
        checkBoxLabel.textContent = "Completed";
        const todoCheckBox = this.createNewElement("input", "checkBox");
        todoCheckBox.onClick = "complete()";
        todoCheckBox.type = "checkbox";
        todoCheckBox.addEventListener("click", function () {
          if (todoCheckBox.checked) {
            todo.completed=true;
            
            todoSpan.style.textDecoration = "line-through";
          } else {
            todoSpan.style.textDecoration = "none";
            todo.completed=false;
          }
        });
      
        todoLi.append(
          todoSpan,
          checkBoxLabel,
          todoCheckBox,
          todoDeleteIcon,
          todoEditIcon
        );


        this.todoUl.append(todoLi);

        //if completed==true vi
      });
    }
  }


  bindAddTodo(handler){//we need inputTodoText
    this.btnAdd.addEventListener("click",event=>{
      const inputText=this._getTodoInputText();
        if(this._getTodoInputText()){
            handler(inputText);
            this._resetInput();
        }
        
    })
  }

  //Be careful-we have to do event.capturing, because we get deleteButton after rendering,
  //Once biz 
  bindDeleteTodo(handler){
      this.todoUl.addEventListener("click", event=>{
        if(event.target.class==="icon-bin"){
            const id=event.target.parentElement.id;//check parseInt()
            handler(id);
        }
      })
  }

  bindEditTodo(handler){
      this.todoUl.addEventListener("click", event=>{
          const inputText=this._getTodoInputText();
          const id=event.target.parentElement.id;
          handler(id,inputText);
      })
  }

  //
bindToggleTodo(handler){
    this.todoUl.addEventListener("change",event=>{
       if(event.target.type==="checkbox"){
           const id=event.target.parentElement.id;
           handler(id);
       }
    })
}

}

//HARIKA BESTPRACTISE-----
//Biz todos icindeki verileri display fonksiyonu icinde forEach ile donderirken id gibi checked in durumu gibi durumlar i biz li elementinin attribute lerini atarsak biz o elementlere event.target uzerinde erisebiliriz disarda ve bu bizim icin onlari daha kolay secmemizi saglar.... ve de onlari bizim CRUD operasyonlarimizin parametrelrinde kullanmamizi saglar..