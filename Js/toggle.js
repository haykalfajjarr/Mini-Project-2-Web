const toggleModeButton = document.getElementById('toggle-mode');
const body = document.body;

toggleModeButton.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    toggleModeButton.textContent = 'Light Mode';
  } else {
    toggleModeButton.textContent = 'Dark Mode';
  }
});
