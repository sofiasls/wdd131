// Ano atual e data da última modificação no footer
const anoAtual = new Date().getFullYear();
document.getElementById('anoatual').textContent = anoAtual;

document.getElementById('ultimaModificacao').textContent =
  'Última modificação: ' + document.lastModified;

// Menu hambúrguer: alterna a navegação entre visível e não visível
const hamburguer = document.querySelector('#hamburguer');
const nav = document.querySelector('#nav-principal');

hamburguer.addEventListener('click', function () {
  nav.classList.toggle('nav-aberto');

  const menuAberto = nav.classList.contains('nav-aberto');
  hamburguer.setAttribute('aria-expanded', menuAberto);
  hamburguer.textContent = menuAberto ? '✕' : '☰';
});
