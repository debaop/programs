// Fetch the text content from a file (replace 'path/to/your/file.txt' with the actual file path)
fetch('path/to/your/file.txt')
  .then(response => response.text())
  .then(data => {
    // Display the text content in the pre element
    document.getElementById('textContent').textContent = data;
  })
  .catch(error => {
    console.error('Error fetching text content:', error);
  });
