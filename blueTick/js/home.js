
const carousel_sliders = document.querySelector('.carousel_sliders');
const numberOfImages = document.querySelectorAll('.carousel_sliders img').length;
let imageIndex = 1;
let translateX = 0;

function previous() {
    if (imageIndex !== 1) {
        imageIndex--;
        translateX += 100;
    }
    carousel_sliders.style.transform = `translateX(${translateX}vw)`;
}
function next() {
    if (imageIndex !== numberOfImages) {
        imageIndex++;
        translateX -= 100;
    }
    carousel_sliders.style.transform = `translateX(${translateX}vw)`;
}

document.getElementById("close").addEventListener('click',()=>{
    document.getElementById("welcome_popup").style.display = "none";
});