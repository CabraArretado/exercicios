/*
quando um objeto é criado por uma função construtora o prototype dele
aponta pra (NomeDaFunção).prototype, que tem como pai o Function.Prototyoe
que por sua vez tem como pai o Object.prototype */

function MeuObjeto() {}

const ab = new MeuObjeto()
console.log(ab.__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Object.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)



console.log("/////////////////////////////////////")
/* quando um objeto é criado por uma factory o prototype dele
aponta pra Object.prototype */
const a = () => {
    return {

    }
}
const b = a()
console.log(b.__proto__ === a.prototype)
console.log(b.__proto__ === Object.prototype)

console.log("/////////////////////////////////////")

/* quando um objeto é criado literalmente o prototype dele
aponta pra Object.prototype */

const c = {}

console.log(c.__proto__ === Object.prototype)
