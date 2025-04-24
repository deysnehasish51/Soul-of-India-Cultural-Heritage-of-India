const fileInput = document.getElementById('file-input');
const previewImage = document.getElementById('preview-image');
const uploadArea = document.getElementById('upload-area');
const description = document.getElementById('description');
const charCount = document.getElementById('char-count');
const progressBar = document.getElementById('progress-bar');
const progressBarInner = document.getElementById('progress-bar-inner');
const fileDetails = document.getElementById('file-details');

const MAX_SIZE_MB = 15;
const ALLOWED_TYPES = ['image/jpeg', 'image/png'];

// Description Character Count
description.addEventListener('input', () => {
  charCount.textContent = `${description.value.length} / 300`;
});

// File Validation & Preview
fileInput.addEventListener('change', handleFile);

function handleFile(event) {
  const file = event.target.files[0];
  if (file) {
    if (!ALLOWED_TYPES.includes(file.type)) {
      alert("Only JPG and PNG files are allowed.");
      fileInput.value = '';
      return;
    }

    if (file.size > MAX_SIZE_MB * 1024 * 1024) {
      alert("File exceeds 15MB limit.");
      fileInput.value = '';
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      previewImage.src = e.target.result;
      fileDetails.textContent = `File: ${file.name}, Size: ${(file.size / (1024 * 1024)).toFixed(2)} MB`;
    };
    reader.readAsDataURL(file);
  }
}

// Drag and Drop
uploadArea.addEventListener('dragover', (e) => {
  e.preventDefault();
  uploadArea.classList.add('dragover');
});

uploadArea.addEventListener('dragleave', () => {
  uploadArea.classList.remove('dragover');
});

uploadArea.addEventListener('drop', (e) => {
  e.preventDefault();
  uploadArea.classList.remove('dragover');
  const file = e.dataTransfer.files[0];
  fileInput.files = e.dataTransfer.files;
  handleFile({ target: { files: [file] } });
});

// Upload Function
document.getElementById('upload-btn').addEventListener('click', () => {
  const file = fileInput.files[0];
  const descriptionText = description.value;

  if (!file) return alert("Please select a file to upload.");

  // Show progress bar
  progressBar.style.display = 'block';
  progressBarInner.style.width = '0%';

  let progress = 0;
  const simulateProgress = setInterval(() => {
    if (progress >= 100) {
      clearInterval(simulateProgress);
    } else {
      progress += 10;
      progressBarInner.style.width = progress + '%';
    }
  }, 200);

  // Create FormData for sending file and description to the backend
  const formData = new FormData();
  formData.append('image', file);
  formData.append('description', descriptionText);

  // Send file and description to the backend
  fetch('/upload-endpoint', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    if (data.message === 'Upload successful') {
      alert('Upload successful!');
      progressBarInner.style.width = '100%'; // Complete progress bar
    } else {
      alert('Upload failed: ' + data.message);
    }
  })
  .catch(error => {
    console.error("Error during upload:", error);
    alert("Upload failed, please try again.");
  })
  .finally(() => {
    progressBar.style.display = 'none'; // Hide progress bar after the upload completes
  });
});

// Cancel / Reset
document.getElementById('cancel-btn').addEventListener('click', () => {
  if (confirm("Are you sure you want to reset?")) {
    fileInput.value = '';
    previewImage.src = 'https://via.placeholder.com/400x200?text=Preview';
    description.value = '';
    charCount.textContent = '0 / 300';
    fileDetails.textContent = '';
    progressBar.style.display = 'none';
    progressBarInner.style.width = '0%';
  }
});
