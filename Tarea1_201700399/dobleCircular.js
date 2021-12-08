class nodo {
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
        this.nodoActual = null
        this.longitud=0
    }

    insertar(dato)
    {
        
        if(this.primero== null){
            let nuevo = new nodo(dato)
            this.primero = nuevo
            this.cola = nuevo

            nodo.siguiente = nuevo
            nodo.anterior = nuevo
            console.log("El dato instertado es "+ dato)

        }
        else {
            this.primero.anterior =nuevo
            nodo.siguiente = this.primero
            nodo.anterior = this.cola
            this.primero = nuevo
            this.cola.siguiente = nuevo
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