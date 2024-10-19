// main.js
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("form"); // Select the login form

    loginForm.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Gather form data
        const email = document.getElementById("form2Example1").value; // Get email input
        const password = document.getElementById("form2Example2").value; // Get password input

        // Create login data object
        const loginData = {
            email: email,
            password: password,
        };

        try {
            // Send POST request to the API
            const response = await fetch("http://localhost:5000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(loginData),
            });

            const result = await response.json(); // Parse the response JSON

            if (response.ok) {
                // Handle successful login
                alert("Logged in successfully!");
                // Optionally redirect to a protected page or dashboard
                window.location.href = "/main.html"; // Change this to your target page
            } else {
                // Handle errors (e.g., invalid credentials)
                alert(result.message || "Login failed. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error); // Log any errors
            alert("An error occurred. Please try again later.");
        }
    });
});
