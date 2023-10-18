function ligarEnergia(comodoId) {
    var comodo = document.getElementById(comodoId);
    comodo.style.backgroundColor = "green";
    comodo.style.color = "brown";
}

function desligarEnergia(comodoId) {
    var comodo = document.getElementById(comodoId);
    comodo.style.backgroundColor = "red";
    comodo.style.color = "white";
}

document.getElementById("btn-sala-on").addEventListener("click", function () {
    ligarEnergia("sala");
});

document.getElementById("btn-sala-off").addEventListener("click", function () {
    desligarEnergia("sala");
});

document.getElementById("btn-cozinha-on").addEventListener("click", function () {
    ligarEnergia("cozinha");
});

document.getElementById("btn-cozinha-off").addEventListener("click", function () {
    desligarEnergia("cozinha");
});

document.getElementById("btn-quarto2-on").addEventListener("click", function () {
    ligarEnergia("quarto2");
});

document.getElementById("btn-quarto2-off").addEventListener("click", function () {
    desligarEnergia("quarto2");
});

document.getElementById("btn-quarto-on").addEventListener("click", function () {
    ligarEnergia("quarto");
});

document.getElementById("btn-quarto-off").addEventListener("click", function () {
    desligarEnergia("quarto");
});

document.getElementById("btn-banheiro-on").addEventListener("click", function () {
    ligarEnergia("banheiro");
});

document.getElementById("btn-banheiro-off").addEventListener("click", function () {
    desligarEnergia("banheiro");
});

function ligarLuz(comodoId) {
    var comodo = document.getElementById(comodoId);
    comodo.style.backgroundColor = "yellow";
    comodo.style.color = "black";
}

    function desligarLuz(comodoId) {
    var comodo = document.getElementById(comodoId);
    comodo.style.backgroundColor = "black";
    comodo.style.color = "white";
}

document.getElementById("btn-sala1-on").addEventListener("click", function () {
    ligarLuz("sala");
});

document.getElementById("btn-sala1-off").addEventListener("click", function () {
    desligarLuz("sala");
});

document.getElementById("btn-cozinha1-on").addEventListener("click", function () {
    ligarEnergia("cozinha");
});

document.getElementById("btn-cozinha1-off").addEventListener("click", function () {
    desligarEnergia("cozinha");
});

document.getElementById("btn-quarto21-on").addEventListener("click", function () {
    ligarEnergia("quarto2");
});

document.getElementById("btn-quarto21-off").addEventListener("click", function () {
    desligarEnergia("quarto2");
});

document.getElementById("btn-quarto1-on").addEventListener("click", function () {
    ligarEnergia("quarto");
});

document.getElementById("btn-quarto1-off").addEventListener("click", function () {
    desligarEnergia("quarto");
});

document.getElementById("btn-banheiro1-on").addEventListener("click", function () {
    ligarEnergia("banheiro");
});

document.getElementById("btn-banheiro1-off").addEventListener("click", function () {
    desligarEnergia("banheiro");
});

function ligaGeral(comodoId) {
    var comodo = document.getElementById(comodoId);
    comodo.style.backgroundColor = "purple";
    comodo.style.color = "black";
}

function desligaGeral(comodoId) {
    var comodo = document.getElementById(comodoId);
    comodo.style.backgroundColor = "black";
    comodo.style.color = "black";
}

function ligaGeral() {
    ligarEnergia('sala');
    ligarEnergia('cozinha');
    ligarEnergia('quarto');
    ligarEnergia('quarto2');
    ligarEnergia('banheiro');
}

function desligaGeral() {
    desligarEnergia('sala');
    desligarEnergia('cozinha');
    desligarEnergia('quarto');
    desligarEnergia('quarto2');
    desligarEnergia('banheiro');
}