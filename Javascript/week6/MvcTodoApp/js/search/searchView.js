function updateViewSearch(){
    document.getElementById("app").innerHTML=`
    ${createMenuHtml()}
    <h3>Search Side</h3>
<br>

<input id="search" type="text" placeholder="search"
oninput="model.inputs.search.searchedValue=this.value"
value="${model.inputs.search.searchedValue}"/>
<button  onclick="updateView()">Søk</button>
<br>
<br>
${createHTMLPeople()}
    `;

}



//BESTPRACTISE...Biz html etiketlerimizi yazdigimz view icindeki fonksiyyonlar icine updateView() yazmiyoruz cunku html etiketi yazdimgiz view icindeki fonksiyonlar zaten sayfa ilk acildginda calisiyor biz gider eger onlarin icine updateView() invoke edersek o zaman kisir bir sonsuz bir donguye girecektir cunku updateView baslarken calisiyor ve onun tetikledigi fonksiyon icine tekrar updateVeiw yazinca surekli karsilikli olarak birbirini tetikleme devam ediyor ve de durmayan bir kisir donguye giriyor bu sebepten dolayi biz bir taraftan filtreme islemi yapiyoruz ama bir taraftan da filterelem islemi icerisine updateView yazamiyoruz html taglari da icinde oldugu icin ozellikle, kisir bir donguye giriyor ondan dolayi, updateView i sadece søk butonuna tiklayinca cagiriuyoruz onun disinda ki diger filtreleme fonksiyonuna kisaca sunu yazariz...Eger search inputuna veri girilmis ise ana vermiiz olan model.people i filtreleme fonksyonundan geciririz yok girilmemis ise o zaman dogrudan model.people verisini li ler icinde listeleriz iste ana mantik budur yoksa biz filtereleme fonksiyonu veya li leri dondurudgumz yerde bir kere daha updateView i calistridigimiz zaaman cikmaz bir donguuye girer
function createHTMLPeople(){
    let html=``;
    let filteredData=model.people;//Eger arama olmazsa direk people datasini y azdirsin diye bu sekilde once people i degsikene atiyoruz...
    const searchText=model.inputs.search.searchedValue;

    //Olay aslinda cok net...
    if(searchText !== "" ){
        filteredData=filterPeopleList();
    }

   // return getFilterPeopleList(filteredData);

   html=`<ul>`;
  
 console.log("people.........: ",filteredData);
for(let i=0; i<filteredData.length; i++){
    let person=filteredData[i];
    html+=`
    <li>${person.name}-${person.email}
   
    <button   onclick="goToEndrePage(${person.id})"
    >Endre</button>
    <button  onclick="goToDeletePage(${person.id})" >X</button>
    </li> 
    `;
}
html+=`</ul>`;

return html;
}


//Bu sadece createHTMLPeople nin fonksiyona parcalanmis halidir....
function getFilterPeopleList(people){
    let html=`<ul>`;
  
 console.log("people.........: ",people);
for(let i=0; i<people.length; i++){
    let person=people[i];
    html+=`
    <li>${person.name}-${person.email}
   
    <button   onclick="goToEndrePage(${person.id})"
    >Endre</button>
    <button  onclick="goToDeletePage(${person.id})" >X</button>
    </li> 
    `;
}
html+=`</ul>`;

return html;

}


//Burasi people listesinin filtrelenmesi islemini yapip filtrelenmis datayi donuyor...
function filterPeopleList(){
    console.log("searchedValue: ",model.inputs.search.searchedValue.toLocaleLowerCase());
let filteredData=model.people.filter(person=>   person.name.toLowerCase().includes(model.inputs.search.searchedValue.toLowerCase()) ? person : null
)

console.log(`filterdData: `,filteredData);

return filteredData;

}



function createMenuHtml(){
    return `
    <button onclick="model.app.page='create';  updateView()">CreateNewTodo</button>
    <button onclick="model.app.page='search';  updateView()">Search</button>
    <button onclick="model.app.page='hjem';  updateView()">Hjem</button>
    
    
    `;
}
