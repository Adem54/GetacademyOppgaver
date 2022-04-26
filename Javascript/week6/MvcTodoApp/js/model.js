const model= {
    app:{
        page:"search",
    },

    inputs:{
        search:{
           searchedValue:"",
        //filteredData gibi bir degiskene ihtiyacimiz yok cunku
    

        },
        create:{
            name:"",
            email:"",
            telNummer:""//null da kullanabiliriz veya id de string de kullanabiliriz...
        },
        edit:{//Burda bizim liste icinde hangi elemente tiklandigini bilmemiz icin, burada biz id yi de tutmamiz gerekiyor hangi id ye tiklandigini nasil ele alacagiz eger bilmezsek....
            personId:null,
            name:"",
            email:"",
        },
       
        delete:{//Burda da yine bir onaylamak icin checkbox kullaniriz ve bu checkbox i yontecek bir boolean type degiskene ihtiyacmiz olacak...
            areYouSure:false,
            personId:null,
        }

    },


    people:[
        {id:1, name:"Per", email:"per@gmail.com"},
        {id:2, name:"Pål", email:"pål@gmail.com"},
        {id:3, name:"Espen", email:"espen@gmail.com"},
    ]
}

//Model altindaki inputs altindaki sayfalardaki dinamikligi yonetebilmek icin olusturdugumuz model alanini olustururken, sunu hatirlayalim.React redux ile actionslarimizi olustururken, actioncreater fonksiyuonloarimiza parametre gonderiyoruz ki reducer da biz state i degistirecek islemleri yani state dedimiz ana verimiz state i degistirecek islemleri biz reducer da yapiyorduk ve actionCreater daki fonksiyonolarimizin parametrelerine biz edit icerisinde ki fonksiyonlarimizda parametrelere gonderilen ve bizim onlar uzerinden edit,delete fonlkiyonlarimizi gerceklestirecegimz verilerimizi de model icinde inputs altindaki her bir sayfamiz icerisinde tutacagiz....