function ligarEnergia(comodoId) {
    var comodo = document.getElementById(comodoId);
    comodo.style.backgroundColor = "green";
}

function desligarEnergia(comodoId) {
    var comodo = document.getElementById(comodoId);
    comodo.style.backgroundColor = "red";
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