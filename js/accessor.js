// Select the drop area and file input elements
const dropArea = document.getElementById('drop-area');
const fileInput = document.getElementById('file-upload');
const uploadButton = document.getElementById('upload-button'); // Make sure this button is in your HTML

// Prevent default behaviors for drag and drop
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false);
    document.body.addEventListener(eventName, preventDefaults, false);
});

// Highlight drop area when item is dragged over it
['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, highlight, false);
});

// Remove highlighting when dragging leaves the area
['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, unhighlight, false);
});

// Handle dropped files
dropArea.addEventListener('drop', handleDrop, false);

// Handle file selection from input
fileInput.addEventListener('change', (e) => handleFiles(e.target.files), false);

// Open the file selector when the button is clicked
uploadButton.addEventListener('click', () => {
    fileInput.click();
});

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

function highlight() {
    dropArea.classList.add('highlight');
}

function unhighlight() {
    dropArea.classList.remove('highlight');
}

function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    handleFiles(files);
}

function handleFiles(files) {
    const fileArray = Array.from(files);
    
    if (fileArray.length > 0) {
        const file = fileArray[0]; // Get the first file
        displayFile(file);
    }
}

function displayFile(file) {
    if (file) {
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const imgPreview = document.createElement('img');
                imgPreview.src = e.target.result;
                imgPreview.style.maxWidth = '100%'; // Set max width for the image
                imgPreview.style.marginTop = '10px'; // Add some margin
                dropArea.innerHTML = ''; // Clear previous image if any
                dropArea.appendChild(imgPreview); // Append image preview to the drop area
            };
            reader.readAsDataURL(file); // Reads the file and triggers onload
        } else {
            alert('Please select an image file.');
        }
    } else {
        alert('No file chosen');
    }
}
