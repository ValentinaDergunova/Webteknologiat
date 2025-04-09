var counter = 0;

function init(){
    let nro1 = Math.floor(Math.random()* 10)+1;
    document.getElementById('firstTextInput').value = nro1;
    let nro2 = Math.floor(Math.random()* 10)+1;
    document.getElementById('firstTextInput1').value = nro2;
}

function minusNro1() { 
    let nro1 = parseInt(document.getElementById('firstTextInput').value);
    if (nro1 > 1) document.getElementById('firstTextInput').value = nro1 - 1;
}

function plusNro1() {
    let nro1 = parseInt(document.getElementById('firstTextInput').value);
    if (nro1 < 10) document.getElementById('firstTextInput').value = nro1 + 1;
}

function minusNro2() { 
    let nro2 = parseInt(document.getElementById('firstTextInput1').value);
    if (nro2 > 1) document.getElementById('firstTextInput1').value = nro2 - 1;
}

function plusNro2() {
    let nro2 = parseInt(document.getElementById('firstTextInput1').value);
    if (nro2 < 10) document.getElementById('firstTextInput1').value = nro2 + 1;
}

function calculate() {
    let nro1 = parseInt(document.getElementById('firstTextInput').value);
    let nro2 = parseInt(document.getElementById('firstTextInput1').value);
    let operation = document.getElementById('operation').value;

    if (nro1>0 && nro1<11 && nro2>0 && nro2<11) {
    let tulos = eval(nro1 + operation + nro2);
    document.getElementById('tulos').innerText = tulos;

    counter = counter + 1;
    document.getElementById('clicks').innerHTML = "laskutoimituksia: " + counter + " kpl";
    
    let element = document.querySelector('#element');
    let p = document.createElement('p');
    p.textContent = "laskelma "+ counter + ":   " + nro1 + " " + operation + " " + nro2 + " = " + tulos;
    element.append(p);
    }
    else 
    document.getElementById('tulos').innerText = "verhellinen input, anna numerot 1-10 välillä";

        /*switch(operation){
        case '+':
            tulos = nro1 + nro2;
            document.getElementById('tulos').innerText = tulos;
            break;
        case '-':
            tulos = nro1 - nro2;
            document.getElementById('tulos').innerText = tulos;
            break;
        case '*':
            tulos = nro1 * nro2;
            document.getElementById('tulos').innerText = tulos;
            break;
        case '/':
            tulos = nro1 / nro2;
            document.getElementById('tulos').innerText = tulos.toFixed(2);
            break;
        default:
            tulos = 'Virheellinen operaatio';
            document.getElementById('tulos').innerText = tulos;
        }*/
    }

function i_Info(){
    let i = document.getElementById('i-text');
    if(i.style.display === 'none')
        i.style.display = 'block';
    else 
        i.style.display = 'none';
}

    




