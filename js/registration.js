document.addEventListener("DOMContentLoaded", function () {
    // Determine the backend URL based on the environment
    const backendUrl = window.location.hostname === 'localhost'
        ? 'http://127.0.0.1:5000' // Development backend URL
        : 'https://auto-accessor.vercel.app'; // Production backend URL

    const form = document.querySelector("form");

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Gather form data
        const username = document.getElementById("form3Example1c").value;
        const email = document.getElementById("form3Example3c").value;
        const password = document.getElementById("form3Example4c").value;
        const confirmPassword = document.getElementById("form3Example4cd").value;

        // Basic validation
        if (!username || !email || !password || !confirmPassword) {
            alert("Please fill out all the fields.");
            return;
        }

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
            // Send POST request to the API using the dynamically determined backend URL
            const response = await fetch(`${backendUrl}/api/register`, {
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
                // Handle errors (e.g., user already exists, server validation failure)
                alert(result.message || "Registration failed. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again later.");
        }
    });

    // Toggle password visibility
    const toggleIcons = document.querySelectorAll('.toggle-password');
    toggleIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const fieldId = this.dataset.field;
            togglePasswordVisibility(fieldId);
        });
    });
});

// Function to toggle password visibility
function togglePasswordVisibility(fieldId) {
    const field = document.getElementById(fieldId);
    if (field.type === "password") {
        field.type = "text";
    } else {
        field.type = "password";
    }
}



