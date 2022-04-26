function updateViewVotePage() {
  console.log("updateVoteView");
  document.getElementById("app").innerHTML = `
    <button onclick="goToOptionsPage()">Options</button>
    </br>
    <h2>Dette er stemmesiden!</h2>
    <ul>
    ${createVotesHtml()}

    </ul>
    `;
}

function createVotesHtml() {
  let html = ``;

  for (let i = 0; i < model.options.length; i++) {
    const option = model.options[i];
    html += `
      <li>
            <button 
                onclick='vote(${i})'
                style='width:100px; background-color:${option.color}; margin-top:5px;'> 
                ${option.text}  
            </button> 
            ${option.voteCount ? `-${option.voteCount}` : ''}
            </br>
        </li>`;
  }

  return html;
}
//Burasi oylama yapilacak sayfa ve biz oylama ile ilgili alternatif leri burda listeleyecegiz..liste opp
//Herzaman yaptigimiz gibi html i boyle daginik birsekilde yazmiyoruz bir fonksiyon icinde asagida yazip ana View fonksiyonu icinde sadece o fonksiyonu calisitiyoruz...

//Dikkat edelim biz dinamik verilerimizi model de tutuyoruz her turlu ornegin eger bizim css icin yine verilerimiz model de var ise ornegin color gibi onlari burda inline css olarak kullanabiliriz

//Attribiute lerin daha duzgun gozukmesi icin, alt alta her bir attributu bir satira  yazariz...

//Bu dinamik yapilarda biz arrayimizi li lerimiz ile dondurerek kullaniciya gosterdigmiz zaman biz orasaini dinamik yapmak icin, datayi donderiyoruz ve de dinamik olarak listeledigimiz li lerin icine button koyup biz hangi elemente tiklarsak onun uzerinde dinamik islem yapmak icin, herzaman id veya index uzerinden gideriz hatta ilk oncelik olarak index uzerinden gitmeliyiz bu coook onemli cunku bir dizi icindeki elementleri

//Bu sayfada biz bir vote onclick olayi olusturduk ve de burda biz,