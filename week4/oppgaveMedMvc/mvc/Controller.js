
import Model from "./Model.js";
import View from "./View.js";


    class Controller {
        
                constructor(model,view){
                    this.model=model;
                    this.view=view;
                    //Burda baslattik ilk calismayi...
                    this.onDataChanged(this.model.animals,this.model.storage);
                    
                    //Bu da model icindeki update isleminin invoke edilmesidir
                    this.model.bindChangingInStorage(this.onDataChanged);//arrow func. old icin binda gerek yok....
                    //Bu da data icinde yapilan bir degisikligin invoke edilmesidir..
                    this.view.bindSaveTodo(this.handlerSave.bind(this));
                    
        
                }
        
        //Display islemini yapan fonksiyon budur
                onDataChanged=(animals,storage)=>{
                    this.view.display(animals,storage);
                }
        
        
                handlerSave(randomObj){
                    this.model.saveAnimalInStorage(randomObj);
                }
            }

            const view=new View();
    const model=new Model();
    const controller=new Controller(model,view);








    
    //Bir degiskeni constructor icinde tanimlamak bize 2 sey sagliyor
        //1-class new lendiginde bellekte olusturulduktan sonra adres,veya ref dan hemen sonra ilk yapilan is constructor 1 kereye mahsus olmak uzere calistirilmasidir...
        //2-Constructor da this. diye tanimldigin degerleri global yapmis oluyorsun ve class icinde heryerde kullanabiliyorusun artik....


   //Bizim controller da Model dan gelen CRUD operasyonlarini bir fonks icinde calistirmamiz....
   //Datalayer katmaninda olustur business icine dependency injection yap-constructor icine interface uzerinden, ve de bu sekilde o interface i implement eden tum class lar objeler orda kullanilabilsin-interface ve inherit edilen base class lar kendini inherit ve implement edenlerin referansini da tutaildigi icin...
        //React-reduxt da actionCreator da olustur ama componenette bir tana farkli isimde func olusuturp gelip component iicinde o func i calistirirsin....     