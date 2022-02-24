

function editPerson(){
    const personId=model.inputs.edit.personId;
    const person=findPersonById(personId);//Biz burda people dan hangi person i degistirecegimizi bulduk ve simdi de onu degstirecegiz peki nerden degitriecegiz tabi ki, model.inputs.edit deki degerleri biz anlik olarak inputtdan buraya bagladik ve de son degisiklikte de biz guncel veriyi tabi ki model.inputs.edit ten alip model.peopla i da guncelleyecgiz ki bizim search teki listemiz veriyi model.people dan aliyor person listesini dolaysii ile mantik bu.....
  
 person.name=model.inputs.edit.name;
 person.email=model.inputs.edit.email;
  // const index=findPersonIndexById(personId);
   // model.people.splice(index,1,{...model.inputs.edit});
    //Silme islemini yaptiktan sonra da tekrar biz search sayfamiza yonlendirelim.....SUPER YA BU SAYFA YONLDNIRME--REACTTAKI ROUTER LAR ILE AYNI MANTIK......
    model.app.page="search";
    updateView();
}


//BUR SIRLAMAYI COOOK IYI OKU....
//Dikkat edelim burda biz people icinden edit yapilacak olan person u bulup verilerini degistiryoruz....
//1-searchView dan listelenen veri uzerindeki edit butonun hazirla ve tiklanan perosnun ids ini parametre olarak ginder
//2-goToEditPage de once sayfayi module.app.page i edit yap
//Sonra da personId,name,email i peopla icinden person u bul ve person icindeki degleri model.inputs.edit objesi icndeki propertieslere ata tabi updateView i unutma
//3-editView sayfasinda input lari value attribute lere veriyi model.inputs.edit.name,model.inputs.edit.email den getir cek, ve de o inputlarin oninput olaylari uzerinden girilecek value leri de kontrol altina almak icin model.inputs.edit.name e ornegin this.value diyerek onpinput evemtimde girilecek degerin de dogrudnan model.inputs.edit.name e atanmasini saglmais olyoruz....,
//4-Son olarak da editController da da artik model.inputs.edit den erisecegiz guncel veriyi, id si de var, alip people arrayi icinden bulup degistirmis olacagiz ve bu sekilde endre islmeini de yapmis olacagiz....Yani biz inputu dogrudan model.inputs.edit e bagladik  ve de inputlarin value sini de model.inputs.value ye bagladik yani anlik olarak verimiz model.inputs.edit objesinde duruyyor ist son asama olan burda da biz guncel veriyi model.inputs.edit den alip, model.people a yazacagiz ki viewSearch teki person listemiz de guncellenmis olsun.......