var path = require('path');
var should = require('should');
var Matriz = require(path.resolve('./matriz'));
var analizador = require(path.resolve('./analizador'));

describe("Analizador", function() {
	it("deve ter linha completa", function() {
		var matriz = new Matriz();
		var x = 0;

		matriz.adicionarJogada('X', x, 0);
		matriz.adicionarJogada('X', x, 1);
		matriz.adicionarJogada('X', x, 2);

		analizador.analizarLinha(matriz, x).should.be.exactly(true);
	});

	describe("não deve ter linha completa", function(){
		it("se primeira coluna for diferente", function() {
			var matriz = new Matriz();
			var x = 0;

			matriz.adicionarJogada('O', x, 0);
			matriz.adicionarJogada('X', x, 1);
			matriz.adicionarJogada('X', x, 2);

			analizador.analizarLinha(matriz, x).should.be.exactly(false);
		});
		it("se segunda coluna for diferente", function() {
			var matriz = new Matriz();
			var x = 0;

			matriz.adicionarJogada('X', x, 0);
			matriz.adicionarJogada('O', x, 1);
			matriz.adicionarJogada('X', x, 2);

			analizador.analizarLinha(matriz, x).should.be.exactly(false);
		});
		it("se terceira coluna for diferente", function() {
			var matriz = new Matriz();
			var x = 0;

			matriz.adicionarJogada('X', x, 0);
			matriz.adicionarJogada('X', x, 1);
			matriz.adicionarJogada('O', x, 2);

			analizador.analizarLinha(matriz, x).should.be.exactly(false);
		});
	});

	it("deve ter coluna completa", function() {
		var matriz = new Matriz();
		var y = 0;

		matriz.adicionarJogada('X', 0, y);
		matriz.adicionarJogada('X', 1, y);
		matriz.adicionarJogada('X', 2, y);

		analizador.analizarColuna(matriz, y).should.be.exactly(true);
	});

	describe("não deve ter coluna completa", function(){
		it("se primeira linha for diferente", function() {
			var matriz = new Matriz();
			var y = 0;

			matriz.adicionarJogada('O', 0, y);
			matriz.adicionarJogada('X', 1, y);
			matriz.adicionarJogada('X', 2, y);

			analizador.analizarColuna(matriz, y).should.be.exactly(false);
		});
		it("se segunda linha for diferente", function() {
			var matriz = new Matriz();
			var y = 0;

			matriz.adicionarJogada('X', 0, y);
			matriz.adicionarJogada('O', 1, y);
			matriz.adicionarJogada('X', 2, y);

			analizador.analizarColuna(matriz, y).should.be.exactly(false);
		});
		it("se terceira linha for diferente", function() {
			var matriz = new Matriz();
			var y = 0;

			matriz.adicionarJogada('X', 0, y);
			matriz.adicionarJogada('X', 1, y);
			matriz.adicionarJogada('O', 2, y);

			analizador.analizarColuna(matriz, y).should.be.exactly(false);
		});
	});

	it("deve ter diagonal principal completa", function() {
		var matriz = new Matriz();

		matriz.adicionarJogada('X', 0, 0);
		matriz.adicionarJogada('X', 1, 1);
		matriz.adicionarJogada('X', 2, 2);

		analizador.analizarDiagonalPrincipal(matriz).should.be.exactly(true);
	});

	describe("não deve ter diagonal principal completa", function(){
		it("se primeiro item for diferente", function() {
			var matriz = new Matriz();

			matriz.adicionarJogada('O', 0, 0);
			matriz.adicionarJogada('X', 1, 1);
			matriz.adicionarJogada('X', 2, 2);

			analizador.analizarDiagonalPrincipal(matriz).should.be.exactly(false);
		});
		it("se segundo item for diferente", function() {
			var matriz = new Matriz();

			matriz.adicionarJogada('X', 0, 0);
			matriz.adicionarJogada('O', 1, 1);
			matriz.adicionarJogada('X', 2, 2);

			analizador.analizarDiagonalPrincipal(matriz).should.be.exactly(false);
		});
		it("se terceiro item for diferente", function() {
			var matriz = new Matriz();

			matriz.adicionarJogada('X', 0, 0);
			matriz.adicionarJogada('X', 1, 1);
			matriz.adicionarJogada('O', 2, 2);

			analizador.analizarDiagonalPrincipal(matriz).should.be.exactly(false);
		});
	});
	
	it("deve ter diagonal secundaria completa", function() {
		var matriz = new Matriz();

		matriz.adicionarJogada('X', 0, 2);
		matriz.adicionarJogada('X', 1, 1);
		matriz.adicionarJogada('X', 2, 0);

		analizador.analizarDiagonalSecundaria(matriz).should.be.exactly(true);
	});

	describe("não deve ter diagonal secundaria completa", function(){
		it("se primeiro item for diferente", function() {
			var matriz = new Matriz();

			matriz.adicionarJogada('O', 0, 2);
			matriz.adicionarJogada('X', 1, 1);
			matriz.adicionarJogada('X', 2, 0);

			analizador.analizarDiagonalSecundaria(matriz).should.be.exactly(false);
		});
		it("se segundo item for diferente", function() {
			var matriz = new Matriz();

			matriz.adicionarJogada('X', 0, 2);
			matriz.adicionarJogada('O', 1, 1);
			matriz.adicionarJogada('X', 2, 0);

			analizador.analizarDiagonalSecundaria(matriz).should.be.exactly(false);
		});
		it("se terceiro item for diferente", function() {
			var matriz = new Matriz();

			matriz.adicionarJogada('X', 0, 2);
			matriz.adicionarJogada('X', 1, 1);
			matriz.adicionarJogada('O', 2, 0);

			analizador.analizarDiagonalSecundaria(matriz).should.be.exactly(false);
		});
	});
});