function updateViewSearch(){
    //Burda bir de menu olacak ve bu tum view componentlerinde ortak olacak dolayisi ile biz gidip her seferinde tum view larda bu fonksiyonu tabi ki olusturmayacagiz onun yerine, commonView.js dosayasi olsuturp orda yapacagiz...
    //Bu createMenuHtml tum sayfalarda bulunacakki biz bu butonlar sayesinde isteigtimz sayfay gidebilecegiz......yoksa ornegin legg til butonu ornegin search de var ama biz createNewView da de bu fonkksiyonu calistirmaz isek oraya gititimizde bu menuleri goremeyiz o zaman da sayfamizi degstiremeyhiz....
    document.getElementById("app").innerHTML=/*html*/ `
    ${createMenuHtml()}
    <hr/>
    <h3>Søk</h3>
    <input type="text" 
    oninput="model.inputs.search.text=this.value"
    value="${model.inputs.search.text}"
    />
    <button onclick=" updateView(); ">Søk</button>
   <br/>

    <h5>Søkeresultater</h5>
    <ul>
    ${createHtmlPeople()}
    </ul>
    `

}

//BESTPRACTISE....ARTIK BU SEKILDE KULLANACAGIZ ONA GORE BURAYI COOOK IYI ANLA...FOR DONGULERIMIZI VE DATAMIZI LISTEYECEGIMIZ HTML I AYRI BIR FONKSIYON ICINDE YAZIP O FONKSIYONU OKUNUR BIR SEKILDE UPDATEVIEWSEARCH DE YAZARIZ....SIMDI BURASI SEARCH SAYFASI OLD ICIN ANA VERI BURDA ZATEN LISTELENECEK VE DE BIZIM AYRICA VERIMIZI LISTELEMEIZE GEREK YOK CUNKU VERI ARAMASI YAPILMAZSA DATANIN TAMAMINI GORECEGIZ YOK, ARAMA YAPILIRSA DA ARAMA YAPILAN DATAYI GORECEGIZ AMA BIZ YINE DE DATA MIZI LISTELEYECEK EKSTRA BIR VIEW SAYFASI DA YAPABILIRIZ ASLINDA.......
//ARAMA ANA DATA UZERINDE YAPILACAK ARAMA YAPILIRSA ARAMA SONUCU GELECEK YAPILMAZSA ANA VERI GELECEK...MANTIK BU SEKILDE OLACAK....BUTON UZERINDEN YAPILACAK ARAMA ISLEMI......
//Burda biz ne yapacagiz verimizi fon dongusu ile dondurup icinden aranan yani model.input.search.text e yazilan datayi arayacagiz....liste verimizin icinde ondan dolayi da tabiki dongu ile bu islemi yapacagiz....

//BURAYI DA COK IYI ANLA DIKKAT ET....BESTPRACTISE....
//NORMALDE BUTON A TIKLAYINCA INPUT ICINE GIRILEN DEGERI ARAYACAK AMA BUTONA TIKLAMA ISINI NORMALDE BIZ CONTROLLER DA YAPARIZ BURDA FONKSIYONU YAZARI KONTROLLERDA INVOKE EDER VE ARDINDAN DA UPDATEVIEW ILE VIEW I GUNCELLERIZ AMA BURDA KI  DURUMDA BIZIM SADECE 1 KEZ VIEW I UPDATE ETMEYE IHTIYACIMIZ VAR, DOLAYISI ILE DE BIZ BUTONA TIKAYINCA SAYFAYI YENILESIN DIYECEGIZ TEKRAR CONTROLLER A GIDIP ORDA ARAMAYI  YAP VS DEN ZIYADE DIREK ARAMA  YI BURDA YAPTIRACAGIZ VE DE BUTTON ONCLIKC DE DE SADECE UPDATEVIEW I CALISTIRMASINI YANI GUNCELLEME YAPMASINI SAGLAYACAGIZ CUNKU BIZ ARAMA ISLMENI ZATTEN PEOPLE DATAMIZI LISTELEME ILE AYNI SEKILDE OLACAK BURDA CREATEHMTLPEOPLE ICINDE ARAMA YAPARIZ ARAMA SONUCU LISTEDE VARSA ONU GETIRIRI ARAMA YAPILMAZ VEYA SONUC YOK ISE DE TUM LISTEYI GETIRIR......
//BESTPRCTISE......-----COOOK IYI ......
//EGER model.inputs.search.text !== "" bos degilse poepl i filtreleme yap....
//DIKKKAT ET DIYECEGIZ KI EGER TEXT ICINDE VERI VAR ISE FILTERPEOPLE FONKSIYONUNU CALISTIR YANI O ISLEMI AYRI BIR FONKSIYON DA YAP VE BURDA SADECE CALISTIR...HER ZAMAN TEMIZ KOD VE PARCALAYABILDIGN KADAR FONKSIYONMLARI KUCUK PARCALARINA  AYIR.....
function createHtmlPeople(){
    let html=``;
    let people=model.people;
    const searchText=model.inputs.search.text;
    if(searchText!==''){
        people=filterPeople(searchText,people);
    }
 return  getListOfPeople(people,html);
} 


