function updateViewHjem(){
    document.getElementById("app").innerHTML=/*html*/ `
    ${createMenuHtml()}
    <hr/>
    <h3>Søk</h3>
    <input type="text" 
    oninput="model.inputs.search.text=this.value"
    value="${model.inputs.search.text}"
    />
    <button onclick="updateView()">Søk</button>
  

    <h5>Søkeresultater</h5>
    <ul>
    ${createHtmlAllPeople()}
    </ul>
    `
}

function createHtmlAllPeople(){
    let html=``;
    let people=model.people;

 
    return  getListOfPeople(people,html);
} 


//Burda farkli view ve controller larda fonksiyon veya degisken isimlendirmelerinde cok dikkat li olmaliyiz eger ayni isim verirsek hepsi global scope ta olusturuldugu icin dolayisi ile karistirabiiriiz ayni isimde olusturdugmuz fonksiyonlar birbirne girebiliri