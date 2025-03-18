// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []
let amigointroducido = 0;


function agregarAmigo() {
    amigointroducido = document.getElementById('amigo').value;
    if (amigointroducido.trim() === "") {
        alert("Por favor, inserte un nombre.");
    }else{
    
    
    amigos.push(amigointroducido);
    limpiarCaja();  
    

    }   
}
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}
function RecorreAmigos() {

}
function recorreramigos('li') {
    recorreramigos.innerHTML = amigointroducido;
    
}