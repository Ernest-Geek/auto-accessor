// Import necessary Firebase modules
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getApp } from "firebase/app";
import { firebaseConfig } from './firebase'; // Assuming firebase.js exports firebaseConfig

// Initialize Firebase App
const app = getApp();
const auth = getAuth(app);

// Wait for the DOM content to load
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("form");
    const spinner = document.getElementById("spinner");

    loginForm.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent default form submission

        // Show the spinner
        spinner.style.display = "flex";

        // Gather form data
        const email = document.getElementById("form2Example1").value;
        const password = document.getElementById("form2Example2").value;

        try {
            // Sign in with Firebase Authentication
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log("Logged in as:", user.email);
            window.location.href = "/Dashboard.html"; // Redirect to dashboard
        } catch (error) {
            console.error("Error:", error);
            alert("Login failed. Please check your credentials.");
        } finally {
            spinner.style.display = "none"; // Hide spinner
        }
    });

    // Logout functionality
    const logoutButton = document.getElementById("logout-button");
    if (logoutButton) {
        logoutButton.addEventListener("click", async function (event) {
            event.preventDefault();
            try {
                await signOut(auth);
                alert("Logged out successfully!");
                window.location.href = "/login.html";
            } catch (error) {
                console.error("Error during logout:", error);
                alert("An error occurred during logout. Please try again later.");
            }
        });
    }
});

  






