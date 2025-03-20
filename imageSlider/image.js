const previousBtn = document.querySelector('#btn1');
const nextBtn = document.querySelector('#btn2');
const imageContainer = document.querySelectorAll('.imageContainer .slide');
let counter = 0;

nextBtn.addEventListener('click', () => {
    imageContainer.forEach((slide,index) => {
        slide.style.left = `${index *100}%`;
    });
    counter++;
    if (counter >= imageContainer.length) {
        counter = 0;
    }
    slideImage();
});
const slideImage = () => {
    imageContainer.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    })
}

previousBtn.addEventListener('click', () => {
    imageContainer.forEach((slide,index) => {
        slide.style.left = `${index * 100}%`;
    });
    counter--;
if (counter < 0) {
    counter = imageContainer.length - 1;
}
    slideImage();
});

