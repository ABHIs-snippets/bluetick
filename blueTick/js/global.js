
window.addEventListener('scroll', function () {
    let ht = (window.innerHeight) * .5;
    if (scrollY > ht) {
        document.getElementById("header").setAttribute(
            "style", ` background-color: rgb(89 89 89);
    padding: 12px 20px;`);
    }
    else {
        document.getElementById("header").setAttribute(
            "style", ` background-color: rgb(89 89 89 / 47%);
    padding: 18px 20px;`);

    }
});

