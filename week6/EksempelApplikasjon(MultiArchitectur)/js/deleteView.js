function updateViewDelete(){
    document.getElementById("app").innerHTML=/*html*/ `
    ${createMenuHtml()}
    <hr/>
    ${createPersonDeleteHtml()}
    <h3>Slett</h3>
    <input type="checkbox"
    oninput="model.inputs.delete.areYouSure=this.checked"
    ${model.inputs.delete.areYouSure ? 'checked' : ''}
    
    />Er du sikker på at du vil slette?
    <button   onclick="deletePerson()">Slett!</button>
  
    `
}

//BURAYI SUREKLI KULLANACAGIZ.....UNUTMA..BESTPRACTISE.******BURAYI KAFANA KAZI......
//INPUT CHECKBOX IMIZI KONTROL ALTINA ALMAK VE MODEL DAKI VERIMIZE ATAMAK.....
//  oninput="model.inputs.delete.areYouSure=this.checked"
//${model.inputs.delete.areYouSure ? 'checked' : ''}
//MUTHIS BESTPRACTISE....CHECKBOX I KONTROL ALTINA ALMAK....THIS.CHECKED I MODEL DAKI MODEL.INPUTS.DELETE.AREYOUSURE DATAMIZA CHECKBOXA TIKLANDIGINDA ATAMIS OLUYORUZ... VE DE ZATEN THIS.CHECKED BU ZATEN SU SEKILDE CALISIYOR TIKLENDIGINDE TRUE TIK KALDIRILIDIGINDA FALSE OLACAK SEKILDE CALISIYOR...
//deletePerson onclick fonksiyonunu da deleteController da yazacagiz....


//BESTPRACTISE.....
//Silme islemlerinde her zaman silmeyi yapmadan once mutlaka kullaniciya emin misini diye bir confirmation yapmaliyiz


//Dikkat edelim islemlerimizi yaparken cok temiz ypamaya ozen gosteriyoruz her zaman
//Burda silecegimiz elemanin verilerini bir daha gosteriuyoruz silmek istedigine emin misin derken...
//Silmek istedigmiz elemeentin verilerini bir daha gostermek istedigimz icin zaten findPersonById islmeini yapiyoruz....burayi silmek icin yapmiiyoruz silmek isteidigmiz elemnti ekranda bir daha gostermek icin yapiyoruz.....
function createPersonDeleteHtml(){
        const personId=model.inputs.delete.personId;
        const person=findPersonById(personId);
        return  /*html */`
        Navn  ${person.name}<br/>
        Email  ${person.email}<br/>
        `
}

//BESTPRACTISE.....
//Simdi burda biz peeople listemiz icinde bize id si gonderilen person i silecegiz o zmaan once biz people arrayi icinden person u id uzerinden bulalim iste bu islemi de ayri bir fonksiyon icinde yapariz ki bu islem bir helper dir bir tool dur yani bunu biz ortak js dosyasina atip nerde ihtiyacimiz var ise kullanabiiliriz iste bu tarz ortak olacak islemleri de common a da olusturup bu fonksiyona ihtiyacimz oldugunda tekrar tekrar yazmaktan kurtulmus olacagiz.......