function updateViewEdit(){
    document.getElementById("app").innerHTML=/*html*/ `
    ${createMenuHtml()}
    <hr/>
    <h3>Endre</h3>
    ${createPersonEditHtml()}
   
    <button   onclick="editPerson()">Endre!</button>
  
    `
}
//Burda endre butonuna basinca da artik, biz
function createPersonEditHtml(){
    const personId=model.inputs.edit.personId;
 //   const person=findPersonById(personId);
    //id si uzerinde bulup da silecegimiz verinin degerinini ne oldugunu gostermeyecegiz.....Yani biz onu gidip 
    //ONEMLI--BESTPRACTISE......
    //Biz burda value olarak tutup da people arrayimiz den findPersonById ile buldugmuz person objesinin degerlerini degil, biz model datamiz icinde model.inputs.edit.name verisini view da gosterecegiz....Burasi cook kriitik....Biz view da her zaman model de tuttugmuz veriyi gosterecegiz....Dogrudan arrayi alip da burda gostermeyecegiz array i biz delete,update islemlernde hangi person degisecek onu bulabilmek icin kullaniriz ama bizim islemlerimiz, model de tuttugumuz data ile view arasinda olan dinamiklik olacak......MOdel e de datayi verirken tabi ki normal verimizi kullanacagiz....datamizi kullanacagiz....
    return  /*html */`
    Navn <br/>  
    <input value='${model.inputs.edit.name}'  oninput="model.inputs.edit.name=this.value"  />
    <br/>
    Email  <br/>  
    <input value='${model.inputs.edit.email} '   oninput="model.inputs.edit.email=this.value" />
    `
}

//BEST PRACTISE....EDIT ISLEMI....INPUTLARI KONTROL ALTINA ALIYORUZ.........
//Burasi edit sayfasi old icin searchView da endreye basinca bu sayfaya yonlendirilecek ve burda bizi ne karsilamasi lazm degistirmek istedigmiz verileri biz input icinde yazili olarak getirmeliyiz ve kullanici burda verileri  degistirebilmelidir....
//Peki biz kullanicinn edit isleminde name ve email inputuna yazdigi veriyi biz model.inputs.edit.name ve email datalarina atayacagiz ve bu sekilde kullanicinn girdigi verileri kontrol altina alacagiz......
//Ayrica biz  value='${person.name}'  input icinde bu sekilde model degisecek olan datamizin verilerini de value icine yazarak input icerisinde bizim degistirecegimz verilerin gelmesni sagliyoruz...
//BURDAKI FARKI AYIRT ETMELISIN.....COOK ONMELI---BESTPRACTISE-KARISTIRMA.....
//.Ama dikkat edelim bizim input value icerisinde gosterecetgimiz veriler model.inputs.edit objesinden gelecek yani modelimizden gelecek biz tutup da direk, people arryimizden alip veriyi inuput valuesinde gostermeyecegiz biz bu value icin zaten edit icinde alan olusturduk onlari kullanacagiz....