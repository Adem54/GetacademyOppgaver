
//Normalde bu islemi input icinde onclick islemi icinde model.inputs.drawPage.selectAll=this.checked diye yazabilirdi ancak bunu yapmanin yaninda birde for dongusunu kullanarak diger inputs checkelerde de degisiklik yapmak istedigi icin bunu direk drawPageView icinde degil burda yapmis dogal olarak.....
//BEST PRACTISE......BUNU IYI ANLA.........**************************
//burdan da sunu yapiyor bak dikkat edelim userinterface de view icinde yapilacak goruntulenecek her turlu degisiklik model altindaki inputs dan interface e dinamik olarak gelmelidir dolayisi ile burda  olan olay da sudur.... yani kafayi karsitirmaya gerek yok....Biz yaptigimiz tum uygulamlarda on yuzde degisiklikleri veriler uzerinden yoneiyoruz yoksa html elemnlerinnin kendilerine ait ozelliklere eriserek degil, biz her zaman html ve css ozelliklerini dinamik yonetebilmek icin bizim moddels icinde inupts altinda tuttugmz veriler ile bu islemleri yapariz.......
//selectAll=this.checked(personer.checked) a atanmistir....
//Personer ismi yaninda ki checked a bagliyourz liste icindeki elemanlarin checked ini direk......
function selectAllOrNone(selectAll) {
    model.inputs.drawPage.selectAll = selectAll;
    for (let person of model.inputs.drawPage.list) {
      person.isSelected = selectAll;
    }
    updateView();
  }
  
  //Model de input a girilen elemani interaktif bir sekilde ana verimize aktarabilmek icin tuttugumz yerdir aslinda.....
  function addPerson() {
    const name = model.inputs.drawPage.newPersonName;
    //Liste icerisinde objeler icindeki id lerden en buyugunu buluyor.....
    //Peki dikkat edelim push ile icerisinde veriyi nasil ekliyor tabi ki degiskene aktarmadan direk obje icinde ekliyor......burasi coook onemloi......eger degiskene atarsak o zaman referans type oldugu icin problem yasariz........
    const maxId = model.inputs.drawPage.list.map(p => p.id).reduce((max, value) => Math.max(max, value), -1);
    model.inputs.drawPage.list.push({ id: maxId+1, name: name, isSelected: true });
    updateView();
  }
  //Toggle islemi her zaman bizim listemizi tutugumz elemntler icinde tiklanan data
  //Ve biz her tiklamada tersini  yapmasini istiyoruz ondan dolayi da bu sekilde toggle haline getiriyoruz burda....
  function togglePersonSelected(id) {
    const person = findPerson(id);
    person.isSelected = !person.isSelected;
    updateView();
  }
  
  //delete islemi filter ile yapiliyor ya da splice ile yapilir ama filter islemi react-redux ta da gecerlidir....
  function deletePerson(id) {
    model.inputs.drawPage.list = model.inputs.drawPage.list.filter(p => p.id !== id);
    updateView();
  }
  
  //Trekk butonun basinca draw fonkisiyonunu calisitiriyor.....
  function draw() {
    //count a drawCountu atiyoruz
    let count = model.inputs.drawPage.drawCount;
    //Secilen kisiyi biz filter uzerinden bulabilirz yani obje icinde hangi isSelected true ise onu almak istiyoruz.....Bu da ancak listemizi filtereleyerek true olani alarak olacaktir...
    const selectedPeople = model.inputs.drawPage.list.filter(p => p.isSelected);
    const indexes = Array.from(selectedPeople.keys());//Sectigimiz dizinin indexlerini bir dizi iceerisinde bu sekilde alabiliyoruz.....
    const winners = [];

    //eger hic secili checkbox yok ise o zaman burda islem yapilmayacak.... ve count 0 olana kadar donecek...
    //Burda kullanici eger count olarak 1 tane secerse o zaman 1 tane kazanan sececek bu while dongusunu counta bagladgimiz icin 2 secerse 2 tane kazanan olacak.......
    while (count-- > 0 && indexes.length > 0) {
      console.log("count: ", count);
    console.log("indexes.length: ",indexes.length);
      const randomIndex = Math.floor(Math.random() * indexes.length);
      console.log("randomIndex:", randomIndex);
      //checkbox ta secilen isimler icerisinden birisi secilsin diye isSelected true yani checked yapilmis isimlerin index leri arasindan bir index uretecek randomIndex....
      const index = indexes.splice(randomIndex, 1);//VE random olarak secilen randomIndex kaca denk gelirse o index i indexes dizisinden siliyor ve aayni zamanda silinen indexi de bir dizi icinde index degiskeni ile almis oluyor....
      console.log("index: ",index);
      console.log("selectedPeople: ",selectedPeople);

      console.log("selectedPeople[index]: ",selectedPeople[index]);
      winners.push(selectedPeople[index].name);//Ve selectedPeopl dizi icinde bizim indexes dizi si icinden sildigmiz index  i selectedPeople da o index teki elemanin name ini winners a ekleriz....
      console.log("winnder: ",winners);
    }
    //Bu dongunun yaptigi islem kisacasi bir tane selectedPeople isminde checkbox lari aktif olan secilmis olan isimlerin oldugu bir dizi den onlarin index numaralarinin oldugu indexes isminde bir dizi olusturuluyor sonra bir de winners isminde bos bir dizi olusturuluyor ve bir dongu ile secilmis isimlerin indexes indexlerin oldugu dizi 0 dan buyuk oldugu muddetece ve de count degeri 0 dan buyuk oldugu muddetce donecek ve de count 1 azaltilacak ayni zaman da indexes dan her seferinde 0  ile indexes in lengthi arasinda random sayi uretip o sayiyi splice ile indexes den silerken sildigimiz index sayisini da index degiskenine atayarak o degisken index i de hangi selectedPeopla dan hangi objeye denk geliyorsa onu bulup onun iicnden name i winners lar icine yazariz kisacasi bu sekilde sira ile checked true olan isimleri winners lar icine random bir sekkilde ssecerek yazariz....

    //unshift bir dizi icerisinde en basa yeni elemanlar ekler......
    //Yine dikkat edelim parametre icerisine direk obje parantezleri ile veriyi yaziyor gidip deggiskene atayarak degil!!!burayi iyi kavra...bestpractise..
    model.draws.unshift({
      winners: winners,
      time: getNowForStorage(),
      participants: selectedPeople.map(p => p.name)//selectedPeople dizi icindeki obje icindeki name leri bir dizi icinde aliyor....
    });
    model.app.currentPage = 'winners';
    updateView();
  }
  //tiklaninca 1 artan veya 1 azalan buttonun fonksiyonu bu ve parametrede artan a basinca 1 geliyor azalana basinca da -1 geliyor.....Bu fonksiyon sayesinde bizim yine model altindaki inputs ta tuttugumuz drawCount her zaman max degeri aliyor.... yani biz oraya tikladigmiz zaman her zaman maksimum degeri kullaniyor....
  function changeDrawCount(delta) {
    model.inputs.drawPage.drawCount =
      Math.max(1, model.inputs.drawPage.drawCount + delta);
    updateView();
  }
  
  function findPerson(id) {//bir dizi icinde id si bilinen objeyi donduren fonksiyon...
    return model.inputs.drawPage.list.find(p => p.id === id);
  }