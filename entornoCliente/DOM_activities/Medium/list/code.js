document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".moveBtn");
    const list1 = document.getElementById("list1");
    const list2 = document.getElementById("list2");

    function moveItem(e) {
        const moveTo = this.parentElement.parentElement == list1 ? list2 : list1;
        moveTo.appendChild(this.parentElement);
    }

    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", moveItem);
    }
});
