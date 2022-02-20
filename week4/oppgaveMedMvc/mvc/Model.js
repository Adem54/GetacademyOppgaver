
import Helper from "./Helper.js";

  export default  class Model{
    constructor(helper){
        this.helper=Helper;
        this.animals=[
{name:"cat", url:"https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg"},
{name:"dog",url:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"},
{name:"fish",url:"https://www.newportaquarium.com/-/media/Project/HFE/NAQ/Animals/Fish_Card.jpg?h=600&iar=0&w=600"},
{name:"bird", url:"https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/1200"},
{name:"insect",url:"https://images.firstpost.com/fpimages/1200x800/fixed/jpg/2021/01/screencapture-c-pxhere-images-1a-c4-2cd80cbea6174a47fc8b717d18ff-1604090-jpg-d-2021-01-12-13_11_31-1.jpg"},
{name:"monkey",url:"https://static01.nyt.com/images/2022/01/25/science/21sci-monkeylovetriangle/21sci-monkeylovetriangle-superJumbo.jpg"},
{name:"duck",url:"https://upload.wikimedia.org/wikipedia/commons/a/a1/Mallard2.jpg"},
{name:"tiger", url:"https://www.dyreparken.no/content/uploads/2019/02/Dyreparken_Tiger_-daniel.schjott-2970-scaled.jpg"},
{name:"kangaroo", url:"https://ichef.bbci.co.uk/news/976/cpsprodpb/B222/production/_103320654_kangab02file.jpg"},
{name:"rabbit", url:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rabbit-breeds-american-white-1553635287.jpg?crop=0.976xw:0.651xh;0.0242xw,0.291xh&resize=480:*"},
{name:"deer", url:"https://c.files.bbci.co.uk/13E6E/production/_106481518_gettyimages-172387616.jpg"}
];


this.storage=[];

//Datamizi degistirecek olan veriler bunlardir...
    }

//Bu fonksiyonu neden burda olusturuyoruz bunun uzerine dusun...
//Burda olusturdugun fonksiyonu 1-addEventListener dan dolayi view da tetiklenecek, ama invoke isi yine controller da 2-parametreye gelecek veri , view uzerinden gelecek...
saveAnimalInStorage(randomObj){
if(!this.helper.checkIsObjectExist(this.storage,randomObj)){
    this.storage.push(randomObj);
}    
console.log("storageModel: ",this.storage);
this.storageUpdate(this.animals,this.storage);

}



//Yani this.storageUpdate bizim update fonksiyonumuzdur artik...
bindChangingInStorage(callback){//Bu fonksiyon controller icinde invoke edilecek....
this.storageUpdate=callback;

}

}

//bindChangingInStorage ne icin yaptik...
//controllerdan update fonksiyonu alip burda this. global bir degiskene atiyorsun ki her bir datanin degisiklige ugradigi fonksiyonun icinde update i invoke edelim...