function getListOfPeople(people,html){
    for(let i=0; i<people.length; i++){
        let person=people[i];
        const {name,email}=person;
        html+=`
        <li>${name} - ${email} 
        <button onclick="goToEditPage(${person.id})" >endre</button> 
        <button onclick="goToDeletePage(${person.id})" >&#10006</button> 
        </li>
        
        `
    }
    return html;
}

//DELETE ISLEMI.......YAPIYI IYI ANLAYALIM....
//Her zaman ki gibi delete isleminde bize id gerekiyor veya uniq bir veri gerekiyor datamiz a erisebilecegimiz...Ama dikkat edelim biz delete islemini deleteView sayfasinda yapmaliyiz ama mecburen onclick eventini searchView da yaziyoruz...yapiya dikkat edelim biz searchView da yonlendirme yapan bir event fonksiyonu yaziyoruz ve bu fonksiyonu searchController da tutuyoruz.....Ve searchController da biz sayfayi deleteView componentine yonlendirecegiz.......


//indexOf array icinde ve string icinde aradigmiz bir elemanin index numarasini verir ama eger o eleman icinde yok sa index numarasi -1 verir dolayisi ile biz bir textin bir string icinde var olup olmadinign indexOf ile de kontrol edebilriiz.....
//BIR SEARCH ISLEMINI
//1-includes methodu ile yapabiliriz...
//2-indexOf ile de yapabiliriz
//3-search methodu ile de yapabilriiz....-
//EGER aradgimz eleman elimzde var ise o zaman bunu filteredList arrayi icine at yoksa atma
function filterPeople(searchText,people){
   //BUNU ILK DEFA GORDUM..PARAMETRDE GELEN ELEMENTE ASSIGN,DEKLARERER,SETTE..YANI BIR ATAMA YAPIYOR....***
   //YAZIM SEKLINDE DIKKKAT ET..OKDUKCA TEMIZ OKUNAKLI ANLASILIR YAPILMAYA CALISILIYOR....
   console.log("searchTexT; ",searchText);
    searchText=searchText.toLowerCase();
    let filteredList=[];//filtreleyip bunun icine atacgaiz...
    for(let person of people){
        let name=person.name.toLowerCase();
        let email=person.email.toLowerCase();
        if(name.indexOf(searchText)!= -1
        || email.indexOf(searchText)!= -1
        ){
            filteredList.push(person);
        }
    }
    return filteredList;

}
//Burda biz ne input a girecegimiz veriyi almayi bekliyoruz...
//Biz burda model de herhangi birsey degistirmiyoruz sadece model icindeki data, people datasi icinde arama yapacagiz
//Burda ilk isimiz inputa girilen value yi bir alalim bunu nasil alacagiz inputa veri girildiginde oninput eventi tetiklenecek
//oninput icinde biz ne yapacagiz bizim model icinde input text imizi tutacak veriye value yi gonderecegiz....BU ISLEM HERYERDE AYNIDIR REACTTA DA AYNIDIR EVENT OLAYI ICINDE ONCE GIRILEN DEGERI BIR ALIP DEGISKENE ATAYARAK ORAYI BIR KONTROL ALTINA ALIRIZ....
//INPUTLARI KONTROL ALTINA ALIRKEN 
//1-EVENT OLAYI ICNDE THIS.VALUE YI MODEL DA AYARLADIGMIZ DEGIKENE ATARIZ
//2-MODEL DA AYARLADIGMIZ DEGISKENI DE ATTRIBUTE OLAN INPUT VALUE YE ATARIZ
//3-INPUTUMUZA BIR BASLANGIC DEGERI VERMELIIYIZ KESINLIKLE YA DA BIR BESTPRACTISE KULLANIMI ILE INPUTU VALUEYE ATA AMA VALUE OLMAZSA  DIYE  BIR DEGER VERLEIM-value="${model.inputs.search.text || ''}
//BIZ BASLANGIC DEGERINI MODEL DE VERDIGMIZ ICIN BIZIM BU PRACTISI YAPMAMIZA GEREK YOK......
//AYNI MANTIK REACTTA DA BOYLE-STATE E ONCE GIRILEN VALUE YI ATARIZ SONRA DA O STATE I ATTRIBUTE OLAN VALUE YE ATARIZ...
//BESTPRACTISE----BURAYI COOOOK IYI ANLAMALISIN.........!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//NETTLESEREN-TARAYICI NASIL PARSE-TOLKE AYRISTIRIYOR KODUMUZU BAKALIM
//oninput="model.inputs.search.text=this.value" ONIPUT ICINDE DOGRUDAN YAZDIGIMIZ DEGSKENLERI GLOBAL DE AYNI JAVASCIPT GIBI AYRISTIRIP ONLARIN NEYE KARSILIK GELDIKTLERINE BAKIYOR COOOK ONEMLI BURAYI IYI ANLA YANI BUNU BIZ CONSOLE DAKI ELEMNTS MENUSUNDEN INCELERSEK, BURAYI STRING GIBI YAZIYOR ORAYA
//AMA value="${model.inputs.search.text || ''} BURDA ISE  ONCLICK ICINE YAZDIGIMZ SEY ILE AYNI SEYI YAZIYORUZ AMA NE YAPIYOR GIDIP MODEL DEKI TEXT VERMIZI BURAYA ATIYOR.....YANI MODEL ICINE GIDIP BIZIM BU YAZDIGIMIZ VERIYI ARIYOR.....
//DIKKAT EDELIM BIZ INPUTA YAZDIGMIZ VERIYI ALMAK ICIN ANA VIEW OLAN UPDATEVIEW FONKS UNUN INVOKE EDILMESI GEREKIR KI BIZ BUNU CONSOLE.LOG DA YAPARAK DENEYEBILIRIZ SONUCU....
//Burda da inputa girilen veriyi modelimiz icindeki verizme atadigmizi kontrol etmek icin console a module yazariz ve sonucu iki kez entera tikalriz inputa veri girdikten sonra....

