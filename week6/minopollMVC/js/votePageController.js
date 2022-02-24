function goToOptionsPage(){
    model.app.currentPage='options';
    updateView();
}

//BESTPRACTISE....MUTHIS BESTPRACTISE....JAVSCRIPTIN FLEXIBLE OLMASINDAN HER ZAMAN FAYDALANMALIYIZ...COK HARIKA..COK SKISIRSAN PROTOTYPING YAPIP BASIP GECEGILIRZ HERSEYI BOYLE MODA MOD DA TUTTURMAK ZORUNDA DA DEGILIZ JAVASCRIPTIN ESNEKLIGINDEN DOLAYI......
function vote(index){
    let option=model.options[index];
    if(!option.voteCount){
        option.voteCount=0;
    }
    option.voteCount++;//1.defa degil de 2.defa geliyor ise... o zaman her seferinde 1 arttir diyoruz...
    updateView();
}
//  if(!option.voteCount)option.voteCount=0; normalde boyle bir property yok ve prototyping ile ilk defa burda olusturyr ve de ilk olusturdugumuz zaman eger ki yoksa diyoruz degerini 0 ver diyerek 0 ile baslatiyoruz ilk baslangicini ki burda iste prototypingin gucu.....javascript sayesinde....biz options icindeki objelerimiz icinde olmayan bir property yi prototyping yontemi ile objemize bir anda karar verip ekleyebiliyoruz....BESTPRACTISE....PROTOTYPING.......Otomatik olarak biz vote butonuna basinca otomaik olarak options ortak array icerisindeki objelere property olarak voteCount ekliyor her tiklamada da 1 arttirarak ekliyor....