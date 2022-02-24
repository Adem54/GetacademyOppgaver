//Bu bir anket projesinin modelidir
const model={
    //Soracagimz sorular bizden hazir gidecek dolayisi ile modulumzde olacak sorular
    question:"Hvordan var handleopplevelsen din?",
    //Burda inputs yani bizim inputumuza girilecek degerler olacak, buraya girilecek olan degerler burdan answers a kaydedilecek burayi biz dogrudan input umuzun valuesine baglayacagiz ve de en son da biz burdaki veri yi answersa kaydedecegiz....
    app: {
        currentPage:"vote",
    },
    inputs:{
        votePage:{

        },
        optionsPage:{//Yeni alternatif ekleyebilmek icin burasi....
            newOption:"",
        }

    },
    //Burda da kullanicilardan gelecek olan cevaplar olacak cogul oldugu icin dogal olarak dizi icinde objeler seklinde olacak.....
    options: [{text:"Bra", color:"green"},{text:"Middels",color:"yellow"},{text:"Dårlig",color:"red"},],
        
    
}

