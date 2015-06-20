module.exports = {
	analizarLinha: function(matriz, x) {
		var item0 = matriz.obterItem(x, 0);
		var item1 = matriz.obterItem(x, 1);
		var item2 = matriz.obterItem(x, 2);
		
		return item0 != null && item0 == item1 && item1 == item2;
	},
	analizarColuna: function(matriz, y) {
		var item0 = matriz.obterItem(0, y);
		var item1 = matriz.obterItem(1, y);
		var item2 = matriz.obterItem(2, y);

		return item0 != null && item0 == item1 && item1 == item2;
	},
	analizarDiagonalPrincipal: function(matriz) {
		var item0 = matriz.obterItem(0, 0);
		var item1 = matriz.obterItem(1, 1);
		var item2 = matriz.obterItem(2, 2);

		return item0 != null && item0 == item1 && item1 == item2;
	},
	analizarDiagonalSecundaria: function(matriz) {
		var item0 = matriz.obterItem(0, 2);
		var item1 = matriz.obterItem(1, 1);
		var item2 = matriz.obterItem(2, 0);

		return item0 != null && item0 == item1 && item1 == item2;
	}
};