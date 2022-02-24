//Eger tarih verilmis ise o tarihi stringe ceviriyo, daha dogrusu models da mevcut data lar icinde kendi tarhi olanlari stringe ceviriyor.....virgulleri kaldiriyor boslukla degtisitiriyor
function getDateStringForDisplay(dato) {
  return dato.toLocaleString().replace(',', '').substr(0, 15);
}

//The toISOString() method returns a date object as a string, using the ISO standard.
//Yeni eklenen vinneren ler icinde guncel su anki aktuel tarihi giriyor new Date() function constructor i ile....
function getDateStringForStorage(dato) {
  return dato.toISOString().substr(0, 16).replace('T', ' ');
  //2022-02-24T21:15:03.096Z bunu 2022-02-24 21:15 buna donusturuyor.....
}

function getNowForStorage() {
  return getDateStringForStorage(new Date());
}