// Função que retorna uma string de quebra de linha (<br>) para formatação do texto
function pulaLinha() {
    return "<br>";
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
divInfoIdade.innerHTML +=("João tem " + idadeJoao + " anos." + pulaLinha());
divInfoIdade.innerHTML +=("Giordanna tem " + idadeGiordanna + " anos." + pulaLinha());
divInfoIdade.innerHTML +=("Tiago tem " + idadeTiago + " anos." + pulaLinha());

// Calcula a média das idades e adiciona à div 'info-idade'
var media = (idadeJoao + idadeGiordanna + idadeTiago) / 3;
divInfoIdade.innerHTML +=("A média das idades é de " + Math.round(media) + " anos.");
