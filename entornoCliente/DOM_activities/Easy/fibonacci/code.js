function nuevoNumeroFibonacci(){
    const ul = document.getElementsByTagName('ul')[0];
    const arrayList = document.getElementsByTagName('li');
    const lastList2 = parseInt(arrayList[arrayList.length-2].innerHTML);
    const lastList1 = parseInt(arrayList[arrayList.length-1].innerHTML);
    const newFibValue = lastList2 +lastList1;
    const newLi = document.createElement('li');
    newLi.innerHTML = newFibValue;
    ul.appendChild(newLi);
}