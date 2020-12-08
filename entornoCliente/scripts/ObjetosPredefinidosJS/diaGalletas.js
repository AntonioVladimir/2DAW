function diaGalletas(fecha){
    return fecha.getDate() == 24 && fecha.getMonth() == 11;
}
console.log(diaGalletas(new Date(2013, 11, 24)));