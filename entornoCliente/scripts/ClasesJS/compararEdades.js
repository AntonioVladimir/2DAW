class Persona{
    
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    compararEdad(otra){
        if(this.edad < otra.edad){
            document.write(otra.nombre + " es mayor que yo.<br>")
        }else if(this.edad > otra.edad){
            document.write(otra.nombre + " es más joven que yo.<br>")
        }else{
            document.write(otra.nombre + " tiene mi misma edad.")
        }
            
    }
}

var pers1 = new Persona("Manu", 21);
var pers2 = new Persona("Vladi", 22);
var pers3 = new Persona("Lucia", 14);

pers1.compararEdad(pers2);
pers2.compararEdad(pers1);
pers3.compararEdad(pers3);