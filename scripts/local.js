const anoAtual = new Date().getFullYear();
document.getElementById('anoatual').textContent = anoAtual;

document.getElementById('ultimaModificacao').textContent =
  'Última modificação: ' + document.lastModified;

// Valores estáticos correspondentes ao que é exibido na seção "Clima"
const temperaturaC = 29;
const ventoKmh = 14;

function calcularSensacaoTermica(temperatura, vento) {
  return 13.12 + 0.6215 * temperatura - 11.37 * Math.pow(vento, 0.16) + 0.3965 * temperatura * Math.pow(vento, 0.16);
}

let sensacaoTermica;
if (temperaturaC <= 10 && ventoKmh > 4.8) {
  sensacaoTermica = calcularSensacaoTermica(temperaturaC, ventoKmh).toFixed(1) + ' °C';
} else {
  sensacaoTermica = 'N/A';
}

document.getElementById('sensacao-termica').textContent = sensacaoTermica;
