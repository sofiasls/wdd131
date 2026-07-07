// 3 - Referências aos elementos da interface
const input = document.querySelector('#capfav');
const botao = document.querySelector('button');
const lista = document.querySelector('#lista');

// 6 - Cria o elemento li que vai conter o capítulo e o botão de exclusão
const li = document.createElement('li');

// 7 - Cria o botão de exclusão
const botaoExcluir = document.createElement('button');

// 8 - Preenche o li com o valor digitado no input
li.textContent = input.value;

// 9 - Preenche o botão de exclusão com o emoji ❌
botaoExcluir.textContent = '❌';
botaoExcluir.setAttribute('aria-label', `Excluir ${input.value}`);

// 10 - Anexa o botão de exclusão dentro do li
li.append(botaoExcluir);

// 11 - Anexa o li na lista não ordenada do HTML
lista.append(li);
