var path = require('path');
var should = require('should');
var Matriz = require(path.resolve('./matriz'));
var analizador = require(path.resolve('./analizador'));
var matriz;

describe("Analizador", function() {

	beforeEach(function(){
		matriz = new Matriz();
	})

	it("deve ter linha completa", function() {
		var x = 0;

		matriz.adicionarJogada('X', x, 0);
		matriz.adicionarJogada('X', x, 1);
		matriz.adicionarJogada('X', x, 2);

		analizador.analizarLinha(matriz, x).should.be.exactly(true);
	});

	describe("não deve ter linha completa", function(){
		it("se primeira coluna for nula", function() {
			analizador.analizarLinha(matriz, 0).should.be.exactly(false);
		});

		it("se primeira coluna for diferente", function() {
			var x = 0;

			matriz.adicionarJogada('O', x, 0);
			matriz.adicionarJogada('X', x, 1);
			matriz.adicionarJogada('X', x, 2);

			analizador.analizarLinha(matriz, x).should.be.exactly(false);
		});
		it("se segunda coluna for diferente", function() {
			var x = 0;

			matriz.adicionarJogada('X', x, 0);
			matriz.adicionarJogada('O', x, 1);
			matriz.adicionarJogada('X', x, 2);

			analizador.analizarLinha(matriz, x).should.be.exactly(false);
		});
		it("se terceira coluna for diferente", function() {
			var x = 0;

			matriz.adicionarJogada('X', x, 0);
			matriz.adicionarJogada('X', x, 1);
			matriz.adicionarJogada('O', x, 2);

			analizador.analizarLinha(matriz, x).should.be.exactly(false);
		});
	});

	it("deve ter coluna completa", function() {
		var y = 0;

		matriz.adicionarJogada('X', 0, y);
		matriz.adicionarJogada('X', 1, y);
		matriz.adicionarJogada('X', 2, y);

		analizador.analizarColuna(matriz, y).should.be.exactly(true);
	});

	describe("não deve ter coluna completa", function(){
		it("se primeira linha for nula", function() {
			analizador.analizarColuna(matriz, 0).should.be.exactly(false);
		});

		it("se primeira linha for diferente", function() {
			var y = 0;

			matriz.adicionarJogada('O', 0, y);
			matriz.adicionarJogada('X', 1, y);
			matriz.adicionarJogada('X', 2, y);

			analizador.analizarColuna(matriz, y).should.be.exactly(false);
		});
		it("se segunda linha for diferente", function() {
			var y = 0;

			matriz.adicionarJogada('X', 0, y);
			matriz.adicionarJogada('O', 1, y);
			matriz.adicionarJogada('X', 2, y);

			analizador.analizarColuna(matriz, y).should.be.exactly(false);
		});
		it("se terceira linha for diferente", function() {
			var y = 0;

			matriz.adicionarJogada('X', 0, y);
			matriz.adicionarJogada('X', 1, y);
			matriz.adicionarJogada('O', 2, y);

			analizador.analizarColuna(matriz, y).should.be.exactly(false);
		});
	});

	it("deve ter diagonal principal completa", function() {

		matriz.adicionarJogada('X', 0, 0);
		matriz.adicionarJogada('X', 1, 1);
		matriz.adicionarJogada('X', 2, 2);

		analizador.analizarDiagonalPrincipal(matriz).should.be.exactly(true);
	});

	describe("não deve ter diagonal principal completa", function(){
		it("se primeiro item for nulo", function() {
			analizador.analizarDiagonalPrincipal(matriz, 0).should.be.exactly(false);
		});

		it("se primeiro item for diferente", function() {

			matriz.adicionarJogada('O', 0, 0);
			matriz.adicionarJogada('X', 1, 1);
			matriz.adicionarJogada('X', 2, 2);

			analizador.analizarDiagonalPrincipal(matriz).should.be.exactly(false);
		});
		it("se segundo item for diferente", function() {

			matriz.adicionarJogada('X', 0, 0);
			matriz.adicionarJogada('O', 1, 1);
			matriz.adicionarJogada('X', 2, 2);

			analizador.analizarDiagonalPrincipal(matriz).should.be.exactly(false);
		});
		it("se terceiro item for diferente", function() {

			matriz.adicionarJogada('X', 0, 0);
			matriz.adicionarJogada('X', 1, 1);
			matriz.adicionarJogada('O', 2, 2);

			analizador.analizarDiagonalPrincipal(matriz).should.be.exactly(false);
		});
	});
	
	it("deve ter diagonal secundaria completa", function() {

		matriz.adicionarJogada('X', 0, 2);
		matriz.adicionarJogada('X', 1, 1);
		matriz.adicionarJogada('X', 2, 0);

		analizador.analizarDiagonalSecundaria(matriz).should.be.exactly(true);
	});

	describe("não deve ter diagonal secundaria completa", function(){
		it("se primeiro item for nulo", function() {
			analizador.analizarDiagonalSecundaria(matriz, 0).should.be.exactly(false);
		});

		it("se primeiro item for diferente", function() {

			matriz.adicionarJogada('O', 0, 2);
			matriz.adicionarJogada('X', 1, 1);
			matriz.adicionarJogada('X', 2, 0);

			analizador.analizarDiagonalSecundaria(matriz).should.be.exactly(false);
		});
		it("se segundo item for diferente", function() {

			matriz.adicionarJogada('X', 0, 2);
			matriz.adicionarJogada('O', 1, 1);
			matriz.adicionarJogada('X', 2, 0);

			analizador.analizarDiagonalSecundaria(matriz).should.be.exactly(false);
		});
		it("se terceiro item for diferente", function() {

			matriz.adicionarJogada('X', 0, 2);
			matriz.adicionarJogada('X', 1, 1);
			matriz.adicionarJogada('O', 2, 0);

			analizador.analizarDiagonalSecundaria(matriz).should.be.exactly(false);
		});
	});
});