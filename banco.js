class Banco {
    constructor(nome, cnpj, agencia) {
        this.nome = nome;
        this._cnpj = cnpj;
        this.agencia = agencia;
    }

    get cnpj() {
        return this._cnpj;
    }

    set cnpj(novoCnpj) {
        this._cnpj = novoCnpj;
    }
}

class Conta extends Banco {
    constructor(nome, cnpj, agencia, numeroConta) {
        super(nome, cnpj, agencia);
        this.numeroConta = numeroConta;
    }
}

let B1 = new Conta("Nubank", 12341245115, 321, 1675);
let B2 = new Conta("C6 Bank", 15268412347, 300, 3569);

console.log(`${B1.nome} tem ${B1.cnpj} como CNPJ, tem ${B1.agencia} como agência e ${B1.numeroConta} como número de conta.`);
console.log(`${B2.nome} tem ${B2.cnpj} como CNPJ, tem ${B2.agencia} como agência e ${B2.numeroConta} como número de conta.`);