function zoom(event){
    // definindo as variaveis
    const container = document.querySelector('.container');
    const imagem = document.querySelector('#imgFluxo');
  
    const mouseX = event.clientX - container.offsetLeft;
    const mouseY = event.clientY - container.offsetTop;
  
    const porcentoX = (mouseX / container.offsetWidth) * 100;
    const porcentoY = (mouseY / container.offsetHeight) * 100;

    // retirando o footer quando der zoom
    const rodape = document.querySelector('footer');
    rodape.style.display = "none";

    // dando transform na escala de acordo com o tamanho do container e onde está o cursor
    imagem.style.transformOrigin = `${porcentoX}% ${porcentoY}%`;
    imagem.style.transform = 'scale(1.5)';
}

function tiraZoom(){
// definindo as variaveis
    const imagem = document.querySelector('#imgFluxo');
    const rodape = document.querySelector('footer');
    // resetando os padrões 
    imagem.style.transformOrigin = 'initial';
    imagem.style.transform = 'scale(1)';
    // voltando o display do rodapé
    rodape.style.display = "";
}