let input = document.querySelector('.form-control');


function convertText(){
    // pasizymiu html esancius savo elemntus input + p
    let lineOfText = input.value;

    let pElm = document.querySelector('.border-box-answer')
    // pasitikrinu input ilgį ir išvedu atsakymą į html p tagą
    // tikrinu ar ilgis mažesnis arba lygus 3 simboliams, kad išvestų lygiai tris simbilius
    if(lineOfText.length <= 3){

        pElm.textContent = lineOfText.toUpperCase(); 

    }
    // jei ilgis teksto daugiau nei 3 simboliai
    if(lineOfText.length > 3){
        // naudoju funkcijas, kurios pirmus 3 teksto indeksus perašo į mažasias raides
        pElm.textContent = lineOfText[0].toLowerCase() + lineOfText[1].toLowerCase() +
        lineOfText[2].toLowerCase()+ lineOfText.slice(3);// čia pasirenku slice funkciją, kuri išmeta pirmas tris raides iš žodžio;
    }
    

}

// susikuriu event lisinerį pasirenku pagal ką jis veiks (šiuo atveju: input) ir kartu įrašau funkciją, kurią kviečiu, kai į laukialį suvedamas tekstas;
input.addEventListener('input', convertText); 