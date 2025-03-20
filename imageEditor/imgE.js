const chooseBtn = document.querySelector("#chooseImages");
chooseBtn.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            event.preventDefault();
            const showImg = document.querySelector(".right");
            showImg.src = event.target.result;
        }
        reader.readAsDataURL(file);
    }
});