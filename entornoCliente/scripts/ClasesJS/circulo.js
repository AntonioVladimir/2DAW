class Circulo{
    constructor(radio){
        this.radio = radio; 
    }

    getArea(){
        document.write("Area: " + Math.PI*Math.pow(this.radio,2) + "<br>");
    }
    getPerimetro(){
        document.write("Perímetro: " + 2*Math.PI*this.radio);
    }

}

var circ1 = new Circulo(11);
circ1.getArea();
circ1.getPerimetro();