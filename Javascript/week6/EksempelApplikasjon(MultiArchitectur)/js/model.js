const model={
    //1: tilstanden selve applikasjonen er i 

    //Eger ki sayfamizda logg in yapilacaksa mantikli olarak biz eger giris yapilmis ise giris yapan kullanicinin user icin kullanici adi vs olmasi mantikli olabilirdi ve eger inloggin olmamis ise null yazilirdi
    app: {
        page:'search',//create new,delete,edit
    },

    //2-inputfelter til hver side
    inputs:{
        search:{
               text:'', 
        },
        createNew: {
            name:'',
            email:'',
            telNummer:'',
        },
        delete: {
            areYouSure:false,
            personId:null,
        },
        edit: {
            personId:null,
            name:'',
            email:'',
        }
    },

    //3- felles data
    //e posta adreslerinin oldugu kisiler var burda  ve direk datanin kendisi
    people:[
        {id:1,name:'Per', email:'per@mail.com'},
        {id:2,name:'Pål', email:'pål@hotmail.com'},
        {id:3,name:'Espen', email:'espen@getacademy.com'},
    ]
}


//Ortak datamiz people tum sayfalar bu data uzerinden islerini yurutecek ama her sayfanin kendine ait alanlari var ve kendine ait olan alanlari uzerinden kendi sayfalarinda verileri gosteriyorlar ama kendi datalari da ortak people datasina bagli olarak islerini goruyor

//BU DA ONEMLI....BESTPRACTISE.......**********************************************
//Dikkat edelim baslangic degerlerini verirken property mizi personId de number olaagi icin ona null baslangic degerini vermis olduk...ve biz hangi person un id sini silecegimizi delete objesi altindaki personId yardimi ile erisecegiz....Yani biz view da gosterecegimz ve de bizim action fonksionlarimizda event fonks larimizda kullanicidan gelecek olan parametreler icinde burda alan olusturmaliyiz ki, onlari sayfalar arasi yonlendirmelerde o datalari global model da olusturdugmuz datlarimiza aktarip sonra da tekrar kullanabilelim..dinamik bir sekilde.......

//COOK ONEMLI MODELI NASIL OLUSTURUDUGUMUZ IYI PLANLAMALIYIZ.......
//MODEL de biz oncelikle her sayfa icin bir tane app altina page propertysi koyduk ve bu page propertysini biz anladigmz kadari ile calistirmak isteidigmiz sayfa hangisi ise ona gore page i dinamik bir sekilde degistirecgiz yani kulllanici ornegin hangi sayfaya gitmek istiyorsa kullanicidan gelecek olan action a gore yani action event ine gore page in degisip degismedingini analayacagiz.....
//module.app.page sayfasi bizim reacttaki karsiligi router larimizdir bunlar sayesinde biz sayfa yonlendirme yapacagiz.....ve de birbiri icine girmis mesela search sayfasi icinde onclick olusturmak zorundayiz silme islemi ile iligli ama ordaki buton bizi delete sayfasina yonlenmemizii saglayacak sadece ve bunu da searchController da  icinde yazacagiz...... 
//Ayrica inputs objesi altina da her sayfanin bir objesini yerlestirdik buna da dikkak edelim......
//Burasi bizim react ta hazirladigmiz initialValue miz en basta bir tane ana obje yapiyoruz ve icinde kullanacaigmiz verilerin statelerin baslangic degerlerini atiyoruz ya ayni o mantik.......
//ONEMLI NOKTA......
//Biz burda dosyalarimizi ayirarak calisacagiz ve ismizi sistematik yapacagiz bunun bize cok katkisi var mesela, biz burda her bir dosyayi bir programciya verip daha kolay collabrate ,coopearation yapilabilir ve git ile proje birlestirirken daha az konflikt ile karsilasilir.....

//Bu view leri parcalara ayirmak ayni reacttaki componentlerin ayri ayri yazilmasi gibidir ki tamamen ayni resmen hic farki yok........

//es6-string-html extension ini yukle ve template literals icinde sanki normal html yaziyoru mus gibi yazabiliyoruz....