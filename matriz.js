module.exports = function Matriz() {
	var matriz = [[],[],[]];

	matriz[0][0] = null;
	matriz[0][1] = null;
	matriz[0][2] = null;

	matriz[1][0] = null;
	matriz[1][1] = null;
	matriz[1][2] = null;

	matriz[2][0] = null;
	matriz[2][1] = null;
	matriz[2][2] = null;

	return {
		obterItem: function(x, y) {
			return matriz[x][y];
		},
		adicionarJogada: function(jogador, x, y) {
			matriz[x][y] = jogador;
		}
	};
};