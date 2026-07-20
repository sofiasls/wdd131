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

// ===== Cartões de templo (dados dinâmicos) =====
const galeria = document.querySelector('#galeria-templos');
const titulo = document.querySelector('#titulo-secao');
const linksNav = document.querySelectorAll('#nav-principal a');

const titulosPorFiltro = {
  todos: 'Página Inicial',
  antigos: 'Templos Antigos (antes de 1900)',
  novos: 'Templos Novos (depois de 2000)',
  grandes: 'Templos Grandes (acima de 90.000 pés quadrados)',
  pequenos: 'Templos Pequenos (abaixo de 10.000 pés quadrados)'
};

function anoDaConsagracao(templo) {
  return parseInt(templo.consagracao, 10);
}

function filtrarTemplos(filtro) {
  switch (filtro) {
    case 'antigos':
      return templos.filter((templo) => anoDaConsagracao(templo) < 1900);
    case 'novos':
      return templos.filter((templo) => anoDaConsagracao(templo) > 2000);
    case 'grandes':
      return templos.filter((templo) => templo.area > 90000);
    case 'pequenos':
      return templos.filter((templo) => templo.area < 10000);
    default:
      return templos;
  }
}

function criarCartao(templo) {
  const cartao = document.createElement('figure');
  cartao.classList.add('cartao');

  const img = document.createElement('img');
  img.src = templo.urlDaImagem;
  img.alt = templo.nomeDoTemplo;
  img.loading = 'lazy';
  cartao.appendChild(img);

  const legenda = document.createElement('figcaption');
  legenda.innerHTML = `
    <h2>${templo.nomeDoTemplo}</h2>
    <p>Localização: ${templo.localizacao}</p>
    <p>Data de consagração: ${templo.consagracao}</p>
    <p>Área: ${templo.area.toLocaleString('pt-BR')} pés quadrados</p>
  `;
  cartao.appendChild(legenda);

  return cartao;
}

function renderizarTemplos(filtro) {
  galeria.innerHTML = '';
  filtrarTemplos(filtro).forEach((templo) => {
    galeria.appendChild(criarCartao(templo));
  });
  titulo.textContent = titulosPorFiltro[filtro] || titulosPorFiltro.todos;
}

linksNav.forEach((link) => {
  link.addEventListener('click', function (evento) {
    evento.preventDefault();

    linksNav.forEach((item) => item.classList.remove('ativo'));
    link.classList.add('ativo');

    renderizarTemplos(link.dataset.filtro);

    if (nav.classList.contains('nav-aberto')) {
      nav.classList.remove('nav-aberto');
      hamburguer.setAttribute('aria-expanded', false);
      hamburguer.textContent = '☰';
    }
  });
});

renderizarTemplos('todos');
