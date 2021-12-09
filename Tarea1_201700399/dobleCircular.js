class Nodo {
    constructor(dato){
        this.dato = dato
        this.siguiente = null
        this.anterior = null
    }
}

class listaDobleCircular{
    constructor() {
        this.primero = null
        this.cola = null
        this.longitud=0
    }

    insertar(dato)
    {
        let nodo = new Nodo(dato)
        if(this.primero == null){
            //let nodo = new Nodo(dato)
            this.primero = nodo
            this.cola = nodo

            nodo.siguiente = nodo
            nodo.anterior = nodo
            console.log("El dato instertado es "+ dato)

        }
        else {
            this.primero.anterior =nodo
            nodo.siguiente = this.primero
            nodo.anterior = this.cola
            this.primero = nodo
            this.cola.siguiente = nodo
            console.log("Se ha insertado "+dato)

        }
        this.longitud++
    }

}
let lista= new listaDobleCircular()
lista.insertar(1)
lista.insertar(8)
lista.insertar(3)
lista.insertar(5)