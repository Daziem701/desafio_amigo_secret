// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos=[];

 /* Funcion para agregar amigos */

 function agregarAmigo(){
    nombreAmigo=document.getElementById('amigo').value;
    if(nombreAmigo==''){
        alert('Por favor inserte un nombre valido');
    }else{
        listaAmigos.push(nombreAmigo);
        console.log(listaAmigos);
        listaHTML=document.getElementById('listaAmigos');
        listaHTML.innerHTML+=`<li>${listaAmigos[listaAmigos.length-1]}</li>`;
    }
 limpiarCajaTexto();

 }
 /* Funcion para sortear amigo */
  function sortearAmigo(){
    let numeroAleatorio=Math.floor(Math.random()*listaAmigos.length-1)+1;
    console.log(numeroAleatorio);
    resultadoHTML=document.getElementById('resultado');
    resultadoHTML.innerHTML=`El amigo secreto es: ${listaAmigos[numeroAleatorio]}`;
  }


  /* Funcion limpiar */
  function limpiarCajaTexto(){
    document.querySelector('#amigo').value = '';
  }