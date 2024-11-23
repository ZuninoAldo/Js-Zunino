//ir orientando a lo que va a terminar en la web de lula
let cliente = prompt("Ingrese su nombre:");
let valido = true;

for (let i = 0; i < cliente.length; i++) {
    if (!isNaN(cliente[i]) || cliente[i] === " ") {
    valido = false;
    break;
    }
}

if (valido){
    let bienvenidoCliente = alert (`Hola, ${cliente} Bienvenido al sector de compras!`)
} else {
    prompt(`El nombre ingresado no es un nombre valido.`)
}

const comprador = prompt(`¿Que tipo de vehiculo buscas? Recorda que puedo sugerirte uno caro o barato.`)

class Auto {
    constructor (marca, modelo, tipo) {
        this.marca = marca;
        this.modelo = modelo;
        this.tipo = tipo;
    }
}

const misAutos = [new Auto ("chevrolete","corsa", "barato"),
new Auto ("ford", "mustang", "caro"),
new Auto ("toyota", "corolla", "elegante"),
new Auto ("renault", "clio", "minimalista"),
]

const nombreAutoCaro = misAutos
.filter(autos => autos.tipo === "caro")
.map(autos => autos.marca);

const nombreAutoBarato = misAutos
.filter(autos => autos.tipo === "barato")
.map(autos => autos.marca);

if (comprador === "caro" ) {
    alert(`Te recomiendo comprar un ${nombreAutoCaro[0]}`)
} else if (comprador === "barato") {
    alert(`Te recomiendo comprar un ${nombreAutoBarato[0]}`)
} else {
    alert (`No puedo recomendarte un tipo que no conozco`)
}

