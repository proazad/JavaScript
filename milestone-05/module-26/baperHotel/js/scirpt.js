// Login Form 

document.getElementById("submit").addEventListener("click", function () {
    const emailField = document.getElementById('username');
    const email = emailField.value;
    const passwordField = document.getElementById('password');
    const password = passwordField.value;
    if (!email) {
        document.getElementById('emailError').innerText = "Email Address Field Must not be Empty!";
    } else if (!password) {
        document.getElementById('passwordError').innerText = "Password Field Must not be Empty!";
    }
    else {
        if (email === 'proazad' && password === 'azad') {
            window.location.href = "bank.html";
        } else {
            window.alert("Your given Email or Password is not Correct!");
        }
    }
});

