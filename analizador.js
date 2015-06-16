module.exports = {
	analizarLinha: function(matriz, x) {
		var coluna0 = matriz.obterItem(x, 0);
		var coluna1 = matriz.obterItem(x, 1);
		var coluna2 = matriz.obterItem(x, 2);
		
		return coluna0 == coluna1 && coluna1 == coluna2;
	},
	analizarColuna: function(matriz, y) {
		var linha0 = matriz.obterItem(0, y);
		var linha1 = matriz.obterItem(1, y);
		var linha2 = matriz.obterItem(2, y);

		return linha0 == linha1 && linha1 == linha2;
	},
	analizarDiagonalPrincipal: function(matriz) {
		var item0 = matriz.obterItem(0, 0);
		var item1 = matriz.obterItem(1, 1);
		var item2 = matriz.obterItem(2, 2);

		return item0 == item1 && item1 == item2;
	},
	analizarDiagonalSecundaria: function(matriz) {
		var item0 = matriz.obterItem(0, 2);
		var item1 = matriz.obterItem(1, 1);
		var item2 = matriz.obterItem(2, 0);

		return item0 == item1 && item1 == item2;
	}
};