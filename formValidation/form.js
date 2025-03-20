const userName = document.querySelector("#name");
const userAge = document.querySelector("#age");
const userEmail = document.querySelector("#email");
const userPNo = document.querySelector("#phNo");
const userGender = document.querySelector("#userGender");
const userAddress = document.querySelector("#address");
const submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener('click', (event) => {
    // let str = " ";
    const name = userName.value.trim();
    const age = userAge.value;
    const email = userEmail.value;
    const PNo = userPNo.value.trim();
    const address = userAddress.value;
    if (name === '') {
        alert("Please enter a valid Name");
        event.defaultPrevented();
        return;
    }
    if (age < 1 || age > 100) {
        alert("age must be between 1 and 100");
        event.preventDefault();
        return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("please enter a valid email");
        event.preventDefault();
        return;
    }
    const phonePattern = /^[A-Za-z0-9]+$/;
    if (!phonePattern.test(PNo)) {
        alert("Please enter a valid Phone Number");
        event.preventDefault();
        return;
    }
});