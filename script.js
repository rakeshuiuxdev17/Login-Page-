function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const remember = document.getElementById("remember");

    if (username === "") {
        alert("Please enter username");
        return;
    }

    if (password === "") {
        alert("Please enter password");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return;
    }

    if (remember.checked) {
        localStorage.setItem("username", username);
    } else {
        localStorage.removeItem("username");
    }

    alert("Login Successful ✅");
}
