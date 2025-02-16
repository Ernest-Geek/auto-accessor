let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

// Function to open the sidebar
function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

// Function to close the sidebar
function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}

// Function to set active link
function setActive(element) {
  // Get all sidebar items
  const items = document.querySelectorAll('.sidebar-list-item');

  // Remove 'active' class from all items
  items.forEach(item => {
    item.classList.remove('active');
  });

  // Add 'active' class to the clicked item
  element.classList.add('active');
  
  // Close the sidebar after link click if it is open
  closeSidebar();
}

