 //1-1 tane ana api gibi bir array olacak
    //2- 1 tane bizim tikladigmiz zaman sadece o anda tikladiklarimizi alacak bir array olacak ve save deyince bu arraydakileri alip en son baska bir arraya aktaracak ve icini bosaltacak 
    //3-Son olark da bizim bir arrayimizde sectikleirmiz toplanacak
import Helper from "./Helper.js";

    export default class View{
        constructor(helper){
            this.helper=Helper;
            this.main=document.getElementById("main");
            this.btnShowAnimalRandomly=this.helper.createNewElement("button","btn btnShow");
            this.btnShowAnimalRandomly.textContent="btnShowAnimalRandomly";
            this.btnSaveAnimal=this.helper.createNewElement("button","btn btnSave");
            this.btnSaveAnimal.textContent="btnSaveAnimal";
            this.btnShowAnimalFromStorage=this.helper.createNewElement("button","btn btnShowSaved");
            this.btnShowAnimalFromStorage.textContent="btnShowAnimalFromStorage";
            this.divContainer=this.helper.createNewElement("div","container");
            this.sectionFromAnimals=this.helper.createNewElement("section","section");
            this.sectionFromStorage=this.helper.createNewElement("section","section");
            this.divContainer.append(this.sectionFromAnimals,this.sectionFromStorage);
            this.main.append(this.btnShowAnimalRandomly,this.btnSaveAnimal,this.btnShowAnimalFromStorage,this.divContainer);
           //Burasi test silecegiz...
       
        }

        //Constructor disinda eger bir fonksiyon icinde degil isek this. diye verileri orda alamiyoruz orasi function tanimlama yeri ondan dolayi function icinde alabiliyoruz this. ile hazirladigimiz verileri...

//Helper-Tools


//display burasi view i guncelleyecek olan fonksiyon  old icin buraya bizim parametre olarak view icindeki islemerlimizde ekrana basacagimiz verileri guncellememizi saglayacak data lari parametreden almaliyiz.....BEST PRACTISE.....
   display(animals,storage){
       console.log("Burasi display guncelleme methodudur....")
      //First we clear in dynamic data in our html-sectionlarin altindaki h, image i gosteren div elementlerini sil
    //Burayi daha efektiv while dongusu ile dene daha sonra
    this.sectionFromAnimals.innerHTML="";
    this.sectionFromStorage.innerHTML="";

//Burda animals ve storage icinde eleman var mi o cek edilecek bunu hazir bir fonksiyon ile yap daha sona
    if(animals.length>0 ){
       const animalImageDivAnimals=this.helper.createNewElement("div","animalArea");
        const animalNameFromAnimals=this.helper.createNewElement("h3","h3");
        this.sectionFromAnimals.append(animalNameFromAnimals,animalImageDivAnimals);

const animalNameFromStorage=this.helper.createNewElement("h3","h3");
const animalImageDivStorage=this.helper.createNewElement("div","animalArea");
this.sectionFromStorage.append(animalNameFromStorage,animalImageDivStorage);
        //Buna bir dikkat et..addEventListener icinde kendi olsuturgumuz fonks ile yeni bir eleman uretemedik
        
        //Normal fonksiyon olusturursak kendine ait thisi old icin icerisinde this olarak kendini isaret ediyor...Ama yok bunu biz arrow function yaparsak o zaman kendine ait thisi olmadigi icin this View class ini veriri ve biz bu sayede View icindeki tum fonksiyonlarimiza erismis olyoruz....
       //Bunu genel bir fonksiyon haline getirebilriiz...
        this.randomObject;
       //Bir fonksiyon icinde uretilen bir degeri disarda da kullanacaksak o zaman disarda bir tane variable tanimlayip fonksiyon icinde uretilen degeri disarda tanimladigmiz variable e assign ederiz ki disarda da kullanabilelim.....Tabi javascript class icinde bir degiskeni global hale getirmek icin this. ile tanimlamaliyiz... BEST PRACTISE..
        this.showRandomlyImage=(event)=>{
        //   console.log(this);Callback yaptigmz icin View class i this dir artik
          this.randomObject= this.helper.generateRandomObject(animals)

           animalNameFromAnimals.textContent=this.randomObject.name;
           //animalName i animal icinden tiklanan animal in ismini alacaksin
//Burda image url sini animals dan almamiz gerekiyor...
console.log("showRandomImage teki randomObject: ",this.randomObject);
   animalImageDivAnimals.style.backgroundImage=`url(${this.randomObject.url})`;
  
        };


        //Biz random olarak gosterdgimiz image i save yaptgimiz da da gostermek istiyoruz..cunku animals icindeki resmimizi biz butona tiklama ile getiriyorduk ama tabi save yapinca showImage yapan butona da tiklamadigmiz icin onun getirdigi resim gidiyor bizde istiyoruz ki hem kaydetsin hem de kaydettigini gorelimm biz showImage e tiklamasak bile biz de bunu nerden anliyoruz, storage bos desgil ise eger diyoruz. sen en son gosterdgin randomObj icindeki resmi yine ayni kutuda goster diyoruz......
       if(storage.length!==0){
animalNameFromAnimals.textContent=this.randomObject.name;
//animalName i animal icinden tiklanan animal in ismini alacaksin
//Burda image url sini animals dan almamiz gerekiyor...
console.log("showRandomImage teki randomObject: ",this.randomObject);
animalImageDivAnimals.style.backgroundImage=`url(${this.randomObject.url})`;
       }
        this.btnShowAnimalRandomly.addEventListener("click",this.showRandomlyImage);

//BUNLARI NOT AL AMA BU DATAYI DEGISTIRIYOR DISPLAY DISINDA ADDEVENTLISTENER YAP..CONTROLLER DA INVOKE ET AMA...SAVE IN OLUSTUGU YER OLAN MODEL DAKI SAVE FUNC ICINDE DISPLAY ILE GUNCELLMEYI UNUTMA...
        // this.btnSaveAnimal.addEventListener("click",(event)=>{
        //     console.log("event: ",event);
            //Eger save tiklanmis ise-.Eger event objesi gelmis ise demekki save e tiklanmis demektir.....Bestoractise...
            /*  
            if(event){} bir addEVentListener eventhandling function icersinde bu sekilde tiklandigi zaman sadece calissind diyebiliriz bunu eger bizim disarda baska bir fonksiyonu bu fonksiyoon icinde direk invoke edeeceksek ve sadece biz tikladgimiz zaman calissin dersek o zman kullanabiliriz....
            */
          
        //         const randomObj=this.randomObject;
        //         this.saveAnimalInStorage(storage,randomObj);
        //         console.log("storage: ",storage);
            
        // })

//Bu sadece veriyi bize gostermye yariyor...
        this.btnShowAnimalFromStorage.addEventListener("click",event=>{
           
            const randomObj=this.helper.generateRandomObject(storage);
            if(randomObj){
                animalNameFromStorage.textContent=randomObj.name;
            animalImageDivStorage.style.backgroundImage=`url(${randomObj.url})`;
            }else{

                console.log("storage icinde veri  yok....");
                
            }
        })
        //Dikkat edelim...Eger function arrow function degil ise normal function ise o zaman biz, icinde class in this. diye global olarak kullanabildigimiz verilerini kullanamayiz....Kullanmak istersek o zaman bind.this() demeliyiz cunku normal functionlarin kendine ait this leri vardir...Ama arrow functionlarin kendine ait thisleri olmadigi icin dogrudan icinde bulunudklari class lari vereceklerdir...
 
    
    }
    
   }

bindSaveTodo(handlerSave){
    this.btnSaveAnimal.addEventListener("click", event=>{
        const randomObj=this.randomObject;//Buraya gelme sebebimiz 2 tanedir 1 si burdan paremetreye girilecek veriyi alacagiz..kullanici etkilesimi burdandir cunu(input,btn--)2.si de addEventListener lar da islem html elementleri uzerindendir ve burda ancak fonksiyonu tetikleyebiliriz...

        if(randomObj){
          
            console.log("randomObjbindSaveAnimalView: ", randomObj);
          handlerSave(randomObj);
        }

    })
}





//Burda model dan bir degisken kullanip storagi ona atayabilirdik onu global olarak kullanabilirdik
saveAnimalInStorage(storage,randomObj){
    if(!this.checkIsObjectExist(storage,randomObj)){
        storage.push(randomObj);
    }    
 console.log("storage: ",storage);
    
}
        
    }
