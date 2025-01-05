function showTab(tabName) {
  // Hide all tab contents
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => {
    content.classList.add('hidden');
    content.classList.remove('active'); // Remove the active class from all tabs
  });

  // Show the selected tab content
  const activeTab = document.getElementById(tabName);
  activeTab.classList.remove('hidden');
  activeTab.classList.add('active');
}

function showAcTab(tabName) {
  // Hide all tab contents
  const contents = document.querySelectorAll('.ac-tab-content');
  contents.forEach(content => {
    content.classList.add('hidden');
    content.classList.remove('active'); // Remove the active class from all tabs
  });

  // Show the selected tab content
  const activeTab = document.getElementById(tabName);
  activeTab.classList.remove('hidden');
  activeTab.classList.add('active');
}

function showNestedTab(nestedTabName) {
  // Hide all nested tab contents
  const nestedContents = document.querySelectorAll('.nested-tab-content');
  nestedContents.forEach(content => {
    content.classList.add('hidden');
    content.classList.remove('active'); // Remove the active class from all nested tabs
  });

  // Show the selected nested tab content
  const activeNestedTab = document.getElementById(nestedTabName);
  activeNestedTab.classList.remove('hidden');
  activeNestedTab.classList.add('active');
}

// Show the first tab and nested tab by default
document.addEventListener('DOMContentLoaded', () => {
  // Activate the first tab
  const firstTab = document.querySelector('.tab-content');
  if (firstTab) {
    firstTab.classList.remove('hidden');
    firstTab.classList.add('active');
  }

  // Activate the first ac tab
  const acFirstTab = document.querySelector('.ac-tab-content');
  if (acFirstTab) {
    firstTab.classList.remove('hidden');
    firstTab.classList.add('active');
  }

  // Activate the first nested tab
  const firstNestedTab = document.querySelector('.nested-tab-content');
  if (firstNestedTab) {
    firstNestedTab.classList.remove('hidden');
    firstNestedTab.classList.add('active');
  }
});

// Show the button when the user scrolls down
window.addEventListener('scroll', () => {
  const goToTopButton = document.getElementById('go-to-top');
  if (window.scrollY > 300) {
      goToTopButton.style.display = 'block';
  } else {
      goToTopButton.style.display = 'none';
  }
});

// Scroll smoothly to the top
function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}
