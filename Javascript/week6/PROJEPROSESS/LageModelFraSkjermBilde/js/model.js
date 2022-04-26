  //Bu normal roll methodu ile degil sadece admine ait bir site ve admin a ati bir uygulama ve de admin meningsmålu hazirladiktan sonra onu userPage veya meningsMålPage haline getirdikten sonra bir link olusturacak ve onu kullaniciya gonderecek sadece....dolayisi ile bu bu sekilde bir durum ondan dolayi boyle signup sign in vs bunlar yok bu bir applikasjon bir sirkete ait applikasjon masaustu uygulama gibi, bir web application degil yani.....
    //Bu meninsmål u hazirlayacak olan admin burda onun her girdigi dinamik olarak veri once burda input icindeki verimize yazdiracagiz burdan da felles ortak common data miza dizi olan gonderecegiz ve orda tutacagiz..........
    //icerdeki question lar da o sekilde olacak.....
    //Bunun bir saglamasini yapalim........ONEMLI....
       //Burasi kullaniciya gonderecegimiz sayfa olacak.......Ve burda dinamik olarak bize sonuclar veya cevaplar geleck ve biz dinamik olarak burda cevaplari alip, nereye common dataya atacagiz....
       //den skal komme otomatisk
                //Biz sonuc olarak input lari dinamik olrak koyacagimiz icin kac tane questions var ise o kadar sayida doncecek index sirasi ile ve biz her bir index te sunu yapacagiz...model....svar[index]=this.value
const model={
    app:{
        
currentPage:"opprettMeningsmål",//startMeningsmål,showResults,meningsmåls(Lagring Page)
    },

  
    inputs:{
    opprettMeningsmålPage:{
            meningsmål://Opprettmeningsmål tiklandigi anda buraya bir obje olusturulacak....sonra da
                {
                    state:"opprettMeninsmål",
                    id:"",//eller null hvis vi gjør number type
                 lagetAv:"",   
                 title:"",
                 kategori:"",
                 oppsett:"",
                 opprettDato:"",
                 sistEndretDato:"",
                 question:
                     {title:"",
                    options:["","",""
                        ,
                        {egenDefinertText:""}
                    ]}
                }
        },
        meningsmålsPage:{
            meningsmåls:[
                {
                    id:"",
                    title:"",
                    tilstand:"",
                }
            ]
        },
     
        showMeningsmålPage:{
            bruker: {
                id:"",
                forNavn:"",
                etterNavn:"",
                anonym:false,
                svar:[],
                meningsmålTitle:"",
                lastVoted:"",//Dato
            },
        },
        resultPage:{//litt usikkert..
            result:{
                svar:[{text:"",voteCount:0} ],
                totalAntallSpørsmål:20,
            },
        }        
    },

    data:{
        meningsmåls:[
            {
                id:"1",
                lagetAv:"Adem",   
                title:"myMeningsmål1",
                kategori:"Performans",
                oppsett:"MultipleChoise",
                brukerId:"",
                questions:
                [
                    {questionId:"",title:"What kind of color do you like?",
                    options:[
                        "","","",
                        {egenDefinertText:""}
                    ],
                },
                ]
               },
        ],
        brukere:[
            {
                id:"",
                forNavn:"",
                etterNavn:"",
                anonym:false,
                svars:[],
                meningsmålTitle:"",
                fullførtDato:"",
            },
        ]
        
    }



}

/*

   users: [
        {id: 0, isAdmin: true, admin: '', pwd: '',  },
        {id: 1, isAdmin: false},
    ],
*/