var should = require('should');
var rewire = require('rewire');
var Juiz = rewire("./juiz");

var matriz_parametrosRecebidos;
var analizador_parametrosRecebidos;
var matriz;
var analizador;
var juiz;

describe("Juiz jogo da velha", function() {
	beforeEach(function() {
		matriz = criarMockDaMatriz();
		analizador = criarMockDoAnalizador();
		matriz_parametrosRecebidos = [];
		analizador_parametrosRecebidos = [];

		Juiz.__set__('analizador', analizador);
		juiz = new Juiz(matriz);
	});

	it("deve adicionar jogada na matriz", function() {
		var jogador = 'X';
		var x = 1;
		var y = 2;

		juiz.verificarJogada(jogador, x, y);

		matriz_parametrosRecebidos[0].should.be.equal(jogador);
		matriz_parametrosRecebidos[1].should.be.equal(x);
		matriz_parametrosRecebidos[2].should.be.equal(y);
	});

	it("deve chamar analizador de linha e retornar dados da vitória", function() {
		analizador.analizarLinha = mockPadraoDoAnalizador;
		var jogador = 'X';
		var x = y = 0;

		var resultado = juiz.verificarJogada(jogador, x, y);

		analizador_parametrosRecebidos[0].should.be.equal(matriz);
		analizador_parametrosRecebidos[1].should.be.equal(x);
		resultado.should.have.property('acabou', true);
		resultado.should.have.property('jogadas', ['0,0', '0,1', '0,2']);
		resultado.should.have.property('vencedor', jogador);
	});

	it("deve chamar analizador de coluna e retornar dados da vitória", function() {
		analizador.analizarColuna = mockPadraoDoAnalizador;
		var jogador = 'X';
		var x = y = 1;

		var resultado = juiz.verificarJogada(jogador, x, y);

		analizador_parametrosRecebidos[0].should.be.equal(matriz);
		analizador_parametrosRecebidos[1].should.be.equal(x);
		resultado.should.have.property('acabou', true);
		resultado.should.have.property('jogadas', ['0,1', '1,1', '2,1']);
		resultado.should.have.property('vencedor', jogador);
	});

	it("deve chamar analizador da diagonal principal e retornar dados da vitória", function() {
		analizador.analizarDiagonalPrincipal = mockPadraoDoAnalizador;
		var jogador = 'X';
		var x = y = 2;

		var resultado = juiz.verificarJogada(jogador, x, y);

		analizador_parametrosRecebidos[0].should.be.equal(matriz);
		resultado.should.have.property('acabou', true);
		resultado.should.have.property('jogadas', ['0,0', '1,1', '2,2']);
		resultado.should.have.property('vencedor', jogador);
	});

	it("deve chamar analizador da diagonal secundaria e retornar dados da vitória", function() {
		analizador.analizarDiagonalSecundaria = mockPadraoDoAnalizador;
		var jogador = 'X';
		var x = y = 1;

		var resultado = juiz.verificarJogada(jogador, x, y);

		analizador_parametrosRecebidos[0].should.be.equal(matriz);
		resultado.should.have.property('acabou', true);
		resultado.should.have.property('jogadas', ['2,0', '1,1', '0,2']);
		resultado.should.have.property('vencedor', jogador);
	});

	it("deve retornar que não acabou", function() {
		var jogador = 'X';
		var x = y = 1;

		var resultado = juiz.verificarJogada(jogador, x, y);

		resultado.should.have.property('acabou', false);
	});
});

function mockPadraoDoAnalizador(a,b,c) {

	if(typeof a !== 'undefined')
		analizador_parametrosRecebidos.push(a);	

	if(typeof b !== 'undefined')
		analizador_parametrosRecebidos.push(b);	

	if(typeof c !== 'undefined')
		analizador_parametrosRecebidos.push(c);

	return true;
}

function criarMockDoAnalizador() {
	return {
		analizarLinha: function() { return false; },
		analizarColuna: function() { return false; },
		analizarDiagonalPrincipal: function() { return false; },
		analizarDiagonalSecundaria: function() { return false; }
	};
}

function criarMockDaMatriz() {
	var matriz = {};

	matriz.adicionarJogada = function(jogador, x, y) {
		matriz_parametrosRecebidos.push(jogador);
		matriz_parametrosRecebidos.push(x);
		matriz_parametrosRecebidos.push(y);
	};

	return matriz;
}