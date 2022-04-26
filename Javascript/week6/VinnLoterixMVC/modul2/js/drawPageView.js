function updateViewDrawPage() {
    let html = `<table>
                  <tr>
                    <td><input type="checkbox"
                               onclick="selectAllOrNone(this.checked)"
                               ${getChecked(model.inputs.drawPage.selectAll)}/></td>
                    <td><b>Personer</b></td>
                    <td>
                    </td>
                  </tr>`;
    for (let person of model.inputs.drawPage.list) {
      html += `<tr>
                  <td><input type="checkbox"
                             onclick="togglePersonSelected(${person.id})" 
                             ${getChecked(person.isSelected)}"/></td>
                  <td>${person.name}</td>
                  <td><button class="litenKnapp"  onclick="deletePerson(${person.id})">x</button></td>
                </tr>`;
    }

    html += `<tr>
                <td></td>
                <td colspan="3">
                  <input 
                    size="10" 
                    type="text" 
                    oninput="model.inputs.drawPage.newPersonName=this.value" 
                    value="${model.inputs.drawPage.newPersonName}"
                    />
                  <button class="litenKnapp" onclick="addPerson()">legg til person</button>
                </td>
             </tr>
             <tr><td>&nbsp;</td></tr>
             <tr>
                <td colspan="3">
                  <button class="knapp" onclick="draw()">Trekk!</button>
                  <input 
                    type="number" 
                    size="1" 
                    value="${model.inputs.drawPage.drawCount}" 
                    onchange="model.inputs.drawPage.drawCount=parseInt(this.value)"
                    />
                  <button class="" onclick="changeDrawCount(1)">▲</button>
                  <button class="" onclick="changeDrawCount(-1)">▼</button>
                </td>
              </tr>
            </table>`;

    document.getElementById('app').innerHTML = `
        <div class="page">
            <div class="header">
                Vinlotterix 🍷
            </div>
            <div class="innhold">${html}</div>
            <div class="meny">
                <button class="knapp fixed" onclick="model.app.currentPage='draw'; updateView()">Personer</button><br />
                <button class="knapp fixed" onclick="model.app.currentPage='winners'; updateView()">Vinnere</button><br />
            </div>
        </div>  
    `;
//Personer ve Vinnerer butonlarinin yaptiklari sadece tiklayinca sayfalari degistirmek dolayisi ile gidp model.app.currentPage lere  oraya tiklainca hangi sayfaya gidilecekse orayi yaziyor......
    console.log("modelInputsdrawPage: ", model.inputs.drawPage);
    console.log("modelDRawsCommonData: ", model.draws);
  }
  
  //isSelected true ise attribute icine 'checked="checked"' olarak donuyor
  //Biz arkadaki input icindeki this.checked i model de inputs altindkai veri mize bagladiktan sonra dinamiklik icin artik bu verimiz uzerinden ilerleyecegiz ama sunu da es gecmeyelim... bu verimiz ornegin isSelected burda input elementimizin attrributunde true oldugu zaman checked i oraya getirecek ternaryi de yazmayi unutmayali....ki bu en onemlilerinden biridir yazmaz isek biz tikladigimz zaman arka da veri true olur ama on de checkebox checked olmaz .....coook onmeli......
  function getChecked(isSelected) {
    return isSelected ? 'checked="checked"' : '';
  }