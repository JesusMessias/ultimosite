const pedra = document.getElementById('pedra');
const papel = document.getElementById('papel');
const tesoura = document.getElementById('tesoura');
const resultado = document.getElementById('resultado');

const opcoes = ['pedra', 'papel', 'tesoura'];

pedra.addEventListener('click', () => {
  jogar('pedra');
});

papel.addEventListener('click', () => {
  jogar('papel');
});

tesoura.addEventListener('click', () => {
  jogar('tesoura');
});

function jogar(escolha) {
  const computador = opcoes[Math.floor(Math.random() * opcoes.length)];
  const resultadoTexto = `${escolha} vs ${computador}: `;

  if (escolha === computador) {
    resultado.textContent = resultadoTexto + 'Empate!';
  } else if ((escolha === 'pedra' && computador === 'tesoura') ||
             (escolha === 'papel' && computador === 'pedra') ||
             (escolha === 'tesoura' && computador === 'papel')) {
    resultado.textContent = resultadoTexto + 'Você ganhou!';
  } else {
    resultado.textContent = resultadoTexto + 'Computador ganhou!';
  }
}