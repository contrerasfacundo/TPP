function seleccionarSabor(sabor) {
    var saborSeleccionado = document.getElementById('saborSeleccionado');
    var imagenesSabor = document.getElementById('imagenesSabor');
    
    saborSeleccionado.textContent = sabor;

    
    var imagenes = imagenesPorSabor[sabor];
    imagenesSabor.innerHTML = ''; 

    imagenes.forEach(function(url) {
        var imagen = document.createElement('img');
        imagen.src = url;
        imagenesSabor.appendChild(imagen);
    });
}