const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", (event) => {
    event.preventDefault();
    const { email } = event.target.elements;
    const { password } = event.target.elements;

    const data = {
        email: email.value,
        password: password.value,
    };

    if (email.value === "" || password.value === "") {
        alert("Всі поля повинні бути заповнені!");
    } else {
        console.log(data);
        formRef.reset();
    }
});