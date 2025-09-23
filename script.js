function showTab(tabName) {
    // Remove active class from all tabs and contents
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => button.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    
    // Add active class to selected tab and content
    event.target.classList.add('active');
    document.getElementById(tabName).classList.add('active');
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Ensure the first tab is active on page load
    const firstTab = document.querySelector('.tab-button');
    const firstContent = document.querySelector('.tab-content');
    
    if (firstTab && firstContent) {
        firstTab.classList.add('active');
        firstContent.classList.add('active');
    }
});
// Inicializar AOS
AOS.init();