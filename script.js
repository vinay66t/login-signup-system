function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    let storedEmail = localStorage.getItem("userEmail");
    let storedPassword = localStorage.getItem("userPassword");

    if (email === "" || password === "") {
        message.innerText = "Please fill all fields";
        message.style.color = "red";
        return;
    }

    if (email === storedEmail && password === storedPassword) {
        message.innerText = "Login successful!";
        message.style.color = "green";

        setTimeout(function() {
            window.location.href = "index.html";
        }, 1500);
    } else {
        message.innerText = "Invalid email or password";
        message.style.color = "red";
    }
}

function signup() {
    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let message = document.getElementById("signupMessage");

    if (fullname === "" || email === "" || password === "" || confirmPassword === "") {
        message.innerText = "Please fill all fields";
        message.style.color = "red";
        return;
    }

    if (password !== confirmPassword) {
        message.innerText = "Passwords do not match";
        message.style.color = "red";
        return;
    }

    // Save data in browser
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    message.innerText = "Signup successful!";
    message.style.color = "green";

    setTimeout(function() {
        window.location.href = "login page.html";
    }, 1500);
}





