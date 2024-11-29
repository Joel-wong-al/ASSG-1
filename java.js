// Function to toggle the menu
function toggleMenu() {
    // Select the menu element
    const menu = document.querySelector('.menu');
  
    // Toggle the hidden and active classes
    if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
      menu.classList.add('active');
    } else {
      menu.classList.add('hidden');
      menu.classList.remove('active');
    }
  }