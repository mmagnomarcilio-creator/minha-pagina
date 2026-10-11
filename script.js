const fatos = [
  "A prensa de Gutenberg (por volta de 1450) ajudou a espalhar livros e ideias por toda a Europa.",
  "O Tratado de Tordesilhas (1494) dividiu as terras descobertas entre Portugal e Espanha.",
  "Em 1543, Copérnico publicou sua teoria de que a Terra gira em torno do Sol.",
  "Luís XIV, o Rei Sol, reinou por 72 anos, um dos reinados mais longos da história europeia.",
  "Em 1500, a frota de Pedro Álvares Cabral chegou ao território onde hoje fica o Brasil.",
  "A Enciclopédia de Diderot e d'Alembert reuniu o conhecimento do Iluminismo em muitos volumes.",
  "A Paz de Vestfália (1648) encerrou a Guerra dos Trinta Anos e reorganizou o mapa político da Europa."
];

const botaoFato = document.getElementById("botao-fato");
const textoFato = document.getElementById("fato");
let ultimo = -1;

botaoFato.addEventListener("click", function () {
  let indice;
  do {
    indice = Math.floor(Math.random() * fatos.length);
  } while (indice === ultimo);
  ultimo = indice;
  textoFato.textContent = fatos[indice];
});
