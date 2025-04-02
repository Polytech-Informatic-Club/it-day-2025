// Simple countdown script
function updateCountdown() {
    const eventDate = new Date('April 12, 2025 08:30:00').getTime();
    const now = new Date().getTime();
    const difference = eventDate - now;
    
    const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
    console.log(days)
    
    document.getElementById('days').textContent = days > 0 ? days : 0;
}

// Initial update
updateCountdown();

// Update daily
setInterval(updateCountdown, 86400000);


