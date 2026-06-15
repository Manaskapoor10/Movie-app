document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("registerForm");

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");

    const togglePassword = document.querySelector(".togglePassword");

    // =========================
    // TOGGLE PASSWORD VISIBILITY
    // =========================
    if (togglePassword) {
        togglePassword.addEventListener("click", () => {
            const type = passwordInput.getAttribute("type") === "password"
                ? "text"
                : "password";

            passwordInput.setAttribute("type", type);
            togglePassword.classList.toggle("fa-eye");
            togglePassword.classList.toggle("fa-eye-slash");
        });
    }

    // =========================
    // FORM SUBMIT
    // =========================
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const password = passwordInput.value;
            const confirmPassword = confirmPasswordInput.value;

            // =========================
            // VALIDATION
            // =========================
            if (!name || !email || !password || !confirmPassword) {
                alert("Please fill all fields");
                return;
            }

            if (password.length < 6) {
                alert("Password must be at least 6 characters");
                return;
            }

            if (password !== confirmPassword) {
                alert("Passwords do not match");
                return;
            }

            // =========================
            // CREATE USER OBJECT
            // =========================
            const user = {
                name,
                email,
                password
            };

            // =========================
            // SAVE TO LOCALSTORAGE
            // =========================
            let users = JSON.parse(localStorage.getItem("cineverse_users")) || [];

            // check if email already exists
            const existingUser = users.find(u => u.email === email);

            if (existingUser) {
                alert("User already exists with this email");
                return;
            }

            users.push(user);
            localStorage.setItem("cineverse_users", JSON.stringify(users));

            // =========================
            // SUCCESS ACTION
            // =========================
            alert("Account created successfully!");

            form.reset();

            // redirect to login or homepage
            window.location.href = "index.html";
        });
    }

});