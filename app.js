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
function RecorreAmigos(let recorre) {
    for (let i = 0; i < recorre; i++) {
        return amigos(i);
        
    }

}
function listamigos('li') {
    listamigos.innerHTML = amigointroducido;
    listamigos.innerHTML = ""
    
}
function sortearAmigo(){
    if amigos.length = 0{
        console.log("no tienes amigos");
    }else {
    numeroMaximo = amigos.length;
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    recorreramigos(numeroGenerado);
    }
}