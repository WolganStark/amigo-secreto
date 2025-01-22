let amigos = [];



function agregarAmigo (){
    let nombre = document.getElementById('amigo').value;
    console.log(nombre);

    if (nombre === '') {
        alert('Debes ingresar un nombre');
        return;
    } else {
        amigos.push(nombre);
        console.log(amigos);
        document.getElementById('amigo').value = '';
        mostrarAmigos();
    }
    return;
}

function mostrarAmigos (){
    document.getElementById('listaAmigos').innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        document.getElementById('listaAmigos').innerHTML += `<li>${amigos[i]}</li>`;
    }
   return;
}

