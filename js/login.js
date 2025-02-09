document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("form");

    loginForm.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get user input values
        const email = document.getElementById("form2Example1").value.trim();
        const password = document.getElementById("form2Example2").value.trim();

        if (!email || !password) {
            alert("Please fill in both email and password.");
            return;
        }

        const loginData = { email, password };

        try {
            const response = await fetch("http://127.0.0.1:5000/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(loginData),
            });

            const result = await response.json();

            if (response.ok) {
                alert("Login successful!");
                localStorage.setItem("userToken", result.token); // Store token if needed
                window.location.href = "http://localhost:3000/base"; // Redirect after login
            } else {
                alert(result.message || "Login failed. Please check your credentials.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Server error. Please try again later.");
        }
    });
});

