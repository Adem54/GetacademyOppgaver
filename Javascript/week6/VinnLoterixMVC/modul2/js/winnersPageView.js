function updateViewWinnersPage() {
    const dayNames = ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag'];
    let html = '';
    let cssClass = 'førsteTrekning';
    for (let draw of model.draws) {
        const time = new Date(draw.time);
        console.log("time: ",time);
        const dateText = getDateStringForDisplay(time);
        console.log("dateText: ",getDateStringForDisplay(time));
        const dayName = dayNames[time.getDay()];
        console.log("dayName: ",dayName);
        const winners = draw.winners;
        const participants = draw.participants;
        const winnerWord = winners.length === 1 ? 'Vinneren' : 'Vinnerne';
        html += `<p>
                    <small>${dayName} ${dateText}</small><br/>
                    <b class="${cssClass}">${winnerWord} er ${createTextList(winners)}!</b><br/>
                    <small>Trukket fra totalt ${participants.length} personer: ${createTextList(participants)}</small>
                </p>`;
        cssClass = '';
    }
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
}

//Burasini yaptigi is liste isminde gleen dizi icindeki elemanlari string seklinde yazmak ama yazarken de son dizinin son elemenainin oncesine og eklemek yaptigi is bu.......
function createTextList(liste) {
    if (liste.length === 0) return '';
    if (liste.length === 1) return liste[0];

    const tekstListe = liste.join(', ');//diziyi aralarina virgul koyarak string seklinde yaziyor
    const indexSisteKomma = tekstListe.lastIndexOf(',');
  //Kacinci letter a denk geliyor verdigin index ten birden fazla var ise en sondaki index in son virgul kacinci karaktere denk geliyor onu buluyor...En son virgule gelerek bir string icndeki en son elementi almis oluyor bu sekilde.....
    //substr sunu yapiyor icerisindeki 1.sayinin kacinci karaktere denk geliyorsa ordan itibaren 2.parametredeki karaktere kadar olan texti verir...
    console.log("teksListe: ",tekstListe);
    console.log("read: ",tekstListe.substr(0, indexSisteKomma) +//Son isim haric diger isimleri getiriyor
    ' og ' + tekstListe.substr(indexSisteKomma + 1));
    return tekstListe.substr(0, indexSisteKomma) +//Son isim haric diger isimleri getiriyor
        ' og ' + tekstListe.substr(indexSisteKomma + 1);//Burasi da sadece son ismi getiriyor.......
}