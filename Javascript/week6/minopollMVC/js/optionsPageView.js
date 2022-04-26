function updateViewOptionsPage(){
    document.getElementById("app").innerHTML=`  
    <button onclick="goToVotePage()">Vote</button>
    <br/>
    <h2>Dette er legge til alternativ-siden</h2>
    Nåvarende alternativer:
    <ul>
    ${createOptionsHtml()}
    </ul>
    Nytt alternativ: </br>
    <input
    type:"text" 
    oninput="model.inputs.optionsPage.newOption=this.value"
    value=${model.inputs.optionsPage.newOption}
    />
    <button
    onclick="addOption()"
    >Legg til </button>
    `;
}
//Dikkat edelim, input umuza girilen veriyi dogrudan model imiz icindeki inputs altinda optionsPage altindaki newOption a atiyoruz...dogrudan...Bizm aktuel verimiz her zaman model altindaki inputs lar alitinda olacaktir....Ayrica value kismini da direk inputs icerisindeki bu alan icin olusturdugumz model.inputs.optionPage.newOption alanindan almasi icin value ye bagliyoruz....
//onclick ile de input icine girilen degeri options icerisine kaydedecegiz...Ve bu islmei nerde yapiyoruz tabi ki bu sayfanin controller sayfasinda event handling fonksiyonumuzu olusturacagiz....

function createOptionsHtml() {
    let html = ``;
  
    for (let i = 0; i < model.options.length; i++) {
      const option = model.options[i];
      html += `
        <li>
            
                  ${option.text}  
             </br>
          </li>`;
    }
  
    return html;
  }


  //Her html attribute kendi satirinda olmalidir