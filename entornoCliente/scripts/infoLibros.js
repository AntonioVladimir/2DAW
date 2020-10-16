class Libro{

    constructor(titulo, autor){
        this.titulo = titulo;
        this.autor = autor;
    }

    getTitulo(){
        document.write("Titulo: " + this.titulo + "<br>");
    }

    getAutor(){
        document.write("Autor: " + this.autor);
    }

}

var PC = new Libro("El sordo que escuchava", "Paco Noruel");

PC.getTitulo();
PC.getAutor();
