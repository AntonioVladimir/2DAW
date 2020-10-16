class Deportista{
   

    constructor(nombre, edad, altura, peso){
        this.nombre = nombre;
        this.edad = edad;
        this.altura = altura;
        this.peso = peso;
    }

    getEdad(){
        document.write(this.nombre + " tiene " + this.edad + " años. <br>");
    }

    getAltura(){
        document.write(this.nombre + " mide " + this.altura + ".<br>");
    }

    getPeso(){
        document.write(this.nombre + " pesa " + this.peso + ".");
    }
}
var dep1 = new Deportista ("Vladi",22 , 1.8, 45);

dep1.getEdad();
dep1.getAltura();
dep1.getPeso();