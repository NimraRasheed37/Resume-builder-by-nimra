const navBar = document.getElementById('nav-bar');
const sideBarLinks = document.querySelectorAll("#side-bar .side-bar-links a");
const sidebar = document.querySelector('.side-bar');
const toggleButton = document.querySelector('.fa-bars'); // Adjust selector based on your button

toggleButton.addEventListener('click', () => {
  if (sidebar.classList.contains('active')) {
    sidebar.classList.remove('active');
    setTimeout(() => {
      sidebar.style.display = 'none'; // Hide after transition completes
    }, 300); // Match the transition duration
  } else {
    sidebar.style.display = 'block'; // Show first to enable transition
    setTimeout(() => {
      sidebar.classList.add('active');
    }, 10); // Small delay to ensure transition runs smoothly
  }
});
