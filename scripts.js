
const imagens = [
  "/assets/controller-cosmic-red.png",
  "/assets/controller-edge.png",
  "/assets/controller-galactic-purple.png",
  "/assets/controller-gray-camouflage.png",
  "/assets/controller-hogwarts-legacy.png",
  "/assets/controller-midnight-black.png",
  "/assets/controller-new-pink.png",
  "/assets/controller-starlight-blue.png",
  "/assets/controller.png",
  "/assets/controller-ragnarok.png"
];

const descricoes = [
  "Explora novas fronteiras de jogo em seu console PS5™ com o controle sem fio DualSense™ Cosmic Red.",
  "Tire proveito dos botões customizáveis, gatilhos, controles analógicos personalizáveis, além de botões posteriores e muito mais.",
  "Traça um percurso para aventuras astronómicas em seu console PlayStation®5 com o controle sem fio DualSense™ Galactic Purple.",
  "Adiciona uma nova estética urbana ao teu console PS5™ com este controle Grey Camouflage, infundido com micro padrões únicos das icónicas PlayStation Shapes.",
  "Viva o indescritivel com este controle sem fio DualSense™ de edição limitada, adornado com a mundialmente famosa Escola de Magia e Bruxaria de Hogwarts.",
  "Acende as tuas noites de jogo em seu console PS5™ com o comando sem fio DualSense™ Midnight Black.",
  "Energiza todas as tuas expedições de games PlayStation®5 com o controle sem fio DualSense™ New Pink. ",
  "Ilumina o teu console PlayStation®5 com o controle sem fio DualSense™ Starlight Blue.",
  "Descubra uma experiência de jogos mais profunda e altamente imersiva com o novo e inovador controle do PS5™.",
  "Arme-se para a batalha do Ragnarök com este controle de edição limitada. Inspirado no mundo nórdico de Midgard."
];

const paragrafos = [
  "Cosmic Red",
  "Edição Edge",
  "Galactic Purple",
  "Grey Camouflage",
  "Hogwarts Legacy Edição Limitada",
  "Midnight Black",
  "New Rosa",
  "Starlight Blue",
  "Edição Padrão",
  "God of War Ragnarok Edição Limitada"
];

const precos = [
  "R$ 379,00",
  "R$ 1.250,00",
  "R$ 449,99",
  "R$ 399,99",
  "R$ 780,00",
  "R$ 349,90",
  "R$ 379,99",
  "R$ 399,99",
  "R$ 399,90",
  "R$ 429,99"
];

let contador = 0;

function trocaDualsenseETextoEPreco() {
  const img = document.getElementById("dualsense-img");
  const descricao = document.getElementById("descricao");
  const paragrafo = document.getElementById("edition");
  const preco = document.getElementById("preco");
  contador = (contador + 1) % imagens.length;
  img.src = imagens[contador];
  descricao.innerHTML = descricoes[contador];
  paragrafo.innerHTML = paragrafos[contador];
  preco.innerHTML = precos[contador];
}


