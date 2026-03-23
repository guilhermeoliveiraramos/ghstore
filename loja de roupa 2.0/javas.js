let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

function addCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  alert('Adicionado ao carrinho!');
}

if (document.getElementById('lista')) {
  let lista = document.getElementById('lista');
  let total = 0;

  carrinho.forEach(item => {
    let li = document.createElement('li');
    li.innerText = item.nome + ' - R$ ' + item.preco;
    lista.appendChild(li);
    total += item.preco;
  });

  document.getElementById('total').innerText = 'Total: R$ ' + total;
}
const params = new URLSearchParams(window.location.search);
const categoria = params.get("cat");
function buscar() {
  const termo = document.getElementById("busca").value.toLowerCase();

  const resultado = produtos.filter(p => 
    p.nome.toLowerCase().includes(termo)
  );

  mostrarProdutos(resultado);
}
function mostrarProdutos(lista) {
  const container = document.getElementById("produtos");
  container.innerHTML = "";

  lista.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML = `
      <h3>${p.nome}</h3>
      <p>R$ ${p.preco}</p>
      <button onclick="addCarrinho('${p.nome}', ${p.preco})">
        Comprar
      </button>
    `;

    container.appendChild(div);
  });
}
mostrarProdutos(filtrados);
document.getElementById("busca").addEventListener("input", buscar);