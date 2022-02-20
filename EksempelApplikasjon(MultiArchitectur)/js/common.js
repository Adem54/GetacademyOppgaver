function createMenuHtml(){
    return /*html */ `
    <button onclick="model.app.page='search'; updateView()  ">Søkpage</button>
    <button onclick="model.app.page='createView'; updateView()">LeggeTilpage</button>
    <button onclick="model.app.page='hjem'; updateView()">Hjempage</button>
    
    `;
    }//

//Burasi tum view componentlerde veya tum safyalarda ortak olacak view kismini burda tutacagiz ki DRY-DO NOT REPEAT YOURSELF PRENSIBINE UYABILELIM

//button icindeki veya html elementleri icine inline olarak yazdigmiz attribute olarak yazdigmiz onclick icine yazacagimiz kodlari tarayci ayni script icine  yazilan kodlari okur gibi okuyor ondan dolayi biz eger onclick="" buraya normal degisken i yazabiliyoruz ama suna dikkat burasi global scope ta okunyor bizimn modelimiz global scope ta old icin sorun yasamiyoruz.... ve de eger burda bir string kullanacak sak o zaman cift tirnak icinde bir de tek tirnakk kullanmaliyiz....

//Bu butonlar sayfa degistirmemizi sagliyorlar ve biz burda hangi butona tilkarsak bizi o sayfanin view kodlarini calstiracak cunku biz model.app.page ini degistiriyoruz...
//Biz tabi delete ile ilgili View kodlarini nasil calistiracagiz delete i biz gidip li ler icine yazmamiz gerekir ki hangi her bir li de delete olsun ve hangine silmek istersek ona tiklayabilelim....


function findPersonById(id){
    
    for(let person of model.people){
        if(person.id===id)  return person;
    }
    return null;//fonksiyona biz her zaman birsey dondurmemiz gerekir teoride ondan dolayi eger id yi bulamaz ise null donsun bize.....
}

function findPersonIndexById(id){
    for(let i=0; i<model.people.length; i++){
        let person=model.people[i];
        if(person.id===id) return i;//indexi dondururuz burda....
    }
    return null;//fonksiyona biz her zaman birsey dondurmemiz gerekir teoride ondan dolayi eger id yi bulamaz ise null donsun bize.....
}




//Tabi biz burda birde genel bir fonks daha olusturup bir liste icinde bir id ye gore objeyi bulma fonksiyonu da yazariz

function findObjectById(id,list){
  
    for(let obj of list){
        if(obj.id === id) return obj;
    }
    return null;
}

//Yeni eleman eklerken id olusturmak icin bunu yapiyoruz...
function getMaxPersonId(){
    let id=0;

    for(let person of model.people){
        if(person.id>id)id=person.id;
    }
    return id;
}