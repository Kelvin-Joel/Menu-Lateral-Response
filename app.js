class Comidad{
    constructor(nombre,edad,sexo){
        this.nombre=nombre
        this.Edad=edad
        this.sexo=sexo
    }
    mostrar(){
        return `Hola Soy ${this.nombre} y tengo ${this.Edad} y soy ${this.sexo}`
    }
}

const persona1=new Comidad('joel ventura',27,'masculino pe :S')
const persona2=new Comidad('abraham rodas olivo','23','masculino')
console.log(persona1)
console.log(persona2)
console.log(persona2.mostrar())

import {mensaje} from './app2.js'

const value=mensaje('trabajando con module :S js')
console.log(value)