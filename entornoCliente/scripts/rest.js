const misDatos = {
    nombre: "Vladi",
    edad: 22,
    email: "avoc0498@gmail.com",
    rSociales: "@VNONS",
    numero: 608183482
};

const { nombre, edad, ...rest } = misDatos;
console.log(nombre);
console.log(edad);
console.log(rest);

const misDatosConRest = { nombre, edad, ...rest };
console.log(misDatosConRest);