// A trilha do farol · jogo de demonstração do Jovem Tech (E15)
// Tudo aqui usa o que vocês já viram: variáveis, prompt, if / else, while e vetor.
// Só uma coisa é nova: Math.random(), que sorteia um número entre 0 e 1.
const prompt = require("prompt-sync")();
const heroi = require("./heroi");
const vila = require("./regioes/vila")
const floresta =require ("./regioes/floresta")
// ===== CONTROLE DO JOGO =====
let local = "vila";        // onde o herói está agora
let jogando = true;        // o jogo continua enquanto for true
const TESTE = false;       // true = a sorte fica fixa, para o roteiro de teste

// ===== HERÓI =====
heroi.nome = prompt("Qual é o nome do seu herói? ");

console.log("");
console.log(heroi.nome + ", o farol da costa apagou. Alguém precisa chegar lá antes do anoitecer.");

while (jogando) {
  // a cada passo, o veneno tira 1 de vida
  if (heroi.veneno > 0) {
    heroi.vida = heroi.vida - 1;
    heroi.veneno = heroi.veneno - 1;
    console.log("O veneno arde. Vida: " + heroi.vida);
  }
  if (heroi.vida <= 0) {
    console.log("Você caiu no caminho. Fim de jogo.");
    jogando = false;
  } 
   if (local === "vila") {
    local = vila(heroi)
  } else if (local === "floresta") {
    local = floresta(heroi)
  } else if (local === "poco") {
    
  } else if (local === "ponte") {
    console.log("");
    console.log("[PONTE] A ponte para o farol caiu. Do outro lado, o farol apagado.");
    if (heroi.inventario.includes("corda")) {
      console.log("1 - amarrar a corda e atravessar   2 - voltar para a floresta");
    } else {
      console.log("Não tem como atravessar.   2 - voltar para a floresta");
    }
    let escolha = prompt("> ");
    if (escolha === "1" && heroi.inventario.includes("corda")) {
      local = "farol";
    } else if (escolha === "2") {
      local = "floresta";
    }
  } else if (local === "farol") {
    console.log("");
    console.log("[FAROL] Você sobe a escada e acende a luz. Lá embaixo, os barcos voltam para casa.");
    console.log("Fim: " + heroi.nome + " salvou a costa com " + heroi.vida + " de vida.");
    jogando = false;
  }
}
