var frase = prompt("Escribe una frase:");

function palindromo(frase) {
    frase = frase.replace(/\s/g, "");
  
    frasePalindromo = frase.split("").reverse().toString();
  
    for (i = 0; i < frasePalindromo.length - 1; i++) {
      frasePalindromo = frasePalindromo.replace(",", "");
    }
    if (frase == frasePalindromo) {
      document.write("<br>" + "Palindromo!");
    } else {
      document.write("<br>" + "No Palindromo!");
    }
  }
palindromo(frase);