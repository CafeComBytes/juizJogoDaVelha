var path = require('path');
var should = require('should');
var Matriz = require(path.resolve('./matriz'));

describe("Matriz", function() {
	it("deve iniciar com nulo", function() {
		var matriz = new Matriz();

		should(matriz.obterItem(0, 0)).be.equal(null);
		should(matriz.obterItem(0, 1)).be.equal(null);
		should(matriz.obterItem(0, 2)).be.equal(null);
		should(matriz.obterItem(1, 0)).be.equal(null);
		should(matriz.obterItem(1, 1)).be.equal(null);
		should(matriz.obterItem(1, 2)).be.equal(null);
		should(matriz.obterItem(2, 0)).be.equal(null);
		should(matriz.obterItem(2, 1)).be.equal(null);
		should(matriz.obterItem(2, 2)).be.equal(null);
	});

	it("deve adicionar jogada", function() {
		var matriz = new Matriz();
		var jogador = 'X';
		var x = y = 0;

		matriz.adicionarJogada(jogador, x, y);

		should(matriz.obterItem(x, y)).be.equal(jogador);
	});
});