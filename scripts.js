let section = document.querySelector('section');

function criar(){
  let caique = document.createElement('img');

  let esquerda = Math.random() * 700;
  let cima = Math.random() * 700;

  caique.src = 'vitima.jpeg';
  caique.style.left = `${esquerda}px`;
  caique.style.top = `${cima}px`;
  caique.addEventListener('click', acertar);

  section.appendChild(caique);
}

function acertar(){
  this.src = 'explosao.png';
}

setInterval(criar, 1000);
