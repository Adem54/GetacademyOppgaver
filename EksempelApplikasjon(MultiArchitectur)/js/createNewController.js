function createNewPerson(){

 validate(register);
    model.app.page="search";
    updateView();
}



function validate(callback){
    const {name,email,telNummer}=model.inputs.createNew;
if(name && (email || telNummer) )return callback();
alert("Legg inn et navn og email eller telNummer");
}


function register(){
    const person={}
    const id=getMaxPersonId()+1;
    //id icinde common da gene bir fonkisyon yazacagiz people dizisi icindeki id lerden en buyugunu bulacak ve bize en buyuk id yi donecek bir fonksiyon yazacagiz....
    //prototyping yaparak ekliyoruz....
   person.id=id;
   person.name=model.inputs.createNew.name;
   person.email=model.inputs.createNew.email;
   person.telNummer=model.inputs.createNew.telNummer;
   model.people.push(person);
}