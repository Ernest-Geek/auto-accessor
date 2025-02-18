// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdg6hJqOca-zrrk7rB_T6V_fvymwh-Gxg",
  authDomain: "worktoolz.firebaseapp.com",
  projectId: "worktoolz",
  storageBucket: "worktoolz.firebasestorage.app",
  messagingSenderId: "574089340019",
  appId: "1:574089340019:web:03d68e40b13f48724e3606",
  measurementId: "G-D8ZDEHZE1G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener("DOMContentLoaded", function () {
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

        try {
            // Register user with Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Handle successful registration
            console.log("User registered successfully:", user.email);
            alert("Registration successful!");

            // Optionally, redirect to login or home page
            window.location.href = "/login.html"; // Redirect to login page
        } catch (error) {
            // Handle registration errors (e.g., email already in use)
            console.error("Error:", error.message);
            if (error.code === 'auth/email-already-in-use') {
                alert("This email is already registered.");
            } else {
                alert("Registration failed. Please check your input and try again.");
            }
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


  






