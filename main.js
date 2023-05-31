// Função que retorna uma string de quebra de linha (<br>) para formatação do texto
function pulaLinha() {
    return "<br>";
}

// Função que adiciona uma frase à div 'info-idade' no documento HTML. A frase é passada como argumento para a função.
function mostra(frase) {
    divInfoIdade.innerHTML += frase + pulaLinha();
}

// Define o ano atual
var ano = 2023;

// Calcula a idade das pessoas subtraindo seus anos de nascimento do ano atual
var idadeJoao = ano - 2004;
var idadeGiordanna = ano - 2003;
var idadeTiago = ano - 2010;

// Seleciona a div com a classe 'info-idade' no documento HTML
var divInfoIdade = document.querySelector('.info-idade');

// Adiciona as idades das pessoas à div 'info-idade'
mostra("João tem " + idadeJoao + " anos.");
mostra("Giordanna tem " + idadeGiordanna + " anos.");
mostra("Tiago tem " + idadeTiago + " anos.");

// Calcula a média das idades e adiciona à div 'info-idade'
var media = (idadeJoao + idadeGiordanna + idadeTiago) / 3;
mostra("A média das idades é de " + Math.round(media) + " anos.");
