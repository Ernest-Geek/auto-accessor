document.addEventListener("DOMContentLoaded", function () {
    // Determine the backend URL based on the environment
    const backendUrl = window.location.hostname === 'localhost'
        ? 'http://127.0.0.1:5000' // Development backend URL
        : 'https://auto-accessor.vercel.app'; // Production backend URL

    // Login form
    const loginForm = document.querySelector("form"); // Select the login form
    const spinner = document.getElementById("spinner"); // Get the spinner element

    loginForm.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Show the spinner
        spinner.style.display = "flex"; // Show the loading spinner

        // Gather form data
        const email = document.getElementById("form2Example1").value; // Get email input
        const password = document.getElementById("form2Example2").value; // Get password input

        // Create login data object
        const loginData = {
            email: email,
            password: password,
        };

        try {
            // Send POST request to the API using the dynamically determined backend URL
            const response = await fetch(`${backendUrl}/api/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(loginData),
            });

            const result = await response.json(); // Parse the response JSON

            if (response.ok) {
                // Handle successful login and redirect to the Dashboard
                window.location.href = "/Dashboard.html"; // Redirect to the dashboard
            } else {
                // Handle errors (e.g., invalid credentials)
                alert(result.message || "Login failed. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error); // Log any errors
            alert("An error occurred. Please try again later.");
        } finally {
            // Hide the spinner after the login process is done
            spinner.style.display = "none"; // Hide the loading spinner
        }
    });

    // Logout functionality
    const logoutButton = document.getElementById("logout-button"); // Assuming you have an ID for the logout button

    if (logoutButton) {
        logoutButton.addEventListener("click", async function (event) {
            event.preventDefault(); // Prevent default anchor behavior (navigation)

            try {
                // Send the POST request to log out using the dynamically determined backend URL
                const response = await fetch(`${backendUrl}/api/logout`, {
                    method: "POST",
                    credentials: "include", // Send the session cookie to ensure the user is logged in
                });

                const result = await response.json();

                if (response.ok) {
                    // Handle successful logout
                    alert("Logged out successfully!");
                    // Redirect to the login page after logout
                    window.location.href = "/login.html"; // Redirect to the login page
                } else {
                    // Handle error if something goes wrong
                    alert(result.message || "Logout failed. Please try again.");
                }
            } catch (error) {
                // Catch network or other errors
                console.error("Error during logout:", error);
                alert("An error occurred during logout. Please try again later.");
            }
        });
    }
});





