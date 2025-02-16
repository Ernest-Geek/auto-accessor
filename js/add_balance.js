// Function to start QR Code scanning
function startScanner() {
    const qrReader = new Html5Qrcode("qr-reader");

    qrReader.start(
        { facingMode: "environment" },
        {
            fps: 10,    // frames per second
            qrbox: 250  // Size of QR code box
        },
        (decodedText, decodedResult) => {
            document.getElementById("scan-status").textContent = `Scanned QR Code: ${decodedText}`;
            qrReader.stop().then(() => {
                // Process the decoded QR Code result (e.g., Bitcoin or USDT address)
                alert("QR Code Scanned! Proceed with payment.");
            }).catch((error) => {
                console.error("Failed to stop QR Code scanner:", error);
            });
        },
        (errorMessage) => {
            console.log("Error in scanning QR Code: ", errorMessage);
        }
    ).catch((error) => {
        console.error("Error starting the scanner:", error);
    });
}

// Function to handle the "Activate Now" button click
function activateTopUp() {
    var amount = document.getElementById('amount').value;
    
    if (!amount || amount <= 0) {
        alert("Please enter a valid amount to deposit.");
    } else {
        alert("Your top-up request has been activated. Please send the amount to the Bitcoin or USDT address provided.");
    }
}

