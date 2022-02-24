function goToDeletePage(personId){
model.app.page="delete";
model.inputs.delete.personId=personId;
updateView();
}
//Biz burda hicbirsey silmeyecegiz biz burdan direk delete sayfasina yonlendiregiz....
//Ayrica da parametrede aldigimiz id yi biz delete sayfasinda kullanilamsini saglayacagiz bunu nasil saglariz bunun icinde yine model imizde delete sayfamiz icin hazirladimgiz objemiz icindeki personId propertysine atama yaparak id mizi de global datamiza almis oluruz ve de bu sekilde id mizi de kontrol altina almis oluruz.......
//BESTPRACTISE.....BIZ DATA MIZDA DEGISIKLIK YAPIYORUZ BUNU VIEW DA OKUNMASI LAZIM ONUN ICIN HEMEN ARDINDAN  NE YAPARIZ UPDATEVIEW() TABIKI
//BU ISLEMLERDEN SONRA DELETEVIEW A GECERIZ....


function goToEditPage(personId){
    model.app.page="edit";
    model.inputs.edit.personId=personId;
    const person=findPersonById(personId);
    //Biz model deki model.inputs.edit.name ve email i edit teki inputumuza da bagladik ve artik biz inputa ne girersek onu modelimiz icndeki edit objemiziin icindeki porperylerimize atamis olduk yani edit inputlarini da kontrol altina almis olduk....O zaman simdi ne yapacagiz burda biz id uzerinden hangi people dizimiz icinden hangi person objesi degistirilecek onu da bulduk o zaman 

   model.inputs.edit.name=person.name;
   model.inputs.edit.email=person.email;
    updateView();
    }
     
 //BEST PRACTISE.....BURALARI IYI ANLA...
    //Burda da biz sunu yapmis olduk, biz hangi personun endresine basarsak orda bizim modeldeki editteki name ve email imize biz inputa veri girmeden once bizim degistirecgimiz name ve email i modeldeki name ve email e atiyoruzzz......sette,assign.Yani normalde bos veri iken biz degistirmeden once hangi personi degistirecek isek onu model deki name ve email e de atamis oluyoruz...Bunu sundan dolayi yapiyoruz biz view editView da value de veri yi kullaniciya gosterirken model icindeki edit alanindan cekecegiz veriyi gidip de dogrudan people arrayinden degil buray karistirma ki burasi coook onemli ondan dolayi biz ne yaptik
    //1-searchView da onclick fonksiyonunu yazdik ve orda biz people verisinin listeliyoruz ve de hangi persona tiklandi ise onun id sini gotoEditPage e gonderiyoruz
//2-gotoEditPage de ise oncelikle edit sayfasina yonlendirme islemini yapiyoruz yani searchView da endre butonun a basilinca artik page olarak da edit page e gidecek, parametreden gelen personId yi hemen model imzi icindeki inputs icindeki edit objemizin propertylerine burda degistirielcek olan perosnun verilerini atayacagiz.....cunku biz bundan sonra endreivew a gidiyoru ve ordas biz tum islemeleri model edit icindeki veri ile editview arasinda yapacagiz dolayisi ile de editView sayfasindan once model deki edit icindeki propert personId,name,email degerlerine biz degitirilecek olan verinin deglerinij bu sayfada atamamiz lazim......COOOOK ONEMLI.....BESTPRACTISE..........
//Bizim model de view a baglaidgimz verimiz de aslinda direk people datamiza bagli ki biz editView da endre butonun basinca direk, people veriis icinde degisiklik ypaarsak o zaman degisikligimizi biz peoplea bagladigmiz icin normal uygulamamizda hic sorun cikmayacaktir...