//Biz burda model icine burdaki inputa girdigmiz valueyi gonderiyoruz ve bundan sonra søk butonuna basip verimizi arama olayi eventi gercekelesecek ve buttona bastigmiz zaman bir view in update omasi lazim ve bastan calismasi lazm ki degisiklilerimizi gorebilelim......
//Bu arada suna dikkat edelim, biz model uzerinden bir veriye inputvalue atamasi yapiyoruz ve sorun olmuyor cunku modelimiz de zaten windows scopunda bulunuyor......daha dogrusu global scope da bulunuyor ama tutup updateViewSearch icinde bir degisken olusturup da ona model.inputs.search.text i atayip da o texte value yi atmaaya kalkarsak sorun yasariz cunku biz updateViewSerach scopu altinda degisken olsuturup global scope da okumaya calisiyoruz.....

//COOK ONEMLI----ARAMA SONUCLARINI NASIL AYARLARIZ....COOOOOK ONEMLI...BESTPRACTISE......
//Simdi biz aram sonuclarini gostermek istiyoruz ne yapacagiz burda gostercegiz...BEST PRACTISE-Biz view icerisinde html kodlarini string icinde yazarken de cok temiz yazmaliyiz ornegin biz orda ne gostercegiz arama sonuclari o zaman bize arama sonuclarini getirecek bir fonksiyon lazm iste bunu burda yapabilriz ama cok temiz bir sekilde yapmaliyiz. Yani fonksiyonu bu sayfada ama html stringleri disinda olusturup invoke etme isini html stringleri arasnda koymamiz gereken yere yerlestiririz.....
//Yani hicbir zaman direk bir ton string icinde html elementi yazma onlari degiskene veya eger bir action yapiyuorsan veya condition a gore yapoiyorsan onlari ayni react icinde kullanmaya calistimgiz gibi bir fonksiyon icinde dogru bir isimlendirme ile gosterelim....Her zaman anlasilir olmali.....

//iconlari unicode icon veya character remove , edit idye aratarak buldum

