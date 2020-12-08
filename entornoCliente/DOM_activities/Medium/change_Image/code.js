function Change() {
    const randomNum = Math.random();
    document.getElementById('theImg').setAttribute("src", "https://picsum.photos/200/300?random=" + randomNum);
}