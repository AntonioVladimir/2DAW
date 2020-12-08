function myFunction() {
    var x = document.getElementById('div-aparece');
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}