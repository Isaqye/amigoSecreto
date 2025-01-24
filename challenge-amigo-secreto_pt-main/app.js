function preencherTexto(id, text){
    let campo = document.getElementById(id)
    campo.innerHTML = text
}

let listaAmigos = []

function adicionarAmigo(){

    let coletar = document.getElementById("amigo").value

    if(coletar == ""){
        alert("Por favor, insira um nome válido!")
    } else{
        listaAmigos.push(coletar)
        exebirNaLista()
    }
    document.querySelector("input").value = ""
}

function exebirNaLista(){
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for( const i of listaAmigos){
        const item = document.createElement("li")
        item.textContent = i;
        lista.appendChild(item);
    }
    
}

function sortearAmigo(){
    if(listaAmigos.length == 0){
        alert("Não á amigos cadastrados!")
    } else{
    let nomeAleatorio = Math.floor(Math.random() * listaAmigos.length)
    
        preencherTexto("resultado", `O amigo secreto é ${listaAmigos[nomeAleatorio]}`)
    }

}

function reiniciarSorteio(){
    listaAmigos = []
    preencherTexto("listaAmigos", "")
    preencherTexto("resultado", "")

}