let activeBtnId = 1;

// Function to show the selected section
function showSection(id) {
  activeBtnId = id;
  // Remove Active class from all buttons
  document.querySelectorAll('.button').forEach(btn => btn.classList.remove('button--active'));
  // Set active button
  document.getElementById('btn' + activeBtnId).classList.add('button--active');
  // Hide all sections
  document.querySelectorAll('.section').forEach(section => section.style.display = 'none');
  
  // Show the selected section
  document.getElementById('section' + id).style.display = 'block';
}
  
  // Function to open the PDF viewer
function openPDF(pdfUrl) {
  const pdfViewer = document.getElementById('pdfViewer');
  const pdfFrame = document.getElementById('pdfFrame');
  
  // Show the PDF viewer and set the iframe src to the clicked PDF
  pdfViewer.style.display = 'flex';
  pdfFrame.src = pdfUrl;
}

// Function to close the PDF viewer
function closePDF() {
  const pdfViewer = document.getElementById('pdfViewer');
  const pdfFrame = document.getElementById('pdfFrame');
  
  // Hide the PDF viewer and reset the iframe src
  pdfViewer.style.display = 'none';
  pdfFrame.src = '';
}

showSection(activeBtnId);