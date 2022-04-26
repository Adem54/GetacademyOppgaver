function addNewPerson(event){
    event.preventDefault();
    //Yeni bir obje ekleyecegiz o zaman objenin icindeki elementleri olusturalim id den baslayalim.Son id yi bulalim ve de sonrasinda ona 1 eklyerek id yi belirleyelim
    let id=findMaxElement(model.people);
    let name=model.inputs.create.name;
    let email=model.inputs.create.email;
    model.people.push({id,name,email});
    model.inputs.create.name="";
    model.inputs.create.email="";
    updateView();
}