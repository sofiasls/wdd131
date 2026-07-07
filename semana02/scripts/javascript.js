// Referências aos elementos da interface
const input = document.querySelector('#capfav');
const botao = document.querySelector('button');
const lista = document.querySelector('#lista');

// Ouvinte de evento de clique no botão "Adicionar Capítulo"
botao.addEventListener('click', function () {
  // Só cria o item se o campo não estiver em branco
  if (input.value.trim() !== '') {
    // Cria o elemento li que vai conter o capítulo e o botão de exclusão
    const li = document.createElement('li');

    // Cria o botão de exclusão
    const botaoExcluir = document.createElement('button');

    // Preenche o li com o valor digitado no input
    li.textContent = input.value;

    // Preenche o botão de exclusão com o emoji ❌
    botaoExcluir.textContent = '❌';
    botaoExcluir.setAttribute('aria-label', `Excluir ${input.value}`);

    // Anexa o botão de exclusão dentro do li
    li.append(botaoExcluir);

    // Anexa o li na lista não ordenada do HTML
    lista.append(li);

    // Ouvinte de evento de clique no botão de exclusão: remove o li da lista
    botaoExcluir.addEventListener('click', function () {
      lista.removeChild(li);
      input.focus();
    });

    // Limpa o campo de entrada depois de adicionar o capítulo
    input.value = '';
  }

  // Independentemente de um item ter sido criado ou não, o foco volta para o input
  input.focus();
});
