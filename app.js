// El principal objetivo de este desafío es fortalecer tus habilidades en 
// lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; 

function agregarAmigo() {
    let amigointroducido = document.getElementById('amigo').value;
    
    if (amigointroducido.trim() === "") {
        alert("Por favor, inserte un nombre válido.");
    } else {

        amigos.push(amigointroducido);
        console.log(amigos);
        limpiarCaja();
        Recorre_Array(); 

    }
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

function Recorre_Array() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo() {
    let resultado = document.getElementById('resultado'); 
    if (amigos.length === 0) {
        resultado.innerHTML = "No tienes amigos en la lista.";
    } else {
        
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        console.log (indiceAleatorio);
        let amigoSorteado = amigos[indiceAleatorio];   
        resultado.innerHTML = "El amigo sorteado es: " + amigoSorteado;
    }
   
}
