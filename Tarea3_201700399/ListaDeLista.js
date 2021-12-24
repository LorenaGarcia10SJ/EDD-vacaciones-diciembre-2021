class nodo{
    constructor(dato){
        this.dato = dato;
        this.siguiente = null;
        this.anterior = null;
        this.pila = new pila();
    }
}

class listaDoble{
    constructor(){
        this.primero = null;
    }

    insertar(dato){
        let nuevo = new nodo(dato); 

        if(this.primero == null){ 
            this.primero = nuevo;
        }else{
            let aux = this.primero;
            while(aux.siguiente != null){
                if(aux.dato==dato){
                    console.log("Nos se puede insertar el valor");
                    return
                }
                aux = aux.siguiente;
            };
            if(aux.dato==dato){
                console.log("No se puede insertar el valor, ya existe");
                return
            }
            aux.siguiente = nuevo;
            nuevo.anterior = aux;
        }
    }

    mostrarLista(){
        let aux = this.primero;
        while(aux != null){
            console.log("- " + aux.dato);
            aux.pila.infoPila();
            aux = aux.siguiente;
        }
    }

    agregar(datoLista,valorInsertar){
        let aux= this.primero;
        while(aux!= null){
            if(datoLista == aux.dato){
                aux.pila.push(valorInsertar);
                console.log("Se inserto el valor "+aux.dato);
                return 
            }else{
                aux = aux.siguiente;
            }
        }
        console.log("No se encontro el valor")
        return null;
    }
}

class nodoPila{
    constructor(dato){
        this.dato = dato;
        this.siguiente=null;
    }
}
class pila{
    constructor(){
        this.tope=null;
        this.size=0;
    }
    push(dato){
        let nuevo = new nodoPila(dato);

        if(this.pilaVacia()){
            this.tope = nuevo;
            this.size++;
        }else{
            let aux = this.tope;
            nuevo.siguiente = aux;
            this.tope = nuevo;
            this.size++;
        }
    }
    pop(){
        let aux = this.tope;
        this.tope = this.tope.siguiente;
        this.size--;
        return aux;
    }
    peek(){
        return this.tope.dato;
    }
    pilaVacia(){
        if(this.tope==null){
            return true;
        }
        return false;
    }
    infoPila(){
        let aux = this.tope;
        while(aux != null){
            console.log("   -> " + aux.dato);
            aux = aux.siguiente;
        }
    }

    getSize(){
        return this.size;
    }
}

let listaL = new listaDoble();

listaL.insertar("Lorena");
listaL.insertar("Delmy");
listaL.insertar("Lesly");
listaL.insertar("Ruperto");
listaL.insertar("Sofia");
listaL.insertar("Irma" );
listaL.agregar("Lorena",10)
listaL.agregar("Lorena",20)
listaL.agregar("Lorena",3)
listaL.agregar("Delmy",10)
listaL.agregar("Delmy",50)
listaL.agregar("Lesly",10)
listaL.agregar("Lesly",18)
listaL.agregar("Ruperto",30)
listaL.agregar("Sofia",18)
listaL.agregar("Irma",28)
listaL.agregar("Sofia",4)


listaL.mostrarLista();