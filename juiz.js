var analizador = require('./analizador');

module.exports = function(matriz) {

	var juiz = {
		verificarJogada: function(jogador, x, y) {
			matriz.adicionarJogada(jogador, x, y);

			var resultado = {};

			if(analizador.analizarLinha(matriz, x))
				resultado.jogadas = obterJogadasDaLinha(x);
			else if(analizador.analizarColuna(matriz, y))
				resultado.jogadas = obterJogadasDaColuna(y);
			else if(analizador.analizarDiagonalPrincipal(matriz))
				resultado.jogadas = obterJogadasDaDiagonalPrincipal();
			else if(analizador.analizarDiagonalSecundaria(matriz))
				resultado.jogadas = obterJogadasDaDiagonalSecundaria();

			resultado.acabou = typeof resultado.jogadas !== 'undefined';

			if(resultado.acabou)
				resultado.vencedor = jogador;

			return resultado;
		}
	};

	function obterJogadasDaLinha(x) {
		return [x + ',0', x + ',1', x + ',2'];
	};

	function obterJogadasDaColuna(y) {
		return ['0,' + y, '1,' + y, '2,' + y];
	};

	function obterJogadasDaDiagonalPrincipal() {
		return ['0,0', '1,1', '2,2'];
	};

	function obterJogadasDaDiagonalSecundaria() {
		return ['2,0', '1,1', '0,2'];
	};

	return juiz;
};