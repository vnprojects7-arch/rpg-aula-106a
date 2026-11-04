function poco(heroi){
console.log("");
    console.log("[POÇO] Um poço antigo. Não dá para ver o fundo.");
    console.log("1 - voltar para a vila   2 - beber água (recupera 3 de vida)");
    if (heroi.inventario.includes("moeda furada")) {
      console.log("3 - jogar a moeda furada no poço");
    }
    let escolha = prompt("> ");
    if (escolha === "1") {
      local = "vila";
    } else if (escolha === "2"&& heroi.vida < 10) {
        heroi.vida = heroi.vida + 3
        if (heroi.vida > 10)
          heroi.vida = 10
      console.log("A água é gelada. Vida: " + heroi.vida);
    } else if (escolha === "3" && heroi.inventario.includes("moeda furada")) {
      console.log("A moeda cai sem fazer barulho. Uma corda sobe do fundo do poço, sozinha.");
      heroi.inventario.shift()
      heroi.inventario.push("corda");
      console.log("Inventário: " + heroi.inventario);
    }
    }