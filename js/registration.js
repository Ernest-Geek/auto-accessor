// main.js
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Gather form data
        const username = document.getElementById("form3Example1c").value;
        const email = document.getElementById("form3Example3c").value;
        const password = document.getElementById("form3Example4c").value;
        const confirmPassword = document.getElementById("form3Example4cd").value;

        // Basic validation (you can enhance this)
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        // Create user object
        const userData = {
            username: username,
            email: email,
            password: password,
        };

        try {
            // Send POST request to the API
            const response = await fetch("http://localhost:5000/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            const result = await response.json();

            if (response.ok) {
                // Handle successful registration (redirect, show message, etc.)
                alert("Registration successful!");
                // Optionally redirect to login or home page
                window.location.href = "/login.html";
            } else {
                // Handle errors (e.g., user already exists)
                alert(result.message || "Registration failed. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again later.");
        }
    });
});
