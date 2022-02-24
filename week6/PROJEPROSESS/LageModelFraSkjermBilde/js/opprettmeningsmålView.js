let html;
const { state } = model.inputs.opprettMeningsmålPage.meningsmål;
function updateOpprettMeningsmål() {
  document.getElementById("app").innerHTML = `
    <h2>OPPRETTMENINGSMÅL PAGE</h2>
   
    <button class="createMeninsmålBtn" onclick="createMeningsmålPopup()">Oprett Meningsmål</button></br>
    State:
    ${model.inputs.opprettMeningsmålPage.meningsmål.state}
    ${html || ""}

    `;
}

function createMeningsmålPopup() {
  if (state === "opprettMeninsmål") {
    html = ``;

    html += `
        <div  class="popUp">
        <input
        placeholder="title.." 
        value="${model.inputs.opprettMeningsmålPage.meningsmål.title}"
        oninput="model.inputs.opprettMeningsmålPage.meningsmål.title=this.value"
        
        /></br>
        <input placeholder="kategori.."
        value="${model.inputs.opprettMeningsmålPage.meningsmål.kategori}"
        oninput="model.inputs.opprettMeningsmålPage.meningsmål.kategori=this.value"
        /></br>
    
        <input placeholder="oppsett.."
        value="${model.inputs.opprettMeningsmålPage.meningsmål.oppsett}"
        oninput="model.inputs.opprettMeningsmålPage.meningsmål.oppsett=this.value"
        /></br>
        <button class="btn"
        onclick="createNewQuestion()"
        >Oprett nytt spørsmål!</button>
        </div>
        `;

    updateView();

    return html;
  }
}

function createNewQuestion() {
  console.log(
    "otpion1:  ",
    model.inputs.opprettMeningsmålPage.meningsmål.question
  );
  model.inputs.opprettMeningsmålPage.meningsmål.state = "oprettSpørsmål";
  if (
    model.inputs.opprettMeningsmålPage.meningsmål.state === "oprettSpørsmål"
  ) {
    html += `
        <div  class="popUp createNewQuestion">
        <input
        placeholder="title.." 
        value="${model.inputs.opprettMeningsmålPage.meningsmål.question.title}"
        oninput="model.inputs.opprettMeningsmålPage.meningsmål.question.title=this.value"
        
        /></br>
          <div> <button class="btn"
        onclick="addOption()"
        >addOption</button>
        
        <button class="btn"
        onclick="addQuestion()"
        >addQuestion</button> </div>
        </div> 
        `;
  }

  updateView();
  return html;
}



let optionIndex = 0;
function addOption() {
  const options =
    model.inputs.opprettMeningsmålPage.meningsmål.question.options;
  model.inputs.opprettMeningsmålPage.meningsmål.state = "addOption";

  let inputOption = ``;
  for (let i = 0; i <= optionIndex; i++) {
    console.log("i:: ", i);
    let text;
    if (i === 3) {
      text =
        model.inputs.opprettMeningsmålPage.meningsmål.question.options[3]
          .egenDefinertText;
    }

    inputOption += `  <input placeholder="option.."
    value="${
      i < 3
        ? model.inputs.opprettMeningsmålPage.meningsmål.question.options[i]
        : ""
    }"
    
    oninput="model.inputs.opprettMeningsmålPage.meningsmål.question.options[${i}]=this.value"
    /></br> 
   `;
  }

  html += `
    <div  class="popUp createNewQuestion">
    <input
    placeholder="title.." 
    value="${model.inputs.opprettMeningsmålPage.meningsmål.question.title}"
    oninput="model.inputs.opprettMeningsmålPage.meningsmål.question.title=this.value"
    /></br>
    ${inputOption} 
    <div> <button class="btn"
    onclick="addOption()"
    >addOption</button>
    
    <button class="btn"
    onclick="addQuestion(model.inputs.opprettMeningsmålPage.meningsmål.question)"
    >addQuestion</button> </div>
    </div>
    `;
  updateView();
  optionIndex++;
}

function addQuestion(newquestion) {
  let meninsmålLength = model.data.meningsmåls.length;
  console.log("modeldata: ", model.data.meningsmåls[0].questions);
  console.log("newQuestion: ", newquestion);
  const { kategori, oppsett, question } =model.inputs.opprettMeningsmålPage.meningsmål;
  //question ekleyecek her seferinde ama meninsmål u 1 kez ekleyecek.... onu da en basinda cek edecek varsa eger ekleme yok ise ekle.....
  //Burda karsimiza referanst type cikiyor ve biz parametreye dikkat edelim bir objeyi degiskene atayarak gonderiyoruz ve de bu gonderdigmz obje adres olarak gidiyor parametreye deger ollarak degil ondan dolayi da bu question objesi gidiyor global degiksne oolan model.data icerisindeki quesitons objesine yerlestiryor   nasil adress i tutuyor {question, daha sonr abi question a yeni bir deger atiyoruz ama dikkat edelim biz question objesi ayni adres te ayni degiskende tutuluyor ve de adres ayni andres ondan dolayi  biz sadece sunu yapiyoruz aslinda her push yaptigimiz da yeni bir question objesi ortak daya ekliyoruz eyvallah ama bundan onceki question larda ayni adresi tutan degisken i gonderdgimiz icin biz o adresin icindeki verileri degistirince question objesinin her bir yeni options ve tile girince o zaman bizim bundan once ekoledigimiz ne kadar question objesi var ise onlari tamami degisiyor iste bu referans type, adress type dan kaynaklaniyor ki bunu cokk iyi anlamamiz gerekiyor.....Iste o zaman yazilimda bir seviye atlariz.....Bunun farkli oldugnu surdan anliyoruz...parametreye gonderdimgiz oobjeyi  degerini biz question degiskeni ile degilde direk {} obje icinde gonerirsek o zaman biz her fonkskion calistiginda bellekte yeni bir adres referans acmasini saglamis oluyoruz.......Ondan dolayi da problemimiz cozulmus oluyor aslinda.........
  console.log("question:", question);
  let title=model.inputs.opprettMeningsmålPage.meningsmål.question.title;
  let options=model.inputs.opprettMeningsmålPage.meningsmål.question.options;
  model.data.meningsmåls[meninsmålLength - 1].questions.push(question);
  updateView();
}

/*
 function optionValue(){
        let optionValue=``;
        if(optionIndex===3){
          optionValue= model.inputs.opprettMeningsmålPage.meningsmål.question.options[optionIndex].egenDefinertText;  
        }else{
            optionValue= model.inputs.opprettMeningsmålPage.meningsmål.question.options[optionIndex];  
            console.log("testtt: ",model.inputs.opprettMeningsmålPage.meningsmål.question.options[optionIndex])
        }
        console.log("optionValueeee: ",optionValue);
        console.log("optionIndex: ",optionIndex);
        return optionValue;
    }
*/
//Sorulari eklerken hangi meninsmåle ekledigmizi bilmek icin, ne ypariz meninsmålu tuttugumuz sayfa olan opprettMeninsmål icinde meninsmål ismi ne ise su anki guncel meninsmå lumuz odur......Ve de soru ekleme islemimiz bittigi zaman bizim guncel olarak ekelidimgiz meninsmål u tutgugumz alan olan opprettMeninsMål un verilerini silecegiz.....
