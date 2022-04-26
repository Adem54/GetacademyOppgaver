function updateViewCreateNew(){
  
  
        document.getElementById("app").innerHTML=/*html*/ `
        ${createMenuHtml()}
        <hr/>
        <h3>Legge til ny person</h3>
        Navn <br/>  
        <input type="text" value='${model.inputs.createNew.name}'  oninput="model.inputs.createNew.name=this.value"  />
        <br/>
        Email  <br/>  
        <input type="text" value='${model.inputs.createNew.email} '   oninput="model.inputs.createNew.email=this.value" />
        <br/>
        Telefonnummer  <br/>  
        <input type="text" value='${model.inputs.createNew.telNummer} '   oninput="model.inputs.createNew.telNummer=this.value" />
       
        <button   onclick="createNewPerson()">Leg til!</button>
      
        `
    }
  
  //Bizim model de mode.inputs.createNew objesi icerisinde name ve email alanlarimiz var ama id alanimiz yok cunku yeni bir person ekleyecegiz bizim id yi burda tutmamiza gerek yok, id yi biz kullanici tarafindan girilecek name ve email alanlarinin yaninda girecegiz...

  //Burda yine ilk is olarak inputa girilen verileri model.inputs.createNew alanindaki verilerimize baglamis oluyoruz...value yi de yine model.inputs.createNew den aliyoruz...bundan sonra da createNewController sayfasina gececegiz...