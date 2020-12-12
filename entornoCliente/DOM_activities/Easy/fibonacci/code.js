let elemento = 0;
const serie = [0, 1];

function nuevoNumeroFibonacci(){
    const ul = document.getElementById('serie');
    const newLi = document.createElement('li');
    newLi.innerHTML = series(elemento);
    ul.appendChild(newLi);
    elemento ++;
}

function series(n) {
  if(n === 0) return serie[n];
  if(n === 1) return serie[n];
  serie.push(serie[n-1] + serie[n-2]);
  return serie[n];
}