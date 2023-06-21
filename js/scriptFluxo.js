function zoom(event){
    const container = document.querySelector('.container');
    const imagem = document.querySelector('#imgFluxo');
  
    const mouseX = event.clientX - container.offsetLeft;
    const mouseY = event.clientY - container.offsetTop;
  
    const porcentoX = (mouseX / container.offsetWidth) * 100;
    const porcentoY = (mouseY / container.offsetHeight) * 100;
  
    imagem.style.transformOrigin = `${porcentoX}% ${porcentoY}%`;
    imagem.style.transform = 'scale(1.5)';

    const rodape = document.querySelector('footer');
    rodape.style.display = "none";
}

  function tiraZoom(){
    const imagem = document.querySelector('#imgFluxo');
    const rodape = document.querySelector('footer');
    imagem.style.transformOrigin = 'initial';
    imagem.style.transform = 'scale(1)';
    rodape.style.display = "";
  }