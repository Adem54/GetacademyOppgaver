//Normalde bu sekilde currentSupplier tutulur ve her kayit olan i database e atilir ve bir token verilir ve de sign in oldugunda veriler database de oldugu icin, senin gonderidgin verilerden token kontrol edilir ve token dondurur ve bunsan sonra tum istekler token ile yapilacaktir..
//imageFileObject:{},
//Bir file bilgilerini tutan obje gelecek bu objeyi kullanarak biz image elementimize url uretecegiz...
//category bizim model de sabit datamizda tutulacak ve biz burda id uzerinden gidecegiz.Categoriler listelenir ve dropdown ile categori seceriz, ve secilen kategoinin id sini burda tutariz ki artik istedgimiz zaman categori verilerini ortak, kategori dizisinden alabilirz..relational database

//Onemli bir nokta biz adminpage de admin resim ekleyecek ve orda imageFileObjecti alacagiz ve imageFileObject uzerinden biz controller da veya view da ona karar verecegiz imageUrl sini elde edecek fonksiyonu yazacagiz ve imageUrl i de veri eklerken imageUrl olarak ekleyecegiz...

const model={

    app:{
        page:"admin",
        currentUser:{
            firstName:"Olav",
            lastName:"Johansen",
            emial:"olav@gmail.com",
            password:""
        }
    },
    inputs:{
        adminPage:{
            happening:{
                title:"",
                description:"",
                imageFileObject:"",
                categoryId:1,
                paymetnType:null,//gratis,betalt,ekstrabetalt
                happeningStartDate:{
                    date:"",
                    time:""
                },
                happeningEndDate:{
                    date:"",
                    time:""

                },
                //type="datetime-local" 
                eventTimeframeStartDate:"",
                eventTimeframeEndDate:"",
                webSiteUrl:"",
            },
            submitResult:{
                successResult:{success:true,message:"Your happening created successfully"},
                errorResult:{
                    error:false, message:"The form can not be submitted, Some fields are required"
                }
            }
        },
        userPage:{
            chosenDateFrom:"",//filtering
            chosenDateTo:"",//filtering
            chosenMonth:"",//buna gore secilen 
            isCategoryBtnClicked:false,//megamenu mantiginda category olusturmak icin bunu aliriz birkere
            isAllCategorySelected:false,
            selectedCategoriesId:[1,2],// 
            isLesMerBtnClicked:false,
            
        }
    
    },

    data:{
        categories:[{id:1,title:"Familie og moro", isSelected:false},{id:2,title:"Barneaktivitet", isSelected:false},{id:3,title:"Restaurant", isSelected:false},{id:4,title:"Sport", isSelected:false}],
        //Vi skal holde alle kategorier
        paymentTypes:[{id:1,title:"gratis",isChecked:false,},{id:"2",title:"betalt",isChecked:false},{id:3,title:"ekstra-betalt",isChecked:false}],
        happenings:[{
            id:1,
            title:"Pølsefest",
            description:" It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            imageUrl:"",
            categoryId:1,
            happeningTypeId:1,
            happeningStartDate:"15/04/22 11:55",
            happeningEndDate:"18/04/22 15:55",
            eventTimeframeStartDate:"01/04/22 09:00",
            eventTimeframeEndDate:"18/04/22 15:55",
            webSiteUrl:"https://blogg.millsproffpartner.no/slik-lager-du-p%C3%B8lsefesten-ingen-glemmer",
        }],
        months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"],
        users:[]
    }

}

/*
Har sett på modellen deres nå; det ser bra ut! Har noen kommentarer likevel: 
 - Jeg anbefaler å lagre datoer som iso-format tekst i modellen, altså eks '2022.03.10'. Da er det lett å lage new Date(dateStr). Se gjerne denne leksjonen om hvorfor: https://getacademy.moodlecloud.com/mod/page/view.php?id=465
- jeg ville kanskje gjort start og stopp slik:
  start: {
    date: '2022-03-10',
    time: '08
    }

og tilsvarende for end. Da kan time ev. være null hvis det er hele dagen

-  isFilterTodayOn osv kan kanskje byttes ut med filterDate som inneholder iso-dato det skal filtreres på?
- inputs.userPage.dates - jeg skjønte ikke hva dere skal bruke denne til? Er dte en mellomlagring? I så fall er det bedre å bare generere alt fra scratch i view-funksjonene - men lag en funksjon for å gjøre det
 - ellers ser det veldig bra ut!


*/