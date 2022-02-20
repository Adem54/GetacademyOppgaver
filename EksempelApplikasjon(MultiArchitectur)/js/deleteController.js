function deletePerson(){

    //MUTHIS BESTPRACTISE.............***********
    //delete inputcheckbox eger tiklanmis ise o zaman silecegiz yani kullanici silmeyi onaylamis ise sileriz....Biz bir veriyi cek edecegimiz zaman veya herhangi bir veriye erismez gerekiyorsa gidecegimiz yer bellidir model, eger bir veriye model dan erisemiyorsak model designimizda problem vardir ondan dolayi, model i cok iyi design etmeliyiz o zmaan bize ne gerekiyor kullanici delete icin hazirlanan checkbox i tiklamis mi onu bilgisini benim burda almam gerekiyor nerden model dan.......
    if(!model.inputs.delete.areYouSure) return;
    const personId=model.inputs.delete.personId;
    const index=findPersonIndexById(personId);
    model.people.splice(index,1);
    //Silme islemini yaptiktan sonra da tekrar biz search sayfamiza yonlendirelim.....SUPER YA BU SAYFA YONLDNIRME--REACTTAKI ROUTER LAR ILE AYNI MANTIK......
    model.app.page="search";
    updateView();
}


//Burda silme islemini biz, id uzerinden direk datamizdan filter methodu ile yapabiliriz
//Ama burda splice methodunu kullanarak silecegiz ki bunun icinde bizim silecegizm elementin indexine ihtiyacmiz var o zaman biz bir tane common function yazariz bir liste array icinden onun indexini bulan bir fonkiyon yazariz...


//BESTPRACTISE-IF CONDITIONLARI KISA YAZMAK
//BIZ NORMAL IF SUSLU PARANTEZ KULLANMAK YERINE DIYECEGIZ KI EGER KI AREYOUSURE FALSE GELIYORSA KI ONU ! ILE KULLANARAK ILK CONDIITON CALISMASINI SAGLAYACAGIZ VE RETURN  YAPIP BITIRECEGIZ O ZAMAN EGER KU KULLANICI CHECKBOX I TIKLAMAMISSA ZATEN SILMEK ISTEMIYORDUR VE RETURN ILE DELETEPERSON FONKSIYONUNDAN CIKMIS OLACAK...
//AYRICA IF CONDITION LARDA SUSLU PARANTEZ YERINE CONDITION VE RETURN YAPARSAK ZATEN O CONDITON GERCEKLESMEZSE ASAGI DA INECEGI ICN UZUN UZUN YAZMAYA GEREK KALMAMIS OLUR.........