function sumParesImpares(numeros){
    var pares = 0;
    var impares = 0;

    for(var num of numeros){
        if(num % 2 === 0){
            pares += num;
        }else{
            impares +=num;
        }
    }
    document.write("["+[pares,impares]+"]");
}

sumParesImpares([1, 2, 3, 4, 5, 6]);
