function truesRepetidos(){
    var arrayTrs = [true,true,true];
    var vecesRepetidas = arrayTrs.filter(x => x === true).length;
    if(arrayTrs.length > 0){
      document.write("Tiene: " + vecesRepetidas +" trues.");
    }else{
        document.write("0");
      }
    }
    
truesRepetidos();   