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
    }
    return;
}
