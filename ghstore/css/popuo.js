//pegar os elemntos     
    const modal = document.getElementById("modalSobre");
    const btnAbrir = document.getElementById("abrirSobre");
    const btnFechar = document.querySelector(".fechar");

//abrir o modal 
btnAbrir.onclick = function() {
        modal.style.display = "block";
    }
    //fechar o modal ao clicar no x 
  btnFechar.onclick = function() {
        modal.style.display = "none";
    }
    // Fechar se o usuário clicar fora da caixa branca
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
