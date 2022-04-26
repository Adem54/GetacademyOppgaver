

//Bunun iicinde degisken de tanimlayabilirim static ile ve bunu direk Helper i new lemeden calistirabilirim....
export default class Helper{
    
   static createNewElement(tagName,className){
        const element=document.createElement(tagName);
        element.className=className;
        return element;
    } 


  static  generateRandomObject(array){
        let arrayLength=array.length;
        const randomIndex=Math.floor(Math.random()*array.length);
        const randomArrayObj=array[randomIndex];
        return randomArrayObj;
}

static checkIsObjectExist(arrayData,obj){
const checkAnimalInStorage=arrayData?.find(animal=>animal.name===obj.name) ? true :false;
return checkAnimalInStorage;
}

}
