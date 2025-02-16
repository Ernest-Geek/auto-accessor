// Function to show the modal when the "Buy Now" button is clicked
function showModal(event) {
    event.preventDefault(); // Prevents default behavior (link click)
    
    // Get the modal element
    let modal = document.getElementById("lowBalanceModal");
    
    // Show the modal
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    let modal = document.getElementById("lowBalanceModal");
    modal.style.display = "none";
}

// Close the modal if the user clicks anywhere outside the modal
window.onclick = function(event) {
    let modal = document.getElementById("lowBalanceModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
