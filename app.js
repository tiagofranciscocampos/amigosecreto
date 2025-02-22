//O principal objetivo deste desafio é fortalecer suas habilidades
//  em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nome = inputAmigo.value.trim();
    let listaAmigos = document.getElementById("listaAmigos");
    
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    
    amigos.push(nome);
    
    // Atualiza a lista de amigos na tela
    let li = document.createElement("li");
    li.textContent = nome;
    listaAmigos.appendChild(li);
    
    // Limpa o campo de entrada
    inputAmigo.value = "";
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Nenhum amigo foi adicionado.");
        return;
    }
    
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];
    
    // Exibe o resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Amigo sorteado: <strong>${amigoSorteado}</strong></li>`;
}
