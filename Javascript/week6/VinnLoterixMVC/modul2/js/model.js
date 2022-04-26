var model = {
  //Sayfa,user, admin durumlarinini yontettimigz yerdir....
  app: {
    currentPage: 'draw',
  },
  //Burda da sayfalarda interaktifligi gerceklestirdigmiz yani kullanicilarin sayfaya interaktiflik yaparak sayfadaki gerceklesen anlik her turlu degiskligi dinamik olarak yonetebilmek icin kullandigimz sayfadir....
  inputs: {
    drawPage: {
      selectAll: false,//Personer in yanindaki checkbox kullanici tarafindan dinamik olarak true false donusturulerek diger tum kisileirni check durumu true yapilabiliyor bu sayede.....Ayni sekilde false da yapilabiliyor bu sayede....
      drawCount: 1,//Bu da Trekk butonunun  yaninda input icindeki sayiyi 1 arttirip azaltma interaktif dinamikligini tutuyor....
      newPersonName: '',//Vinlotrixe yeni bir participant olarak aktif bir sekilde eklenen veriyi tutuyor....
      //Peki bu sekilde icerisinde isimlerin vs bulundugu objelerin oldugu bir diziyi neden biz inputs altinda tutuyoruz da common data icinde tutmuyoruz cunku burdaki datayi biz, interaktif bir sekilde kullanacagmiz yani bizim userinterface de yapacagimzi islemlerin  sonucu olarak bize gelecek datalari biz, common data olarak tutacagiz onun disinda userinterface de kullanici etkilesimi olacak her turulu data burda olacaktir ki o datalari dinamik bir sekilde kullanip sonra da common dataya aktarabilelim......
      list: [
        { id: 100, name: 'Per', isSelected: true },
        { id: 101, name: 'Pål', isSelected: true },
        { id: 102, name: 'Espen', isSelected: false },
        { id: 103, name: 'Ole', isSelected: true },
      ]
    },
  },
  //Katilimcilar dizi icerisinde objelerde tutuluyor ve model deki ortak data icerisinde bulunuyor burasi listelenecek yerdir......
  //BAk dikkat edelim mantik hep su sekilde user interface de interaktif bir sekilde islemler inputs altindaki obje icinen yapilacak ama ordaki islemlerin sonucunda ortaya cikan eklenen vs degerler burda tutulmalidir...burasi cok iyi anlasilmalidir.....
  draws: [
    {
      winners: ['Ole'],
      time: '2018-10-17 17:10',
      participants: ['Per', 'Pål', 'Ole']
    },
    {
      winners: ['Per', 'Pål', 'Knut'],
      time: '2018-10-11 17:10',
      participants: ['Per', 'Pål', 'Ole', 'Knut', 'Gunnar']
    }
  ]
};

//YAPTIGMIZ ISLEM REACT ILE NEREDE ISE AYNI.......********************
//Model kismi redux, ya da react contex
//View kismi componentslerin return veya render in altinda kalan kisim
//Controller da return ile react hooks ismi arasinda yazdigjmiz event handlingler.....

//MODEL KULLANMA MANTGIMIZ.....
//Kullanici arayuzunde gerceklesecek olan tum degisiklikler model imizde input icindeki datalarimiz uzerinden dinamik olarak alinacak veya degistirilecek ve de amacimiz ne ise son olarak ne olusturmak istiyorsak o olusturacagiz data da yine model icinde commmon ortak data da olacak ve biz inputs altinda her safyfay ait interaktif dinamik olaarak kullanicinni yaptgi her interaktifligi tutacak datalar bulunacak ve en son o datalar ortak dataya aktrialcak mantik olarak-......
//Her bir model degisikliginde her seferinde updateView() i cagiririz ki bir kere daha bastan cagirilsin ve de model imiz de guncellensin diye....