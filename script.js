var jogador, vencedor = null;
var jogselec = document.getElementById("jogador-selecionado");
var vencselec = document.getElementById("vencedor-selecionado");

mudarjogador("X");

function escolherquadrado(id){

    var quadrado = document.getElementById(id);
    if(quadrado.innerHTML !== "-"){
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    if(jogador === 'X'){
        jogador = 'O';
    }else {
        jogador = 'X';
    }

    mudarjogador(jogador);
    checkvencedor();
}

function mudarjogador(valor){
    jogador = valor;
    jogselec.innerHTML = jogador;
    
}

function checkvencedor(){
    var q1 = document.getElementById(1);
    var q2 = document.getElementById(2);
    var q3 = document.getElementById(3);
    var q4 = document.getElementById(4);
    var q5 = document.getElementById(5);
    var q6 = document.getElementById(6);
    var q7 = document.getElementById(7);
    var q8 = document.getElementById(8);
    var q9 = document.getElementById(9);

    if(checksequencia(q1, q2, q3)) {
        mudacor(q1, q2, q3);
        mudarvencedor();
        return;
    }

    if (checksequencia(q4, q5, q6)) {
        mudacor(q4, q5, q6);
        mudarvencedor();
        return;
    }

    if (checksequencia(q7, q8, q9)) {
        mudacor(q7, q8, q9);
        mudarvencedor();
        return;
    }

    if (checksequencia(q1, q4, q7)) {
        mudacor(q1, q4, q7);
        mudarvencedor();
        return;
    }

    if (checksequencia(q2, q5, q8)) {
        mudacor(q2, q5, q8);
        mudarvencedor();
        return;
    }

    if (checksequencia(q3, q6, q9)) {
        mudacor(q3, q6, q9);
        mudarvencedor();
        return;
    }

    if (checksequencia(q1, q5, q9)) {
        mudacor(q1, q5, q9);
        mudarvencedor();
        return;
    }

    if (checksequencia(q3, q5, q7)) {
        mudacor(q3, q5, q7);
        mudarvencedor();
    }
}

function mudarvencedor(quadrado){
    vencedor = quadrado.innerHTML;
    vencselec.innerHTML = vencedor;
}

function mudacor(q1, q2, q3){
    q1.style.background = '#0f0';
    q2.style.background = '#0f0';
    q3.style.background = '#0f0';
}
function mudacor(q4, q5, q6){
    q4.style.background = '#0f0';
    q5.style.background = '#0f0';
    q6.style.background = '#0f0';
}
function mudacor(q7, q8, q9){
    q7.style.background = '#0f0';
    q8.style.background = '#0f0';
    q9.style.background = '#0f0';
}
function mudacor(q1, q4, q7){
    q1.style.background = '#0f0';
    q4.style.background = '#0f0';
    q7.style.background = '#0f0';
}
function mudacor(q2, q5, q8){
    q2.style.background = '#0f0';
    q5.style.background = '#0f0';
    q8.style.background = '#0f0';
}
function mudacor(q3, q6, q9){
    q3.style.background = '#0f0';
    q6.style.background = '#0f0';
    q9.style.background = '#0f0';
}
function mudacor(q1, q5, q9){
    q1.style.background = '#0f0';
    q5.style.background = '#0f0';
    q9.style.background = '#0f0';
}
function mudacor(q3, q5, q7){
    q3.style.background = '#0f0';
    q5.style.background = '#0f0';
    q7.style.background = '#0f0';
}

function checksequencia(q1, q2, q3){
    var igual = false;

    if(q1.innerHTML !== '-' && q1.innerHTML === q2.innerHTML && q2.innerHTML === q3.innerHTML){
        igual = true;
    }
    return igual;
}
function checksequencia(q4, q5, q6){
    var igual = false;

    if(q4.innerHTML !== '-' && q4.innerHTML === q5.innerHTML && q5.innerHTML === q6.innerHTML){
        igual = true;
    }
    return igual;
}
function checksequencia(q7, q8, q9){
    var igual = false;

    if(q7.innerHTML !== '-' && q7.innerHTML === q8.innerHTML && q8.innerHTML === q9.innerHTML){
        igual = true;
    }
    return igual;
}
function checksequencia(q1, q4, q7){
    var igual = false;

    if(q1.innerHTML !== '-' && q1.innerHTML === q4.innerHTML && q4.innerHTML === q7.innerHTML){
        igual = true;
    }
    return igual;
}
function checksequencia(q2, q5, q8){
    var igual = false;

    if(q2.innerHTML !== '-' && q2.innerHTML === q5.innerHTML && q5.innerHTML === q8.innerHTML){
        igual = true;
    }
    return igual;
}
function checksequencia(q3, q6, q9){
    var igual = false;

    if(q3.innerHTML !== '-' && q3.innerHTML === q6.innerHTML && q6.innerHTML === q9.innerHTML){
        igual = true;
    }
    return igual;
}
function checksequencia(q1, q5, q9){
    var igual = false;

    if(q1.innerHTML !== '-' && q1.innerHTML === q5.innerHTML && q5.innerHTML === q9.innerHTML){
        igual = true;
    }
    return igual;
}
function checksequencia(q3, q5, q7){
    var igual = false;

    if(q3.innerHTML !== '-' && q3.innerHTML === q5.innerHTML && q5.innerHTML === q7.innerHTML){
        igual = true;
    }
    return igual;
}

function reiniciar()
{
    vencedor = null;
    vencselec.innerHTML = '';

    for (var i = 1; i <= 9; i++) {
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    }

    mudarjogador('X');
}

