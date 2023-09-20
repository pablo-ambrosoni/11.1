document.addEventListener('DOMContentLoaded', function () {
    const botonBuscar = document.getElementById('Buscar');
    const contenedorGato = document.getElementById('gato');

    botonBuscar.addEventListener('click', function () {
      contenedorGato.innerHTML = '';

      const img = document.createElement('img');
      img.alt = 'Gato';
      img.classList.add('CATPHOTO');
      img.style.width = '700px';
      img.style.height = '600px';

      const randomImageNumber = Math.floor(Math.random() * 1000);
      img.src = `https://cataas.com/cat?${randomImageNumber}`;

      contenedorGato.appendChild(img);
    });
  });